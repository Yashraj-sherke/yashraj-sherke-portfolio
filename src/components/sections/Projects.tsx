import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';
import bitbudsImage from '../../assets/bitbuds.png';
import payeaseImage from '../../assets/payease.png';
import hiresphereImage from '../../assets/hiresphere.png';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: 'BitBuds',
            description: 'A Kids coding platform in easy way. Interactive learning environment for young developers.',
            image: bitbudsImage,
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            link: '#',
            github: '#'
        },
        {
            title: 'PayEase',
            description: 'A secure MERN-based payment system with authentication, protected routes, and reliable transaction processing.',
            image: payeaseImage,
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
            link: '#',
            github: 'https://github.com/Yashraj-sherke/Whether-Forcast'
        },
        {
            title: 'HireSphere',
            description: 'A full-stack recruitment platform for managing job postings, applications, and recruiter dashboards.',
            image: hiresphereImage,
            tags: ['React', 'Node.js', 'MongoDB ', 'Express ', 'REST API'],
            link: '#',
            github: 'https://github.com/Yashraj-sherke/Hire-Sphere'
        }
    ];

    return (
        <section id="projects" className="relative py-32 px-6 bg-transparent" style={{ background: 'transparent' }}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="User-centered development approach enhances productivity and drives revenue growth">
                    .../Projects
                </SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="glass rounded-2xl overflow-hidden glow-border hover:glow-border-strong transition-all duration-300 group"
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black to-transparent opacity-60"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-oswald font-semibold text-luxury-white mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-luxury-gray font-nunito leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-nunito font-medium text-luxury-white bg-luxury-white/10 rounded-full border border-luxury-white/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-luxury-white hover:text-luxury-gray transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                        <span className="text-sm font-nunito">Live Demo</span>
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-luxury-white hover:text-luxury-gray transition-colors"
                                        >
                                            <Github size={18} />
                                            <span className="text-sm font-nunito">Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
