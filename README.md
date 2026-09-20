# ReGenCity Indonesia v2

A Vercel-ready React + TypeScript + Vite internal screening dashboard for city officials. The default entry opens the internal platform overview; `/equipment` opens the Gopang-inspired equipment studio.

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

The browser loads prebuilt GLB files from `public/models` through Three.js. The source models are real CadQuery assemblies in `../cadquery_src`; STEP, STL, GLB, manifests, and verified PNG previews are included in the source package. Current concept data is deterministic demo data with no backend or live telemetry.

## Routes

- `/platform` — internal city operations dashboard
- `/platform/nodes` — node portfolio
- `/platform/nodes/regenport`, `/regentransit`, `/regenflow` — node workspaces
- `/platform/impact` — bounded impact view
- `/platform/scenarios` — deterministic scenario controls
- `/platform/methodology` — assumptions and limitations
- `/equipment` — equipment collection
- `/equipment/:node` — product-image and interactive-3D studio

The equipment studio has Product images / Interactive 3D modes, Overview / Service access / Exploded view / Close-up rails, Front / Side / Rear / Reset controls, working zoom buttons, six clickable component markers per node, component accordions, and an explicit WebGL fallback that keeps the image mode usable.
