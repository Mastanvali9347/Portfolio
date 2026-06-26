import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Html, OrbitControls, Stars, ContactShadows, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const skills = [
  { name: "React JS", color: "#61DAFB", size: 1.4, speed: 0.3, distance: 12, inclination: 0.2, hasRings: true },
  { name: "JavaScript", color: "#F7DF1E", size: 1.1, speed: 0.45, distance: 16, inclination: -0.1 },
  { name: "Python", color: "#3776AB", size: 1.2, speed: 0.25, distance: 20, inclination: 0.35 },
  { name: "FastAPI", color: "#05998B", size: 1.0, speed: 0.5, distance: 24, inclination: -0.25 },
  { name: "Node.js", color: "#339933", size: 1.1, speed: 0.35, distance: 28, inclination: 0.15, hasRings: true },
  { name: "MongoDB", color: "#47A248", size: 0.8, speed: 0.6, distance: 14, inclination: -0.4 },
  { name: "Three.js", color: "#FFFFFF", size: 1.0, speed: 0.4, distance: 18, inclination: 0.45 },
  { name: "Tailwind", color: "#06B6D4", size: 0.9, speed: 0.55, distance: 22, inclination: -0.15 },
  { name: "Framer", color: "#0055FF", size: 0.9, speed: 0.4, distance: 26, inclination: 0.2 },
];

function SkillPlanet({ name, color, size, speed, distance, inclination, hasRings }) {
  const ref = useRef();
  const ringRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    
    // Orbital mechanics with inclination
    const x = Math.sin(t) * distance;
    const z = Math.cos(t) * distance;
    const y = Math.sin(t) * distance * Math.sin(inclination);
    
    ref.current.position.set(x, y, z);
    ref.current.rotation.y += 0.01;
    
    if (ringRef.current) {
        ringRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={ref}>
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh>
          <sphereGeometry args={[size, 64, 64]} />
          <MeshDistortMaterial 
            color={color} 
            speed={2} 
            distort={0.4} 
            radius={1} 
            emissive={color}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        
        {hasRings && (
          <group ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
            <mesh>
              <torusGeometry args={[size * 1.8, 0.05, 2, 100]} />
              <meshStandardMaterial color={color} transparent opacity={0.4} />
            </mesh>
            <mesh>
              <torusGeometry args={[size * 2.2, 0.02, 2, 80]} />
              <meshStandardMaterial color={color} transparent opacity={0.2} />
            </mesh>
          </group>
        )}
        
        {/* Glow Aura */}
        <Sphere args={[size * 1.5, 32, 32]}>
          <meshBasicMaterial color={color} transparent opacity={0.05} wireframe />
        </Sphere>

        <Html distanceFactor={20} position={[0, size + 1.2, 0]} center>
          <div className="whitespace-nowrap px-4 py-2 rounded-lg bg-white/10 backdrop-blur-2xl border border-white/20 text-white text-[12px] font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.1)] pointer-events-none flex items-center gap-3 transition-all">
            <div className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: color, color: color }} />
            <span className="tracking-wider uppercase">{name}</span>
          </div>
        </Html>
      </Float>
    </group>
  );
}

function CenterCore() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y += 0.008;
    ref.current.rotation.z += 0.003;
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <MeshDistortMaterial
          color="#F4B942"
          emissive="#FF7A18"
          emissiveIntensity={2.5}
          distort={0.5}
          speed={2}
          roughness={0}
          metalness={1}
        />
        <pointLight intensity={5} distance={100} color="#F4B942" />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00E5FF" />
      </mesh>
      
      {/* Sun Atmosphere */}
      <Sphere args={[4.5, 32, 32]}>
        <meshBasicMaterial color="#FF7A18" transparent opacity={0.1} wireframe />
      </Sphere>
    </group>
  );
}

export default function SkillsGalaxy() {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-[#050505]" id="skills">
      {/* Overlay UI */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="container mx-auto h-full flex flex-col justify-between py-24 px-6">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-yellow-400 text-sm font-mono tracking-[0.3em] mb-4"
                >
                    INTELLECTUAL COSMOS
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    Technical <span className="text-gradient">Galaxy</span>
                </h2>
                <p className="text-white/40 mt-4 max-w-md font-light text-lg">
                    A cinematic exploration of my technology stack, visualized through dynamic orbital mechanics.
                </p>
            </div>
            
            <div className="flex justify-between items-end">
                <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-widest font-mono">
                    <div className="flex flex-col gap-1">
                        <span className="text-white/40 font-bold">Architecture</span>
                        <span>Multi-Layered</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-white/40 font-bold">Simulation</span>
                        <span>60 FPS RT</span>
                    </div>
                </div>
                
                <div className="glass px-6 py-3 rounded-full border-white/10 text-white/50 text-xs flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    DRAG TO ORBIT • SCROLL TO ZOOM
                </div>
            </div>
        </div>
      </div>

      <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 40, 60], fov: 45 }} dpr={[1, 1.5]}>
          <color attach="background" args={["#050505"]} />
          <ambientLight intensity={0.4} />
          
          <Suspense fallback={null}>
            <CenterCore />
            {skills.map((skill, i) => (
              <SkillPlanet key={i} {...skill} />
            ))}
            
            {/* Background enhancement */}
            <Stars 
                radius={200} 
                depth={50} 
                count={5000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={1} 
            />
            
            <ContactShadows 
                opacity={0.4} 
                scale={100} 
                blur={1} 
                far={40} 
                resolution={256} 
                color="#000000" 
            />
            
            <OrbitControls 
                enableZoom={true} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                minDistance={30}
                maxDistance={100}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 4}
            />
          </Suspense>
          
          {/* Post processing hint: Bloom would be nice but let's stick to standard R3F for speed */}
        </Canvas>
      </div>
    </section>
  );
}
