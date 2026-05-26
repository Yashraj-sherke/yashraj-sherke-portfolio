import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
            className={`dark-glass rounded-2xl p-8 dark-glow-border hover:dark-glow-border-strong transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};
