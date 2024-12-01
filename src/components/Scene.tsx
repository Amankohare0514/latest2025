'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import FloatingParticles from './FloatingParticles'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Stars 
          radius={300} 
          depth={60} 
          count={1000} 
          factor={7} 
          saturation={0} 
          fade={true} 
        />
        <FloatingParticles />
      </Suspense>
    </Canvas>
  )
}

