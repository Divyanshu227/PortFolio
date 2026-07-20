import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Utility to generate random points in a sphere
function randomInSphere(numPoints: number, radius: number) {
  const points = new Float32Array(numPoints * 3)
  for (let i = 0; i < numPoints; i++) {
    const r = radius * Math.cbrt(Math.random())
    const theta = Math.random() * 2 * Math.PI
    const phi = Math.acos(2 * Math.random() - 1)
    
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    points[i * 3 + 2] = r * Math.cos(phi)
  }
  return points
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  // Generate 5000 points within a radius of 1.5
  const sphere = useMemo(() => randomInSphere(5000, 1.5), [])

  useFrame((state, delta) => {
    if (ref.current) {
      // Slowly rotate the entire field
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
      
      // Slight parallax based on pointer position
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, (state.pointer.x * state.viewport.width) / 50, 0.1)
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, (state.pointer.y * state.viewport.height) / 50, 0.1)
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a855f7" // Purple tint
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function Global3DBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}
