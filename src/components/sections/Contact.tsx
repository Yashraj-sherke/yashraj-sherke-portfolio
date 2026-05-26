import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlowButton } from '../ui/GlowButton';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'yashrajsherke49@gmail.com',
            link: 'mailto:yashrajsherke49@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 7225840487',
            link: 'tel:+917225840487'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'India-Gwalior',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            link: 'https://github.com/Yashraj-sherke'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/yashraj-sherke-35b8ab25b/'
        }
    ];

    return (
        <section id="contact" className="relative py-32 px-6 bg-transparent" style={{ background: 'transparent' }}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle subtitle="I am eager to connect with you and hear your thoughts">
                    Get In Touch
                </SectionTitle>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass rounded-2xl p-6 glow-border hover:glow-border-strong transition-all duration-300 text-center"
                            >
                                <div className="inline-block p-4 rounded-xl glass-strong mb-4">
                                    <info.icon size={24} className="text-luxury-white" />
                                </div>
                                <h3 className="text-lg font-oswald font-semibold text-luxury-white mb-2">
                                    {info.label}
                                </h3>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="text-luxury-gray hover:text-luxury-white transition-colors font-nunito"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-luxury-gray font-nunito">{info.value}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center gap-6 mb-12"
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-xl glow-border hover:glow-border-strong transition-all duration-300 hover:scale-110"
                            >
                                <social.icon size={24} className="text-luxury-white" />
                            </a>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-luxury-gray font-nunito text-lg mb-8">
                            I welcome you to connect for potential collaborations or just a friendly chat. Let's create something amazing together!
                        </p>
                        <GlowButton href="mailto:yashrajsherke49@gmail.com" variant="primary">
                            Send Me a Message
                        </GlowButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
