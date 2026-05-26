import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    children: React.ReactNode;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    subtitle,
    align = 'center'
}) => {
    const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`mb-16 ${alignClass}`}
        >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald font-bold text-luxury-white mb-4">
                {children}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-luxury-gray max-w-2xl mx-auto font-nunito">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};
