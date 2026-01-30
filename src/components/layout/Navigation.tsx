import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Navigation: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = ['Home', 'About', 'Services', 'Projects', 'Experience', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-oswald font-bold text-luxury-white cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    YASHRAJ SHERKE
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-luxury-gray hover:text-luxury-white transition-colors duration-300 font-nunito font-medium"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://github.com/Yashraj-sherke" target="_blank" rel="noopener noreferrer" className="text-luxury-gray hover:text-luxury-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/yashraj-sherke-35b8ab25b/" target="_blank" rel="noopener noreferrer" className="text-luxury-gray hover:text-luxury-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://drive.google.com/file/d/1K5hxyJuGxVhVzH10__l-rV7TlvtsGDYl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-luxury-gray hover:text-luxury-white transition-colors" title="Resume">
                        <FileText size={20} />
                    </a>
                    <a href="mailto:yashrajsherke49@gmail.com" className="text-luxury-gray hover:text-luxury-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-luxury-white"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass-strong mt-4 mx-6 rounded-2xl p-6"
                >
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="block w-full text-left py-3 text-luxury-gray hover:text-luxury-white transition-colors font-nunito"
                        >
                            {item}
                        </button>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};
