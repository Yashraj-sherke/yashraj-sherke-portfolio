import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';

export const Experience: React.FC = () => {
    const experiences = [
        {
            year: '2013-2020',
            title: 'Jawahar Navodaya Vidyalaya, Singodi, Chhindwara',
            company: '',
            description: 'I completed my schooling at Jawahar Navodaya Vidyalaya, Singodi, Chhindwara, where I built a strong academic foundation and developed discipline, leadership, and problem-solving skills. This period played a crucial role in shaping my interest in science and technology.'
        },
        {
            year: '2022-Present',
            title: 'B.Tech in Computer Science Engineering',
            company: '',
            description: 'I started my B.Tech in Computer Science in 2022, where I am developing strong technical skills in programming, data structures, web development, and software engineering. Along with academics, I actively work on projects and improve my practical knowledge to prepare for a successful career in the tech industry.'
        }
    ];

    return (
        <section id="experience" className="relative py-32 px-6 bg-transparent" style={{ background: 'transparent' }}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="With a strong foundation in Computer Science and hands-on experience in full-stack development, I am continuously growing as a developer by building real-world projects, strengthening problem-solving skills, and exploring modern web technologies.">
                    .../Journey
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.year}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <GlassCard>
                                <div className="mb-4">
                                    <span className="text-5xl font-oswald font-bold text-luxury-white/20">
                                        {exp.year}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-oswald font-semibold text-luxury-white mb-2">
                                    {exp.title}
                                </h3>
                                <p className="text-luxury-gray font-nunito text-sm mb-4">
                                    {exp.company}
                                </p>
                                <p className="text-luxury-gray font-nunito leading-relaxed">
                                    {exp.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
