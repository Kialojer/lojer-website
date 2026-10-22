import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import useMousePosition from '../../hooks/useMousePosition';

function Particles({ count = 50 }) {
  const mesh = useRef(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="#00FFD1" transparent opacity={0.6} wireframe />
    </instancedMesh>
  );
}

function SceneContent() {
  const mouse = useMousePosition();
  const group = useRef(null);
  const { width, height } = typeof window !== 'undefined' ? window : { width: 1000, height: 1000 };

  useFrame((state) => {
    // Parallax effect based on mouse
    const targetX = (mouse.x - width / 2) * 0.001;
    const targetY = (mouse.y - height / 2) * 0.001;
    
    group.current.rotation.y += 0.001; // slow continuous rotation
    
    // Smooth damp towards mouse position
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#E8364E" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#00FFD1" />
      <pointLight position={[0, 10, -10]} intensity={0.5} color="#7C3AED" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
      <Particles count={150} />
      
      {/* Central glowing orb */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.5, 32, 32]} position={[0, 0, -5]}>
          <MeshDistortMaterial 
            color="#070714" 
            emissive="#7C3AED" 
            emissiveIntensity={0.2}
            distort={0.4} 
            speed={2} 
            roughness={0.2} 
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <SceneContent />
      </Canvas>
    </div>
  );
}
