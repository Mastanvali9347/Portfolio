import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, Sphere, MeshDistortMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const skills = [
  { name: "React JS", color: "#61DAFB", size: 1.2, speed: 0.5, distance: 10, offset: 0 },
  { name: "JavaScript", color: "#F7DF1E", size: 1.0, speed: 0.6, distance: 14, offset: 1 },
  { name: "Python", color: "#3776AB", size: 1.1, speed: 0.4, distance: 18, offset: 2 },
  { name: "FastAPI", color: "#05998B", size: 0.9, speed: 0.7, distance: 22, offset: 3 },
  { name: "Node.js", color: "#339933", size: 1.0, speed: 0.5, distance: 26, offset: 4 },
  { name: "MongoDB", color: "#47A248", size: 0.8, speed: 0.8, distance: 12, offset: 5 },
  { name: "Three.js", color: "#FFFFFF", size: 0.9, speed: 0.6, distance: 16, offset: 6 },
  { name: "Tailwind", color: "#06B6D4", size: 0.8, speed: 0.9, distance: 20, offset: 7 },
  { name: "Framer", color: "#0055FF", size: 0.9, speed: 0.7, distance: 24, offset: 8 },
];

function SkillPlanet({ name, color, size, speed, distance, offset }) {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.sin(t) * distance;
    ref.current.position.z = Math.cos(t) * distance;
    ref.current.position.y = Math.sin(t * 0.5) * 2;
    ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[size, 32, 32]} />
          <MeshDistortMaterial color={color} speed={2} distort={0.3} radius={1} />
        </mesh>
        
        <Html distanceFactor={15} position={[0, size + 0.5, 0]}>
          <div className="whitespace-nowrap bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[10px] font-bold pointer-events-none">
            {name}
          </div>
        </Html>
      </Float>
      
      {/* Orbit Line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[distance, 0.02, 16, 100]} />
        <meshBasicMaterial color="white" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

function CenterCore() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y += 0.005;
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[3, 64, 64]} />
        <MeshDistortMaterial
          color="#F4B942"
          emissive="#FF7A18"
          emissiveIntensity={2}
          distort={0.4}
          speed={1.5}
          roughness={0}
        />
        <pointLight intensity={3} distance={50} color="#F4B942" />
      </mesh>
    </group>
  );
}

export default function SkillsGalaxy() {
  return (
    <section className="h-[800px] w-full relative bg-black/20" id="skills">
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center pt-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
          Interactive <span className="text-gradient">Galaxy</span>
        </h2>
        <p className="text-white/40 text-sm uppercase tracking-[0.5em]">Explore my technology stack</p>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 25, 40], fov: 45 }}>
          <color attach="background" args={["#050505"]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <CenterCore />
            {skills.map((skill, i) => (
              <SkillPlanet key={i} {...skill} />
            ))}
          </Suspense>
        </Canvas>
      </div>
      
      {/* Bottom info */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 glass px-6 py-2 rounded-full border-white/10 text-white/50 text-xs">
        SCROLL TO EXPLORE • HOVER PLANETS • INTERACT WITH SPACE
      </div>
    </section>
  );
}
