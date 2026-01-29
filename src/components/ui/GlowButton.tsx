import React from 'react';
import { motion } from 'framer-motion';

interface GlowButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
    children,
    onClick,
    href,
    variant = 'primary',
    className = ''
}) => {
    const baseClasses = "px-8 py-4 rounded-lg font-oswald font-semibold text-lg tracking-wide transition-all duration-300";
    const variantClasses = variant === 'primary'
        ? "bg-luxury-white text-luxury-black hover:bg-opacity-90 glow-border-strong"
        : "glass text-luxury-white hover:glass-strong glow-border hover:glow-border-strong";

    const Component = href ? motion.a : motion.button;
    const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

    return (
        <Component
            {...props}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {children}
        </Component>
    );
};
