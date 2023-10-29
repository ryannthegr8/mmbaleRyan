import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

//Style
import "../../style/index.css";

function PlanetImport() {
  const HolyKey = useGLTF("./planet/scene.gltf");
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
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

      <mesh>
        <primitive
          object={HolyKey.scene}
          scale={1.2}
          // position={[0, -4.25, -1.5]}
          // rotation={[-0.01, -0.02, -0.01]}
        />
      </mesh>
    </>
  );
}

function Planet() {
  return (
    <>
      <div id="container">
        <Suspense fallback={null}>
          <Canvas>
            <PlanetImport />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}

export default Planet;
