import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function LaptopModel() {
  const group = useRef();
  const cube = useRef();
  const sphere = useRef();
  const glass = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.45) * 0.12 - 0.28;
      group.current.position.y = Math.sin(t * 0.9) * 0.08;
    }
    if (cube.current) {
      cube.current.rotation.x += 0.012;
      cube.current.rotation.y += 0.016;
    }
    if (sphere.current) {
      sphere.current.position.y = 1.4 + Math.sin(t * 1.2) * 0.22;
    }
    if (glass.current) {
      glass.current.rotation.z = Math.sin(t * 0.7) * 0.18;
      glass.current.position.y = -0.2 + Math.sin(t * 0.8) * 0.12;
    }
  });

  return (
    <group ref={group} rotation={[0.16, -0.28, 0.02]} position={[0, -0.35, 0]}>
      <mesh position={[0, 0, 0]} rotation={[-0.18, 0, 0]}>
        <boxGeometry args={[3.8, 0.16, 2.35]} />
        <meshStandardMaterial color="#111827" metalness={0.55} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.94, -1.02]} rotation={[-0.18, 0, 0]}>
        <boxGeometry args={[3.65, 2.15, 0.13]} />
        <meshStandardMaterial color="#10152f" metalness={0.25} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.94, -0.94]} rotation={[-0.18, 0, 0]}>
        <planeGeometry args={[3.28, 1.78]} />
        <meshBasicMaterial color="#06152e" />
      </mesh>
      {[-0.68, -0.36, -0.05, 0.27, 0.58].map((y, index) => (
        <mesh key={y} position={[-0.72 + index * 0.08, 1.05 + y, -0.82]} rotation={[-0.18, 0, 0]}>
          <boxGeometry args={[1.55 - index * 0.16, 0.035, 0.025]} />
          <meshBasicMaterial color={index % 2 ? "#9d5cff" : "#34e5ff"} />
        </mesh>
      ))}
      <mesh ref={cube} position={[2.25, 1.4, -0.25]}>
        <boxGeometry args={[0.62, 0.62, 0.62]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#321080" emissiveIntensity={0.45} metalness={0.2} roughness={0.25} />
      </mesh>
      <mesh ref={sphere} position={[-2.05, 1.4, 0.05]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial color="#34e5ff" emissive="#0a7f94" emissiveIntensity={0.55} metalness={0.1} roughness={0.18} />
      </mesh>
      <mesh ref={glass} position={[1.65, -0.2, 0.55]} rotation={[0.5, 0.25, 0.2]}>
        <octahedronGeometry args={[0.44, 0]} />
        <meshStandardMaterial color="#dbeafe" transparent opacity={0.38} metalness={0.08} roughness={0.04} />
      </mesh>
      <pointLight position={[0.8, 2.5, 1.5]} intensity={3.2} color="#34e5ff" />
      <pointLight position={[-2, 1.6, 2]} intensity={2.4} color="#9d5cff" />
    </group>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 1.2, 6.2], fov: 45 }} dpr={[1, 1.7]}>
      <ambientLight intensity={0.95} />
      <directionalLight position={[4, 5, 5]} intensity={1.8} />
      <LaptopModel />
    </Canvas>
  );
}

export default HeroScene;
