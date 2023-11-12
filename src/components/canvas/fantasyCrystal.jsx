import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function CrystalImport() {
  const CrystalObject = useGLTF("./sakura/scene.gltf");
  return (
    <>
      <hemisphereLight />
      <ambientLight />
      <pointLight intensity={5} />
      <spotLight
        position={[28, 46, 10]}
        castShadow
        angle={1}
        penumbra={1}
        shadow-mapSize={1024}
      />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />

      <mesh>
        <primitive
          object={CrystalObject.scene}
          scale={2.2}
          position={[0, -2.0, 0]}
          // rotation={[0.01, 0.02, 0.01]}
        />
      </mesh>
    </>
  );
}

function fantasyCrystal() {
  return (
    <>
      <div id="canvasContainer">
        <Suspense fallback={null}>
          <Canvas>
            <CrystalImport />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}

export default fantasyCrystal;
