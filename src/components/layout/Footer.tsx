import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="relative py-8 px-6 border-t border-luxury-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-luxury-gray font-nunito text-sm">
                        © 2025 Yashraj Sherke. Crafted with passion and precision.
                    </p>
                    <p className="text-luxury-gray font-nunito text-sm">
                        Built with React, Three.js, GSAP & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
};
