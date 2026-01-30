import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Star, Clock, Users, Code2, Database, Layers, Workflow, Cpu, Cloud, Palette, GitBranch } from 'lucide-react';

// Ensure the moving technology strip feels like a continuous conveyor, not a slider.

export const Integration: React.FC = () => {
    const stats = [
        { number: '+5', label: 'Projects Completed', icon: Sprout },
        { number: '350+', label: 'DSA Problems Solved', icon: Star },
        { number: '1+', label: 'Year Experience', icon: Clock },
        { number: '3+', label: 'Team Collaborations', icon: Users },
    ];

    const integrationIcons = [
        { icon: Code2, label: 'Frontend' },
        { icon: Palette, label: 'UI/UX' },
        { icon: Database, label: 'Database' },
        { icon: Workflow, label: 'APIs' },
        { icon: Layers, label: 'Backend' },
        { icon: Cloud, label: 'DevOps' },
        { icon: Cpu, label: 'Systems' },
        { icon: GitBranch, label: 'Version Control' },
    ];

    const technologies = [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'React', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express', icon: '🚂' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '☸️' },
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Firebase', icon: '🔥' },
    ];

    return (
        <section id="integration" className="relative py-24 px-6 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* LEFT SIDE - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-oswald font-bold text-[#f5f5f5] mb-6 tracking-tight">
                            .../Integration
                        </h2>
                        <div className="text-[#a6a6a6] font-nunito text-base lg:text-lg leading-relaxed mb-10 max-w-xl space-y-4">
                            <p>
                                I focus on building scalable, secure, and user-centric applications using modern web technologies. With hands-on experience in MERN stack development, ReactJS, and cloud platforms, I design efficient systems that balance performance, usability, and reliability.
                            </p>
                            <p>
                                My approach combines strong fundamentals in data structures, backend architecture, and UI engineering with practical industry experience. Through internships and personal projects, I continuously refine my skills in full-stack development, system optimization, and collaborative software engineering.
                            </p>
                            <p>
                                I strive to deliver impactful digital solutions by emphasizing clean code, secure authentication, responsive design, and seamless user experiences.
                            </p>
                        </div>

                        {/* Stat Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <StatCard key={stat.label} {...stat} delay={index * 0.1} />
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Circular Integration Diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]">
                            {/* Outer Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full border border-[#f5f5f5]/10"
                            />

                            {/* Integration Icons - Positioned around circle */}
                            {integrationIcons.map((item, index) => {
                                const angle = (index / integrationIcons.length) * 2 * Math.PI;
                                const radius = 140; // Distance from center
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;

                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                                        style={{
                                            transform: `translate(${x}px, ${y}px)`,
                                        }}
                                    >
                                        <div className="w-full h-full rounded-lg bg-[#f5f5f5]/10 border border-[#f5f5f5]/20 flex items-center justify-center hover:bg-[#f5f5f5]/20 transition-all duration-300">
                                            <item.icon size={20} className="text-[#f5f5f5]" strokeWidth={1.5} />
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Center Circle with Monogram */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#a6a6a6]/20 border border-[#f5f5f5]/20 flex items-center justify-center backdrop-blur-sm">
                                <span className="text-4xl font-oswald font-bold text-[#f5f5f5]">YS</span>
                            </div>
                        </div>

                        {/* Caption */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-8 text-[#a6a6a6] font-nunito text-sm tracking-wider"
                        >
                            Productivity → Insights → Strategy → Growth
                        </motion.p>
                    </motion.div>
                </div>

                {/* BOTTOM - Infinite Scrolling Technology Strip */}
                <div className="relative mt-16 overflow-hidden">
                    <div className="tech-strip-container">
                        <motion.div
                            className="tech-strip flex gap-8 items-center"
                            animate={{ x: [0, -1400] }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            {/* Duplicate technologies for seamless loop */}
                            {[...technologies, ...technologies].map((tech, index) => (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex-shrink-0 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 group"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center text-3xl">
                                        {tech.icon}
                                    </div>
                                    <span className="text-xs text-[#a6a6a6] font-nunito whitespace-nowrap">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                .tech-strip-container {
                    position: relative;
                    width: 100%;
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 90%,
                        transparent
                    );
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 90%,
                        transparent
                    );
                }
            `}</style>
        </section>
    );
};

interface StatCardProps {
    number: string;
    label: string;
    icon: React.ElementType;
    delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="rounded-xl dark-glass border border-[#f5f5f5]/10 p-5 hover:border-[#f5f5f5]/20 transition-all duration-300 group"
    >
        <div className="flex items-start justify-between mb-3">
            <span className="text-2xl font-oswald font-bold text-[#f5f5f5]">{number}</span>
            <Icon size={24} className="text-[#a6a6a6] group-hover:text-[#f5f5f5] transition-colors" strokeWidth={1.5} />
        </div>
        <p className="text-xs text-[#a6a6a6] font-nunito leading-snug">{label}</p>
    </motion.div>
);
