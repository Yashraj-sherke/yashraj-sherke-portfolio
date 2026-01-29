import React from 'react';
import { motion } from 'framer-motion';

// Match visual spacing and hierarchy visually, not mathematically. Preserve negative space.

export const About: React.FC = () => {
    // Stagger animation variants for the skills grid
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section id="about" className="relative py-32 px-6 bg-transparent" style={{ background: 'transparent' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT COLUMN – ABOUT CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="rounded-3xl dark-glass border border-[#f5f5f5]/15 shadow-xl p-10 max-w-xl w-full mx-auto lg:mx-0"
                        style={{ boxShadow: '0 4px 48px 0 rgba(0,0,0,0.38)' }}
                    >
                        <h2 className="text-2xl font-oswald font-bold text-[#f5f5f5] mb-6 tracking-tight">About</h2>
                        <div className="text-[#a6a6a6] font-nunito text-base mb-8 leading-relaxed space-y-4">
                            <p>
                                I am a B.Tech Computer Science student passionate about full-stack development.
                            </p>
                            <p>
                                My primary focus is on building clean, scalable user interfaces and performant systems, always striving to deliver solutions that are both robust and visually refined.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <InfoRow label="Name" value="Yashraj Sherke" />
                            <InfoRow label="Degree" value="B.Tech (Computer Science)" />
                            <InfoRow label="Experience" value="Software Development Intern" />
                            <InfoRow label="Availability" value="Open for internships / projects" />
                            <InfoRow label="Languages" value="English / Hindi" />
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN – SKILLS GRID */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 w-full"
                    >
                        <SkillCard title="Tech Stack">
                            React, Node.js, Express, MERN Stack
                        </SkillCard>

                        <SkillCard title="Front-End Side">
                            HTML, CSS, Tailwind, JavaScript, React
                        </SkillCard>

                        <SkillCard title="Back-End Side">
                            Node.js, Express, REST APIs
                        </SkillCard>

                        <SkillCard title="UI & Styling">
                            Responsive Design, Component-based UI, Accessibility
                        </SkillCard>

                        <SkillCard title="Database">
                            MongoDB, MySQL, PostgreSQL
                        </SkillCard>

                        <SkillCard title="REST API / Tools">
                            JWT Auth, Postman, Git, GitHub
                        </SkillCard>
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
}

const SkillCard: React.FC<SkillCardProps> = ({ title, children }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            }
        }}
        whileHover={{
            boxShadow: '0 0 0 1px rgba(245,245,245,0.2), 0 0 24px rgba(245,245,245,0.05)',
            borderColor: 'rgba(245,245,245,0.2)'
        }}
        className="rounded-2xl dark-glass border border-[#f5f5f5]/10 p-6 min-h-[120px] flex flex-col justify-center transition-all duration-300 group"
    >
        <div className="text-base font-oswald font-medium text-[#f5f5f5] mb-2 tracking-wide group-hover:text-white transition-colors">{title}</div>
        <div className="text-sm text-[#a6a6a6] font-nunito leading-snug group-hover:text-[#d4d4d4] transition-colors">{children}</div>
    </motion.div>
);
