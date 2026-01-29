import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: 'BitBuds',
            description: 'A Kids coding platform in easy way. Interactive learning environment for young developers.',
            image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            link: '#',
            github: '#'
        },
        {
            title: 'Weather Forecast',
            description: 'A responsive weather app that provides current weather and forecasts using a weather API.',
            image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'API Integration', 'Tailwind CSS'],
            link: 'https://yashraj-sherke.github.io/Whether-Forcast/',
            github: 'https://github.com/Yashraj-sherke/Whether-Forcast'
        },
        {
            title: 'Job Application Tracker',
            description: 'Full-stack application for tracking job applications with admin panel and analytics.',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" className="relative py-32 px-6 bg-transparent" style={{background: 'transparent'}}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="User-centered development approach enhances productivity and drives revenue growth">
                    Projects
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
