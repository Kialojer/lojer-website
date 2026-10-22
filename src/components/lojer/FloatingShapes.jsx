import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, TorusKnot, Icosahedron } from '@react-three/drei';

function ShapeContent({ type = 'torus', color = '#00FFD1', wireframe = true }) {
  const group = useRef(null);

  useFrame(() => {
    group.current.rotation.x += 0.002;
    group.current.rotation.y += 0.003;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {type === 'torus' ? (
          <TorusKnot args={[1, 0.3, 100, 16]}>
            <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={0.7} />
          </TorusKnot>
        ) : (
          <Icosahedron args={[1.5, 0]}>
            <meshStandardMaterial color={color} wireframe={wireframe} transparent opacity={0.5} />
          </Icosahedron>
        )}
      </Float>
    </group>
  );
}

export default function FloatingShapes({ 
  className = "w-64 h-64", 
  type = 'torus', 
  color = '#00FFD1',
  wireframe = true
}) {
  return (
    <div className={`relative pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ShapeContent type={type} color={color} wireframe={wireframe} />
      </Canvas>
    </div>
  );
}
