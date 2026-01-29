import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const OrbitalRings: React.FC = () => {
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const ring3Ref = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (ring1Ref.current) {
            ring1Ref.current.rotation.z += delta * 0.1;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.z -= delta * 0.15;
        }
        if (ring3Ref.current) {
            ring3Ref.current.rotation.z += delta * 0.08;
        }
    });

    return (
        <group position={[0, 0, -5]}>
            <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[8, 0.02, 2, 100]} />
                <meshBasicMaterial color="#f5f5f5" transparent opacity={0.08} />
            </mesh>
            <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
                <torusGeometry args={[10, 0.015, 2, 100]} />
                <meshBasicMaterial color="#a6a6a6" transparent opacity={0.06} />
            </mesh>
            <mesh ref={ring3Ref} rotation={[Math.PI / 2, 0, Math.PI / 6]}>
                <torusGeometry args={[12, 0.01, 2, 100]} />
                <meshBasicMaterial color="#f5f5f5" transparent opacity={0.04} />
            </mesh>
        </group>
    );
};
