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
                <div className="relative min-h-[70vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
                    {/* Left Side - Graphic Designer */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:absolute lg:left-8 xl:left-16 lg:top-1/2 lg:-translate-y-1/2 text-center lg:text-left order-1 lg:order-none"
                    >
                        <p className="text-sm text-[#a6a6a6]/60 font-nunito mb-1">FullStack Developer</p>
                        <p className="text-sm text-[#f5f5f5]/70 font-nunito">– Yashraj Sherke</p>
                    </motion.div>

                    {/* Center - Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center order-2 px-4"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nunito font-medium text-[#f5f5f5] tracking-tight leading-tight">
                            Thank you for watching
                        </h1>
                    </motion.div>

                    {/* Right Side - UI/UX Designer */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:absolute lg:right-8 xl:right-16 lg:top-1/2 lg:-translate-y-1/2 text-center lg:text-right order-3 lg:order-none"
                    >
                        <p className="text-sm text-[#a6a6a6]/60 font-nunito mb-1">UI/UX designer</p>
                        <p className="text-sm text-[#f5f5f5]/70 font-nunito">– Yashraj Sherke</p>
                    </motion.div>
                </div>

                {/* Bottom Content */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-4 sm:px-8 lg:px-16 mt-12 lg:mt-0 lg:absolute lg:bottom-8 lg:left-0 lg:right-0"
                >
                    {/* Bottom Left - Project Published */}
                    <div className="text-center sm:text-left">
                        <p className="text-xs text-[#a6a6a6]/50 font-nunito uppercase tracking-wider">
                            Project Published
                        </p>
                    </div>

                    {/* Bottom Right - URL and Date */}
                    <div className="text-center sm:text-right">
                        <p className="text-xs text-[#f5f5f5]/60 font-nunito mb-1">
                            yashrajsherke.portfolio.com
                        </p>
                        <p className="text-xs text-[#a6a6a6]/50 font-nunito">
                            {/* Jan 30th 2026 */}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
