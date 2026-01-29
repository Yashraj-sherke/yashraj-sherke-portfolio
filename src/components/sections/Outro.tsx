import React from 'react';
import { motion } from 'framer-motion';

// Prioritize negative space and editorial alignment over symmetry.

export const Outro: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
            {/* Decorative Circular Elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/4 -left-32 w-96 h-96 rounded-full border border-[#f5f5f5]/5"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full border border-[#f5f5f5]/5"
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#f5f5f5]/3"
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Main Content Container */}
                <div className="relative min-h-[70vh] flex items-center justify-center">
                    {/* Left Side - Graphic Designer */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2"
                    >
                        <p className="text-sm text-[#a6a6a6]/60 font-nunito mb-1">Graphic designer</p>
                        <p className="text-sm text-[#f5f5f5]/70 font-nunito">– Jevin Hingrajiya</p>
                    </motion.div>

                    {/* Center - Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-nunito font-medium text-[#f5f5f5] tracking-tight leading-tight">
                            Thank you for watching
                        </h1>
                    </motion.div>

                    {/* Right Side - UI/UX Designer */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2"
                    >
                        <p className="text-sm text-[#a6a6a6]/60 font-nunito mb-1 text-right">UI/UX designer</p>
                        <p className="text-sm text-[#f5f5f5]/70 font-nunito text-right">– Tushar Joshi</p>
                    </motion.div>
                </div>

                {/* Bottom Content */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute bottom-8 left-0 right-0 px-8 lg:px-16 flex justify-between items-end"
                >
                    {/* Bottom Left - Project Published */}
                    <div>
                        <p className="text-xs text-[#a6a6a6]/50 font-nunito uppercase tracking-wider">
                            Project Published
                        </p>
                    </div>

                    {/* Bottom Right - URL and Date */}
                    <div className="text-right">
                        <p className="text-xs text-[#f5f5f5]/60 font-nunito mb-1">
                            yashrajsherke.portfolio.com
                        </p>
                        <p className="text-xs text-[#a6a6a6]/50 font-nunito">
                            Jan 30th 2026
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
