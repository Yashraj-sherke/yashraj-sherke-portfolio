import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Code, Smartphone, Palette } from 'lucide-react';

export const Services: React.FC = () => {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Adaptive web design components use well-structured, readable code. These development solutions are optimized for performance and work seamlessly across devices and browsers.',
            tags: ['React', 'Next.js', 'TypeScript', 'Node.js']
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'With extensive experience in mobile app development, I specialize in architecting and crafting custom hybrid applications tailored for Apple iOS and Google Android platforms.',
            tags: ['React Native', 'Flutter', 'iOS', 'Android']
        },
        {
            icon: Palette,
            title: 'UI/UX & Branding',
            description: 'Focused on a user-centered approach, we boost productivity and revenue. Our team\'s remarkable expertise and creativity push us to continually exceed our past achievements.',
            tags: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator']
        }
    ];

    return (
        <section id="services" className="relative py-32 px-6 bg-transparent" style={{ background: 'transparent' }}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="Craft unforgettable and impactful websites, web applications, and mobile apps. Awesome digital branding, design, and development">
                    .../Services
                </SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-2xl p-8 glow-border hover:glow-border-strong transition-all duration-300 group"
                        >
                            <div className="mb-6">
                                <div className="inline-block p-4 rounded-xl glass-strong group-hover:bg-luxury-white/10 transition-all duration-300">
                                    <service.icon size={32} className="text-luxury-white" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-oswald font-semibold text-luxury-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-luxury-gray font-nunito leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-nunito font-medium text-luxury-white bg-luxury-white/10 rounded-full border border-luxury-white/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
