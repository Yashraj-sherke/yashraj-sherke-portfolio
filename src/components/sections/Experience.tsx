import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';

export const Experience: React.FC = () => {
    const experiences = [
        {
            year: '2018',
            title: 'Sr. Fullstack & Mobile App Developer (Ionic)',
            company: 'Freelance',
            description: 'I\'m a Senior Fullstack & Mobile App Developer specializing in Ionic, with strong expertise in Hubilo & PHP (CodeIgniter). I create cross-platform mobile and web applications, focusing on scalable solutions and intuitive UI. My work includes designing robust backend architectures and delivering high-performance applications that meet client needs and exceed expectations.'
        },
        {
            year: '2004',
            title: 'Windows Application Developer',
            company: 'Various Companies',
            description: 'As a Windows Application Developer, I specialize in building robust desktop applications using C#, .NET, and WPF. I manage the full development lifecycle, including coding, testing, and debugging, ensuring thorough documentation and ongoing support for deployed applications.'
        }
    ];

    return (
        <section id="experience" className="relative py-32 px-6 bg-transparent" style={{background: 'transparent'}}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="With over two decades in software development, I've evolved from a Windows Application Developer to mastering LAMP/MEAN stacks and Ionic for mobile apps">
                    Journey
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
