# ReGenCity Indonesia — platform copy

All wording and values in this file are **provisional** unless a line is marked **screening estimate**. This file is the editorial companion to `regencity-content.json`.

## Landing

**Eyebrow**  
ReGenCity Indonesia · provisional concept demonstration

**Headline**  
Recover what the city already moves.

**Body**  
ReGenCity connects port, transit, and water systems that already move mass, vehicles, or pressure. It captures energy that would otherwise be dissipated, uses it locally first, stores the surplus, and coordinates a bounded response when the grid needs flexibility.

**Primary actions**

- Explore the ReGenCity Platform
- Explore the Equipment

The product has exactly two primary paths: `/platform` and `/equipment`. The home route is a two-choice landing, not a third product path.

## Platform narrative

### The problem

Urban systems lose useful energy during normal work. Trains brake, cranes lower loads, and water networks reduce pressure as part of their required service. ReGenCity treats those events as recovery opportunities while keeping transport, cargo, and water service as hard constraints. **Provisional framing.**

### The operating principle

1. **Normal operations create recovery events.** A train brakes, a crane lowers a load, or water passes through a suitable pressure-reduction point. **Provisional framing.**
2. **Use energy locally first.** A nearby accelerating train, lifting crane, station load, or facility load receives the first opportunity. **Provisional framing.**
3. **Store the surplus.** Supercapacitors, batteries, flywheels, or water and ballast systems absorb energy that cannot be used immediately. **Provisional framing.**
4. **Dispatch within operational bounds.** The coordinator offers stored energy or flexible demand only after safety, service, and reserve limits are checked. **Provisional framing.**

ReGenCity does not command infrastructure to move wastefully just to generate electricity. Recovery is opportunistic; automatic response comes mainly from stored energy and flexible demand. **Provisional framing.**

### The three recovery nodes

- **ReGenPort** — Regenerative crane lowering with local direct use and short-duration storage. Cargo handling stays primary. **Provisional framing.** **Screening estimate:** `0.690 GWh/year`, based on a demo assumption.
- **ReGenTransit** — Wayside capture for regenerative rail braking, with direct use by another train or a station load before storage. **Provisional framing.** **Screening estimate:** `0.142 GWh/year`, based on a demo assumption.
- **ReGenFlow** — A serviceable pressure-recovery skid using a pump-as-turbine or microturbine while maintaining required flow and pressure through isolation and bypass. **Provisional framing.** **Screening estimate:** `0.320 GWh/year`, based on a demo assumption.

### The coordination layer

A local controller protects each asset. A facility energy layer decides whether recovered energy is used, stored, or held in reserve. A district coordinator shares forecasts and availability. ReGenCity OS presents the combined flexibility for planning and a future utility interface. This is a **provisional architecture**; the demonstration does not use live telemetry.

City-level coordination means shared data, forecasts, and bounded dispatch. It does not imply a new shared physical cable between every site. **Provisional framing.**

### Screening summary

These figures are for comparison and interaction only:

- **Combined annual recovery:** `1.153 GWh/year` — **screening estimate**, rounded aggregate of the three demo assumptions.
- **Flexible response:** `1.3 MW for 15 minutes` — **screening concept target**, used for the bounded dispatch story.

An optional Jakarta opportunity range can be shown only with its caveat: `3.5–11.3 GWh/year` and `4.3–11.5 MW` are **screening opportunity ranges** from an essay-level pilot projection and require site data.

### The recoverability index

The Urban Recoverability Index is a **provisional screening method** for ranking candidate assets before detailed engineering. It considers recoverable energy per cycle, normal operating cycles, available power and local demand, retrofit effort, grid value, service criticality, ownership, data access, and safety review.

## Equipment viewer copy

**Intro**  
Inspect each recovery node using the same interaction pattern: select a numbered hotspot, change camera, switch between default, exploded, and service views, and review the screening assumption. **Provisional viewer framing.**

**Status labels**

- `screening estimate`
- `screening concept target`
- `provisional assumption`
- `not implemented in this demonstration`
- `3D preview unavailable`

**Fallback**  
If the model cannot load, retain the route and controls, show the generated render, and display “3D preview unavailable.” **Provisional behavior.**

## Methodology and assumptions

This is a communication and interaction prototype. Screening values are not measured site performance, procurement specifications, fabrication drawings, or a field operating plan. **Provisional methodology statement.**

- Primary service remains the hard constraint: cargo throughput, train safety and reliability, water pressure, and equipment protection.
- Local safety functions must work without a cloud connection.
- High short-duration power does not imply high stored energy; the platform is aimed at high-cycle recovery and flexibility, not multi-hour city backup.
- Equipment ratings, dimensions, flow, pressure, rail interfaces, tariffs, interconnection, maintenance, structural conditions, and regulatory treatment require site studies.
- The coordination story is illustrative and does not use live telemetry or utility dispatch.
- The equipment models are illustrative and are not fabrication-ready drawings or certifications.
- Future flexibility revenue and cross-site market access are opportunities, not confirmed outcomes.

## Judge answers

**Why not use batteries alone?**  
ReGenCity captures energy that already exists, uses it locally where possible, and can reduce high-power cycling placed on batteries. **Provisional framing.**

**Can it generate whenever the grid needs power?**  
No. Recovery is opportunistic. Automatic response comes from stored energy and flexible loads that normal operations have refilled. **Provisional framing.**

**What is new?**  
The proposed novelty is a standardized, recovery-first architecture that forecasts, measures, and coordinates established recovery technologies across port, transit, and water systems. **Provisional framing.**
