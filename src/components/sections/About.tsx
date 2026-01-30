import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Globe } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import profileImage from '../../assets/profile.jpg';

// Align elements visually, not mathematically. Preserve negative space and editorial balance.

export const About: React.FC = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/Yashraj-sherke', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/yashraj-sherke', label: 'LinkedIn' },
        { icon: Code2, href: 'https://leetcode.com/u/yashrajsherke19', label: 'LeetCode' },
        { icon: Globe, href: 'https://yashraj-sherke.github.io/yashraj-sherke-portfolio/', label: 'Portfolio' },
    ];

    return (
        <section id="about" className="relative py-32 px-6 bg-transparent" style={{ background: 'transparent' }}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle>
                    .../About
                </SectionTitle>

                {/* Main Layout: Image Left | About Middle | Social Icons Right */}
                <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                    {/* LEFT - PROFILE IMAGE WITH NAME */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="block flex-shrink-0 relative w-full lg:w-auto"
                    >
                        {/* Vertical "FULL STACK" text on the left with arrows */}
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                            {/* Top Arrow - Pointing Up */}
                            <div className="text-[#a6a6a6] text-xs">
                                <svg width="12" height="32" viewBox="0 0 12 32" fill="none" className="animate-pulse">
                                    <path d="M6 32L6 2M6 2L1 7M6 2L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Vertical Text */}
                            <p className="text-[#a6a6a6] text-xs font-oswald tracking-[0.3em] [writing-mode:vertical-lr] rotate-180 uppercase">
                                Full Stack Developer
                            </p>

                            {/* Bottom Arrow - Pointing Down */}
                            <div className="text-[#a6a6a6] text-xs">
                                <svg width="12" height="32" viewBox="0 0 12 32" fill="none" className="animate-pulse">
                                    <path d="M6 0L6 30M6 30L1 25M6 30L11 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="relative mx-auto">
                            <div className="relative w-[240px] h-[280px] xs:w-[280px] xs:h-[320px] sm:w-[320px] sm:h-[380px] lg:w-[340px] lg:h-[400px] xl:w-[380px] xl:h-[450px] mx-auto">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-2xl grayscale border border-[#f5f5f5]/20"
                                    style={{
                                        boxShadow: '0 8px 64px 0 rgba(0,0,0,0.5), 0 0 0 1px rgba(245,245,245,0.1)'
                                    }}
                                />
                            </div>

                            {/* Name below image - Overlapping Layout */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-6 relative"
                            >
                                <div className="font-oswald tracking-tight leading-tight text-center lg:text-left">
                                    <div className="text-3xl xs:text-4xl sm:text-5xl xl:text-6xl text-[#a6a6a6] lg:text-left">Yashraj</div>
                                    <div className="text-3xl xs:text-4xl sm:text-5xl xl:text-6xl text-[#f5f5f5] font-bold lg:text-right">Sherke</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* MIDDLE - ABOUT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="flex-1"
                    >
                        <div className="max-w-2xl">
                            <div className="text-[#a6a6a6] font-nunito text-base lg:text-lg mb-8 leading-relaxed space-y-4">
                                <p>
                                    Full-stack developer with a strong focus on building clean, scalable user interfaces and performant systems.
                                </p>
                                <p>
                                    I specialize in crafting solutions that are both technically robust and visually refined, with a background in Computer Science and hands-on experience in modern web technologies.
                                </p>
                            </div>

                            <div className="space-y-3 mb-10">
                                <InfoRow label="Name" value="Yashraj Sherke" />
                                <InfoRow label="Degree" value="B.Tech (Computer Science)" />
                                <InfoRow label="Experience" value="Software Development Intern" />
                                <InfoRow label="Availability" value="Open for internships / projects" />
                                <InfoRow label="Languages" value="English / Hindi" />
                            </div>

                            {/* Skills Grid Below About */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <SkillCard title="Tech Stack" delay={0.4}>
                                    React, Node.js, Express, MERN Stack
                                </SkillCard>

                                <SkillCard title="Front-End Side" delay={0.5}>
                                    HTML, CSS, Tailwind, JavaScript, React
                                </SkillCard>

                                <SkillCard title="Back-End Side" delay={0.6}>
                                    Node.js, Express, REST APIs
                                </SkillCard>

                                <SkillCard title="UI & Styling" delay={0.7}>
                                    Responsive Design, Component-based UI, Accessibility
                                </SkillCard>

                                <SkillCard title="Database" delay={0.8}>
                                    MongoDB, MySQL, PostgreSQL
                                </SkillCard>

                                <SkillCard title="REST API / Tools" delay={0.9}>
                                    JWT Auth, Postman, Git, GitHub
                                </SkillCard>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT - VERTICAL SOCIAL ICONS */}
                    {/* Desktop - Vertical Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden lg:flex flex-col gap-6 flex-shrink-0"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.15,
                                    boxShadow: '0 0 20px rgba(245,245,245,0.3)'
                                }}
                                className="w-12 h-12 rounded-full border border-[#f5f5f5]/20 flex items-center justify-center text-[#a6a6a6] hover:text-[#f5f5f5] hover:border-[#f5f5f5]/40 transition-all duration-300 bg-[#0b0b0b]/60 backdrop-blur-sm"
                                aria-label={social.label}
                            >
                                <social.icon size={20} strokeWidth={1.5} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Mobile - Horizontal Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex lg:hidden flex-row gap-4 justify-center w-full mt-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.15,
                                    boxShadow: '0 0 20px rgba(245,245,245,0.3)'
                                }}
                                className="w-12 h-12 rounded-full border border-[#f5f5f5]/20 flex items-center justify-center text-[#a6a6a6] hover:text-[#f5f5f5] hover:border-[#f5f5f5]/40 transition-all duration-300 bg-[#0b0b0b]/60 backdrop-blur-sm"
                                aria-label={social.label}
                            >
                                <social.icon size={20} strokeWidth={1.5} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex text-sm border-b border-[#f5f5f5]/5 pb-2 last:border-0 last:pb-0">
        <span className="w-32 text-[#a6a6a6] font-semibold shrink-0">{label}</span>
        <span className="text-[#f5f5f5] font-nunito">{value}</span>
    </div>
);

interface SkillCardProps {
    title: string;
    children: React.ReactNode;
    delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{
            boxShadow: '0 0 0 1px rgba(245,245,245,0.2), 0 0 24px rgba(245,245,245,0.05)',
            borderColor: 'rgba(245,245,245,0.2)'
        }}
        className="rounded-xl dark-glass border border-[#f5f5f5]/10 p-5 min-h-[100px] flex flex-col justify-center transition-all duration-300 group"
    >
        <div className="text-sm font-oswald font-medium text-[#f5f5f5] mb-1.5 tracking-wide group-hover:text-white transition-colors">{title}</div>
        <div className="text-xs text-[#a6a6a6] font-nunito leading-snug group-hover:text-[#d4d4d4] transition-colors">{children}</div>
    </motion.div>
);
