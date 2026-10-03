# Distance and Displacement Simulation

An interactive physics simulation for comparing **distance traveled** with **displacement**.

Live site: https://hanihamadah.github.io/distance-displacement-simulation/

## What It Shows

- A moving point on graph paper divided into meters.
- Total distance as the accumulated path length.
- Displacement as a vector from the starting point to the current point.
- Notation: horizontal displacement `Δx`, vertical displacement `Δy`, 2D displacement vector `D`.
- **1D**: signed `Δx` (+ right, − left).
- **2D / circle**: `D` with angle `θ` from the positive x-axis, plus its components `Δx` and `Δy`.

## Modes

- **1D**: The point moves only along the x-axis.
- **2D**: The point can move freely in the x-y plane.
- **Around a circle**: The point is constrained to a circle of radius `3 m` centered at `(3, 0)`, starting at `(0, 0)`.

## Controls

- Drag the red point to move it manually.
- Press **Play** to animate the point.
- Press **Reset** to clear the path and return to the starting point.

## Physics Notes

Distance is a scalar quantity: it measures the total path traveled.

Displacement is a vector quantity: it points from the starting position to the current position and includes both magnitude and direction.
