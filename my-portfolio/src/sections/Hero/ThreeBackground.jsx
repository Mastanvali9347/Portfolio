import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Center, Float, Text3D } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const points = useMemo(() => {
    const p = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20
      p[i * 3 + 1] = (Math.random() - 0.5) * 20
      p[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return p
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1
    ref.current.rotation.y = t * 0.2
    ref.current.rotation.z = t * 0.1
    // Autonomous drift
    ref.current.position.y = Math.sin(t) * 0.5
  })

  return (
    <group ref={ref}>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function Grid() {
  const ref = useRef()
  useFrame((state) => {
    // Faster fly-through effect
    ref.current.position.z = (ref.current.position.z + 0.05) % 4
  })
  return (
    <group position={[0, -2, 0]}>
      <gridHelper 
        ref={ref} 
        args={[100, 50, "#00f3ff", "#002233"]} 
        rotation={[0, 0, 0]} 
        position={[0, 0, 0]}
      />
    </group>
  )
}

function FloatingSymbols() {
  const symbols = ['{ }', '< >', '[ ]', '=>', 'import', 'async']
  return (
    <>
      {symbols.map((symbol, i) => (
        <Float 
          key={i} 
          speed={2} 
          rotationIntensity={2} 
          floatIntensity={2} 
          position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5]}
        >
          {/* We'll use simple text points or just leave it for now if Text3D font is missing */}
        </Float>
      ))}
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-[-1] bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <ParticleField />
        <Grid />
        <fog attach="fog" args={['#000', 5, 15]} />
      </Canvas>
    </div>
  )
}
