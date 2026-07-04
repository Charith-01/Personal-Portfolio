import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

function CoreSphere() {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.x += delta * 0.08;
    sphereRef.current.rotation.y += delta * 0.18;

    const scale =
      1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.035;

    sphereRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Float
      speed={1.8}
      rotationIntensity={0.7}
      floatIntensity={1.4}
    >
      <group ref={sphereRef} scale={1.12}>
        <mesh>
          <icosahedronGeometry args={[1.7, 2]} />

          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0891b2"
            emissiveIntensity={0.8}
            metalness={0.85}
            roughness={0.18}
            wireframe
          />
        </mesh>

        <mesh scale={0.78}>
          <icosahedronGeometry args={[1.7, 2]} />

          <meshPhysicalMaterial
            color="#7c3aed"
            emissive="#4c1d95"
            emissiveIntensity={0.6}
            metalness={0.65}
            roughness={0.2}
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitRing({
  rotation,
  scale,
  color,
}) {
  return (
    <mesh rotation={rotation} scale={scale}>
      <torusGeometry args={[2.4, 0.018, 16, 160]} />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={2.5}
        color="#ffffff"
      />

      <pointLight
        position={[-4, 1, 3]}
        intensity={25}
        color="#8b5cf6"
      />

      <pointLight
        position={[4, -2, 3]}
        intensity={22}
        color="#22d3ee"
      />

      <Stars
        radius={35}
        depth={30}
        count={900}
        factor={2.5}
        saturation={0}
        fade
        speed={0.4}
      />

      <Sparkles
        count={60}
        scale={6}
        size={2}
        speed={0.35}
        opacity={0.65}
        color="#67e8f9"
      />

      <group scale={0.82}>
        <CoreSphere />

        <OrbitRing
          rotation={[Math.PI / 2.5, 0, 0]}
          scale={1}
          color="#22d3ee"
        />

        <OrbitRing
          rotation={[Math.PI / 2, 0.6, 0]}
          scale={0.9}
          color="#8b5cf6"
        />

        <OrbitRing
          rotation={[0.8, 0.2, 0.8]}
          scale={1.12}
          color="#60a5fa"
        />
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.55}
      />
    </>
  );
}

function DataSphere() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const updateMobileState = () => setIsMobile(mobileQuery.matches);
    const updateVisibility = () => setIsPageVisible(!document.hidden);

    updateMobileState();
    updateVisibility();
    mobileQuery.addEventListener("change", updateMobileState);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      mobileQuery.removeEventListener("change", updateMobileState);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return (
    <div className="data-sphere-wrapper">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={isMobile ? [0.75, 1] : [1, 1.6]}
        frameloop={isPageVisible ? "always" : "never"}
        performance={{ min: 0.6 }}
        gl={{
          alpha: true,
          antialias: !isMobile,
        }}
        fallback={<DataSphereFallbackCanvas />}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

function DataSphereFallbackCanvas() {
  return (
    <div className="data-sphere-canvas-fallback" role="img" aria-label="Data sphere unavailable">
      <span>DATA CORE</span>
    </div>
  );
}

export default DataSphere;
