import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingOrb } from './FloatingOrb';
import { OrbitalRings } from './OrbitalRings';
import { Particles } from './Particles';

export const Scene3D: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <FloatingOrb />
                    <OrbitalRings />
                    <Particles />
                </Suspense>
            </Canvas>
        </div>
    );
};
