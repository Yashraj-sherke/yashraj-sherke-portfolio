import React from 'react';
import { motion } from 'framer-motion';

interface TechBadgeProps {
    name: string;
    delay?: number;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="glass px-4 py-2 rounded-lg text-sm font-nunito font-medium text-luxury-white border border-luxury-gray/20 hover:border-luxury-white/40 transition-all duration-300 cursor-default"
        >
            {name}
        </motion.div>
    );
};
