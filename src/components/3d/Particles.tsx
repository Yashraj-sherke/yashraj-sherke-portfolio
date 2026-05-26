import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Particles: React.FC = () => {
    const particlesRef = useRef<THREE.Points>(null);

    const particleCount = 100;

    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    const geomRef = useRef<THREE.BufferGeometry>(null);

    useFrame((state, delta) => {
        if (!particlesRef.current || !geomRef.current) return;

        particlesRef.current.rotation.y += delta * 0.05;

        const positions = geomRef.current.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
        }
        geomRef.current.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry ref={geomRef}>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#f5f5f5"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};
