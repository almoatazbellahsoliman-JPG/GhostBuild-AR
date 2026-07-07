"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";

export default function Viewer({ blueprintData }: any) {
  return (
    <div className="h-[650px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#141419]">
      <Canvas camera={{ position: [10, 10, 10] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} />

        <Grid infiniteGrid />
        <OrbitControls />

        {blueprintData && (
          <group>
            <mesh position={[blueprintData.width / 2, -0.05, blueprintData.height / 2]}>
              <boxGeometry args={[blueprintData.width, 0.1, blueprintData.height]} />
              <meshStandardMaterial color="#1E3A8A" />
            </mesh>

            {blueprintData.walls.map((w: any, i: number) => {
              const x = (w.start.x + w.end.x) / 2;
              const z = (w.start.y + w.end.y) / 2;

              const dx = w.end.x - w.start.x;
              const dz = w.end.y - w.start.y;

              const length = Math.sqrt(dx * dx + dz * dz);

              return (
                <mesh key={i} position={[x, 1.5, z]}>
                  <boxGeometry args={[length, 3, w.thickness]} />
                  <meshStandardMaterial color="white" />
                </mesh>
              );
            })}
          </group>
        )}
      </Canvas>
    </div>
  );
}