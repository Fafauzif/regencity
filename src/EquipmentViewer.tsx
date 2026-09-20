import React, { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Html, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

type Part = { id:number; title:string; component:string }
type Props = { nodeId:string; url:string; parts:Part[]; selected:number; showMarkers:boolean; preset:string; zoom:number; focus:number; reset:number; onSelect:(id:number)=>void; onReady:()=>void; onError:()=>void }
class SceneBoundary extends React.Component<{children:React.ReactNode;onError:()=>void},{bad:boolean}> {
  state={bad:false}
  static getDerivedStateFromError(){return {bad:true}}
  componentDidCatch(){this.props.onError()}
  render(){return this.state.bad?null:this.props.children}
}
function Scene({props}:{props:Props}) {
  const source=useGLTF(props.url)
  const controls=useRef<any>(null)
  const {camera}=useThree()
  const frame=useMemo(()=>{
    const scene=source.scene.clone(true)
    scene.updateMatrixWorld(true)
    const bounds=new THREE.Box3().setFromObject(scene)
    const center=bounds.getCenter(new THREE.Vector3())
    const size=bounds.getSize(new THREE.Vector3())
    const unit=3/Math.max(size.x,size.y,size.z)
    const anchors=props.parts.map(part=>{
      let object:THREE.Object3D|undefined
      scene.traverse(o=>{if(o.name===`${props.nodeId}.${part.component}`||o.name===part.component)object=o})
      const point=object?new THREE.Box3().setFromObject(object).getCenter(new THREE.Vector3()):center.clone()
      return point.sub(center).multiplyScalar(unit)
    })
    scene.traverse(object=>{
      if(object instanceof THREE.Mesh){
        object.castShadow=true; object.receiveShadow=true
        const materials=Array.isArray(object.material)?object.material:[object.material]
        object.material=materials.map(material=>{
          const clone=material.clone()
          if(clone instanceof THREE.MeshStandardMaterial){clone.roughness=.52;clone.metalness=.16}
          return clone
        })
        if(!Array.isArray((object as THREE.Mesh).material)||materials.length===1)object.material=(object.material as THREE.Material[])[0]
      }
    })
    return {scene,center,unit,anchors,floor:-size.y*unit/2-.015}
  },[source.scene,props.nodeId,props.parts])
  const desired=useRef({position:new THREE.Vector3(4,2.5,5),target:new THREE.Vector3(),moving:true})
  useEffect(()=>{
    const dirs:Record<string,number[]>={overview:[4.8,3.2,5.8],front:[0,1.9,7],side:[7,2,0],rear:[-4.8,2.6,-5.8],closeup:[4,2.2,5]}
    const d=new THREE.Vector3(...(dirs[props.preset]||dirs.overview) as [number,number,number]).normalize()
    const focusPoint=props.focus>0?frame.anchors[props.selected-1]?.clone():undefined
    const target=focusPoint?focusPoint.multiplyScalar(.55):new THREE.Vector3(0,.02,0)
    const distance=(props.preset==='closeup'?3.5:5.8)*props.zoom*(focusPoint?.9:1)
    desired.current={position:target.clone().add(d.multiplyScalar(distance)),target,moving:true}
  },[props.preset,props.zoom,props.focus,props.reset,frame])
  useFrame((_,dt)=>{
    if(!controls.current||!desired.current.moving)return
    const speed=1-Math.exp(-dt*6)
    camera.position.lerp(desired.current.position,speed)
    controls.current.target.lerp(desired.current.target,speed)
    controls.current.update()
    if(camera.position.distanceTo(desired.current.position)<.002)desired.current.moving=false
  })
  useEffect(()=>{props.onReady()},[props.url])
  return <>
    <group scale={frame.unit} position={frame.center.clone().multiplyScalar(-frame.unit)}><primitive object={frame.scene}/></group>
    {props.showMarkers&&props.parts.map((part,i)=><Html key={part.component} position={frame.anchors[i]} center zIndexRange={[15,1]} style={{pointerEvents:'auto'}}><button className={`world-hotspot ${props.selected===part.id?'active':''}`} aria-label={`Inspect ${part.id}: ${part.title}`} aria-pressed={props.selected===part.id} onPointerDown={e=>e.stopPropagation()} onClick={()=>props.onSelect(part.id)} title={part.title}>{part.id}</button></Html>)}
    <ContactShadows position={[0,frame.floor,0]} opacity={.28} scale={9} blur={2.8} far={5} resolution={512} frames={1}/>
    <OrbitControls ref={controls} makeDefault enableDamping dampingFactor={.085} enablePan rotateSpeed={.7} zoomSpeed={.8} minDistance={2.2} maxDistance={9} minPolarAngle={.12} maxPolarAngle={Math.PI/2+.1} onStart={()=>{desired.current.moving=false}}/>
  </>
}
export default function EquipmentViewer(props:Props){
  return <SceneBoundary onError={props.onError}><Canvas className="model-canvas" dpr={[1,1.75]} camera={{position:[4,2.5,5],fov:36,near:.05,far:80}} shadows gl={{antialias:true,alpha:false,toneMapping:THREE.ACESFilmicToneMapping,toneMappingExposure:1.15}}>
    <color attach="background" args={['#f0f2f1']}/><hemisphereLight args={['#ffffff','#bec9d0',2.2]}/><directionalLight position={[4,7,5]} intensity={3.2}/><directionalLight position={[-5,3,-4]} intensity={1.4}/><directionalLight position={[-4,2,4]} intensity={.65}/>
    <Suspense fallback={<Html center><span className="canvas-loading">Preparing the model…</span></Html>}><Scene props={props}/></Suspense>
  </Canvas></SceneBoundary>
}
