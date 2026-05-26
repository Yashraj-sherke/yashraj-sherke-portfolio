import React from 'react';
import { motion } from 'framer-motion';
import { GlowButton } from '../ui/GlowButton';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-transparent" style={{ background: 'transparent' }}>
            {/* Vertical Text */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2"
            >
                <p className="text-luxury-gray text-sm font-oswald tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
                    FULL STACK
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
            >
                <p className="text-luxury-gray text-sm font-oswald tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
                    DEVELOPER
                </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="text-luxury-gray font-nunito text-lg md:text-xl tracking-wide">
                        Hello, I'm a
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-oswald font-bold text-luxury-white mb-6 leading-none"
                >
                    Full-Stack
                    <br />
                    <span className="text-glow">Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl lg:text-2xl text-luxury-gray font-nunito max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Crafting scalable systems, premium UIs, and impactful digital experiences
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <GlowButton onClick={() => scrollToSection('projects')} variant="primary">
                        View Projects
                    </GlowButton>
                    <GlowButton onClick={() => scrollToSection('contact')} variant="secondary">
                        Contact Me
                    </GlowButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-luxury-gray cursor-pointer"
                        onClick={() => scrollToSection('about')}
                    >
                        <ArrowDown size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
