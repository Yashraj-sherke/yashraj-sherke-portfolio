import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingOrb: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const time = useRef(0);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        time.current += delta;

        // Slow rotation
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;

        // Floating animation
        meshRef.current.position.y = Math.sin(time.current * 0.5) * 0.3;

        // Mouse parallax (subtle)
        const mouse = state.mouse;
        meshRef.current.position.x += (mouse.x * 0.5 - meshRef.current.position.x) * 0.05;
        meshRef.current.position.z += (mouse.y * 0.5 - meshRef.current.position.z) * 0.05;
    });

    return (
        <Sphere ref={meshRef} args={[1, 32, 32]} position={[2, 0, 0]}>
            <meshStandardMaterial
                color="#f5f5f5"
                wireframe
                transparent
                opacity={0.15}
            />
        </Sphere>
    );
};
