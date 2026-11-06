"use client";

/**
 * components/visual/NetworkCanvas.tsx — the "Defensive Network" scene.
 * PROMPT.md §5:
 *  - 400–600 instanced nodes (InstancedMesh, GPU instancing)
 *  - thin accent lines at 8–12% opacity
 *  - imperceptible drift (~0.3°/s), slow auto-rotation
 *  - fog #101113 near 600 far 1500, camera z=900 fov 45, dpr capped [1, 1.5]
 *  - monochrome accent only, flat, shadows OFF
 *  - prefers-reduced-motion → zero rotation, no drift (static geometry)
 *
 * The canvas is pointer-events-none (decoration only, §4.2), so
 * OrbitControls here only provides the auto-rotation from the spec snippet.
 */

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 500;
const NODE_RADIUS = 2.4;
const CLOUD_RADIUS = 320;
const EDGE_MAX_DISTANCE = 90;
const EDGE_CAP = 750;
const DRIFT_AMPLITUDE = 1.6;
const ACCENT = "#91A98C";

/** Deterministic PRNG so server/client geometry agrees. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildNetwork() {
  const rand = mulberry32(20261106);
  const positions: THREE.Vector3[] = [];
  const phases: number[] = [];

  for (let i = 0; i < NODE_COUNT; i++) {
    // Uniform direction, radius biased toward the shell for a clean silhouette.
    const u = rand() * 2 - 1;
    const theta = rand() * Math.PI * 2;
    const r = CLOUD_RADIUS * Math.cbrt(0.35 + 0.65 * rand());
    const s = Math.sqrt(1 - u * u);
    positions.push(
      new THREE.Vector3(r * s * Math.cos(theta), r * u, r * s * Math.sin(theta))
    );
    phases.push(rand() * Math.PI * 2);
  }

  // Edges: connect nearby node pairs, capped for the frame budget.
  const edgePositions: number[] = [];
  let edges = 0;
  for (let i = 0; i < NODE_COUNT && edges < EDGE_CAP; i++) {
    for (let j = i + 1; j < NODE_COUNT && edges < EDGE_CAP; j++) {
      if (positions[i].distanceTo(positions[j]) < EDGE_MAX_DISTANCE) {
        edgePositions.push(
          positions[i].x, positions[i].y, positions[i].z,
          positions[j].x, positions[j].y, positions[j].z
        );
        edges++;
      }
    }
  }

  return { positions, phases, edgePositions: new Float32Array(edgePositions) };
}

function Network({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { positions, phases, edgePositions } = useMemo(() => buildNetwork(), []);

  // Imperceptible drift: tiny per-node oscillation (~0.3°/s feel).
  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = reducedMotion ? 0 : clock.getElapsedTime();

    for (let i = 0; i < positions.length; i++) {
      const p = positions[i];
      dummy.position.set(
        p.x + (reducedMotion ? 0 : Math.sin(t * 0.05 + phases[i]) * DRIFT_AMPLITUDE),
        p.y + (reducedMotion ? 0 : Math.cos(t * 0.04 + phases[i]) * DRIFT_AMPLITUDE),
        p.z
      );
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;

    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y = t * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[NODE_RADIUS, 8, 8]} />
        <meshBasicMaterial color={ACCENT} />
      </instancedMesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.1} />
      </lineSegments>
    </group>
  );
}

export default function NetworkCanvas({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 900], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <color attach="background" args={["#101113"]} />
      <fog attach="fog" args={["#101113", 600, 1500]} />
      {/* §5 lighting: ambient at surface tone + 20% directional, shadows off */}
      <ambientLight color="#181A1D" intensity={1} />
      <directionalLight position={[200, 300, 400]} intensity={0.2} />
      <Network reducedMotion={reducedMotion} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}
