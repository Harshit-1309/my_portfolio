import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc_v2/scene-transformed.glb");

  // Fix for potential NaN corrupted geometry and WebGL crashes:
  useEffect(() => {
    if (computer.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh) {
          // Disable frustum culling which triggers the NaN computeBoundingSphere crash
          child.frustumCulled = false;
          
          // AGGRESSIVE FIX: Sanitize vertex positions if they contain NaN
          const positions = child.geometry.attributes.position;
          if (positions) {
            for (let i = 0; i < positions.array.length; i++) {
              if (isNaN(positions.array[i])) {
                positions.array[i] = 0;
              }
            }
            positions.needsUpdate = true;
          }
        }
      });
    }
  }, [computer.scene]);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8} 
        castShadow 
      />
      <pointLight intensity={1} position={[0, -1, 0]} />
      <pointLight intensity={1.5} position={[0, 0, 1.5]} color="#915eff" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : isTablet ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.2] : isTablet ? [0, -3, -2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add listeners for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 501px) and (max-width: 1024px)");

    // Set the initial values
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Define callback functions
    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletChange = (event) => setIsTablet(event.matches);

    // Add listeners
    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    // Remove listeners when unmounted
    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 1]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true, powerPreference: "high-performance", antialias: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;