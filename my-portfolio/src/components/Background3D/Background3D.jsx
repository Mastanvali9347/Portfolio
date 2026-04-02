import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float, Sphere, MeshDistortMaterial, Points, PointMaterial, Sparkles } from '@react-three/drei'
import { useTheme } from '../../context/ThemeContext'
import * as THREE from 'three'
import './Background3D.css'

function MilkyWay() {
  const points = useMemo(() => {
    const p = new Float32Array(10000 * 3)
    for (let i = 0; i < 10000; i++) {
      const radius = Math.random() * 60 + 5
      const angle = Math.random() * Math.PI * 2
      const swirl = (radius * 0.15)
      const x = Math.cos(angle + swirl) * radius
      const y = (Math.random() - 0.5) * (15 / (radius * 0.15 + 1))
      const z = Math.sin(angle + swirl) * radius
      p[i * 3] = x
      p[i * 3 + 1] = y
      p[i * 3 + 2] = z
    }
    return p
  }, [])

  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.015
    ref.current.position.y = Math.sin(t * 0.2) * 2 // Gentle vertical waving
  })

  return (
    <group ref={ref}>
      <Points positions={points} stride={3}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.07}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Points positions={points} stride={3} rotation={[Math.PI / 6, 0.4, 0]}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Points positions={points} stride={3} rotation={[-Math.PI / 12, -0.5, 0.3]}>
        <PointMaterial
          transparent
          color="#f43f5e"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function Comet() {
  const ref = useRef()
  useFrame((state) => {
    const t = (state.clock.getElapsedTime() * 0.2) % 1
    const radius = 60
    const angle = t * Math.PI * 2
    if (ref.current) {
      ref.current.position.x = Math.cos(angle) * (radius - t * 40)
      ref.current.position.z = Math.sin(angle) * (radius - t * 40)
      ref.current.position.y = (t - 0.5) * 30
      ref.current.scale.setScalar(1 - t)
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color="#ffffff" />
      <pointLight intensity={2} distance={10} color="#60a5fa" />
    </mesh>
  )
}

function Planet({ distance, speed, size, color, name, hasRings, hasMoon, offset = 0, distort = 0 }) {
  const ref = useRef()
  const moonRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset
    if (ref.current) {
      ref.current.position.x = Math.sin(t) * distance
      ref.current.position.z = Math.cos(t) * distance
      ref.current.rotation.y += 0.015

      if (hasMoon && moonRef.current) {
        const mt = state.clock.getElapsedTime() * 2.5
        moonRef.current.position.x = Math.sin(mt) * (size + 1.2)
        moonRef.current.position.z = Math.cos(mt) * (size + 1.2)
        moonRef.current.position.y = Math.sin(mt * 0.5) * 0.5
      }
    }
  })

  return (
    <group ref={ref}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[size, 48, 48]} />
          {distort > 0 ? (
            <MeshDistortMaterial
              color={color}
              distort={distort}
              speed={2}
              roughness={0.4}
              metalness={0.6}
            />
          ) : (
            <meshStandardMaterial 
              color={color} 
              metalness={0.4} 
              roughness={0.6}
              emissive={color}
              emissiveIntensity={0.15}
            />
          )}
        </mesh>
        
        {name === "Earth" && (
          <mesh scale={[1.08, 1.08, 1.08]}>
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.2} wireframe />
          </mesh>
        )}

        {hasRings && (
          <group rotation={[Math.PI / 3, 0, 0]}>
            <mesh>
              <torusGeometry args={[size * 1.9, size * 0.15, 2, 100]} />
              <meshStandardMaterial color={color} transparent opacity={0.4} />
            </mesh>
            <mesh>
              <torusGeometry args={[size * 2.3, size * 0.04, 2, 80]} />
              <meshStandardMaterial color={color} transparent opacity={0.3} />
            </mesh>
          </group>
        )}

        {hasMoon && (
          <mesh ref={moonRef}>
            <sphereGeometry args={[size * 0.22, 16, 16]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.9} />
          </mesh>
        )}
      </Float>
    </group>
  )
}

function Sun() {
  const ref = useRef()
  const lightRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y += 0.006
    if (lightRef.current) {
      lightRef.current.intensity = 2.5 + Math.sin(t * 2) * 1.5 // Pulsating light
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[3.5, 64, 64]} />
      <MeshDistortMaterial
        color="#fde047"
        emissive="#f59e0b"
        emissiveIntensity={2}
        distort={0.4}
        speed={1.5}
        roughness={0}
      />
      <pointLight ref={lightRef} intensity={3} distance={120} color="#fbbf24" />
      <Sparkles count={50} scale={8} size={2} speed={0.5} color="#fbbf24" />
    </mesh>
  )
}

function CameraRig() {
  const { camera, mouse } = useThree()
  useFrame(() => {
    // Smoothed camera movement based on mouse
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02
    camera.position.y += (mouse.y * 2 + 10 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Background3D() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const bgColor = isDark ? '#020617' : '#f8fafc'

  const planets = [
    { name: "Mercury", distance: 8, speed: 1.0, size: 0.35, color: "#94a0b8" },
    { name: "Venus", distance: 12, speed: 0.7, size: 0.7, color: "#fef3c7" },
    { name: "Earth", distance: 17, speed: 0.5, size: 0.8, color: "#2563eb", hasMoon: true },
    { name: "Mars", distance: 22, speed: 0.45, size: 0.55, color: "#ef4444", distort: 0.2 },
    { name: "Jupiter", distance: 30, speed: 0.3, size: 2.2, color: "#d97706", distort: 0.1 },
    { name: "Saturn", distance: 40, speed: 0.2, size: 1.8, color: "#eab308", hasRings: true },
    { name: "Uranus", distance: 50, speed: 0.15, size: 1.3, color: "#38bdf8" },
    { name: "Neptune", distance: 60, speed: 0.1, size: 1.25, color: "#4338ca", distort: 0.3 },
    { name: "Pluto", distance: 70, speed: 0.06, size: 0.25, color: "#64748b" },
  ]

  return (
    <div className="background-3d-container">
      <Canvas camera={{ position: [0, 20, 50], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={isDark ? 0.25 : 0.65} />
        <pointLight position={[0, 0, 0]} intensity={1} color="#ffffff" />
        
        <CameraRig />

        <Stars 
          radius={400} 
          depth={150} 
          count={isDark ? 12000 : 5000} 
          factor={8} 
          saturation={0.5} 
          fade 
          speed={2} 
        />
        
        <MilkyWay />
        <Sun />
        <Comet />

        {planets.map((p, i) => (
          <Planet key={p.name} {...p} offset={i * 2.5} />
        ))}

        {/* Global Space Sparkles */}
        <Sparkles count={200} scale={100} size={1} speed={0.4} opacity={0.3} color="#ffffff" />

        {/* Dynamic Asteroids */}
        {Array.from({ length: 60 }).map((_, i) => (
          <Float key={i} speed={1.5} rotationIntensity={3} floatIntensity={1}>
            <mesh position={[
              (Math.random() - 0.5) * 120,
              (Math.random() - 0.5) * 40,
              (Math.random() - 0.5) * 120
            ]}>
              <dodecahedronGeometry args={[Math.random() * 0.25 + 0.15, 0]} />
              <meshStandardMaterial color="#475569" metalness={0.5} />
            </mesh>
          </Float>
        ))}
      </Canvas>
    </div>
  )
}
