import React from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Sprout, Star, Clock, Users } from 'lucide-react';

// Ensure the moving technology strip feels like a continuous conveyor, not a slider.

export const Integration: React.FC = () => {
    const stats = [
        { number: '+5', label: 'Projects Completed', icon: Sprout },
        { number: '350+', label: 'DSA Problems Solved', icon: Star },
        { number: '1+', label: 'Year Experience', icon: Clock },
        { number: '3+', label: 'Team Collaborations', icon: Users },
    ];

    const orbitTools = [
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ];

    const aiOrbitTools = [
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'TensorFlow', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Jupyter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    ];

    const technologies = [
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
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

                            {/* Revolving tool logos */}
                            <div className="absolute inset-0 rounded-full tech-orbit tech-orbit-slow">
                                {orbitTools.map((tool, index) => (
                                    <div
                                        key={tool.name}
                                        className="tech-orbit-item"
                                        style={{ '--angle': `${(index / orbitTools.length) * 360}deg` } as React.CSSProperties}
                                        title={tool.name}
                                    >
                                        <div className="tech-orbit-logo tech-orbit-counter-slow">
                                            <img src={tool.iconUrl} alt={tool.name} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute inset-10 rounded-full tech-orbit tech-orbit-fast">
                                {aiOrbitTools.map((tool, index) => (
                                    <div
                                        key={tool.name}
                                        className="tech-orbit-item"
                                        style={{ '--angle': `${(index / aiOrbitTools.length) * 360}deg` } as React.CSSProperties}
                                        title={tool.name}
                                    >
                                        <div className="tech-orbit-logo tech-orbit-counter-fast">
                                            <img src={tool.iconUrl} alt={tool.name} />
                                        </div>
                                    </div>
                                ))}
                            </div>

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
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <img src={tech.iconUrl} alt={tech.name} className="w-7 h-7" style={{ filter: (tech.name === 'Express' || tech.name === 'GitHub') ? 'invert(1)' : 'none' }} />
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

                .tech-orbit {
                    animation: orbit-spin 34s linear infinite;
                }

                .tech-orbit-fast {
                    animation-duration: 24s;
                    animation-direction: reverse;
                }

                .tech-orbit-item {
                    --angle: 0deg;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 48px;
                    height: 48px;
                    margin: -24px 0 0 -24px;
                    transform: rotate(var(--angle)) translateX(160px) rotate(calc(-1 * var(--angle)));
                }

                .tech-orbit-fast .tech-orbit-item {
                    transform: rotate(var(--angle)) translateX(120px) rotate(calc(-1 * var(--angle)));
                }

                .tech-orbit-logo {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(245, 245, 245, 0.1);
                    border: 1px solid rgba(245, 245, 245, 0.2);
                    box-shadow: 0 0 22px rgba(245, 245, 245, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    animation: orbit-counter-spin 34s linear infinite;
                }

                .tech-orbit-counter-fast {
                    animation-duration: 24s;
                    animation-direction: reverse;
                }

                .tech-orbit-logo img {
                    width: 28px;
                    height: 28px;
                    object-fit: contain;
                }

                @keyframes orbit-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes orbit-counter-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }

                @media (min-width: 1024px) {
                    .tech-orbit-item {
                        transform: rotate(var(--angle)) translateX(200px) rotate(calc(-1 * var(--angle)));
                    }

                    .tech-orbit-fast .tech-orbit-item {
                        transform: rotate(var(--angle)) translateX(150px) rotate(calc(-1 * var(--angle)));
                    }
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

const StatCard: React.FC<StatCardProps> = ({ number, label, icon: Icon, delay }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: '-20px' });
    const count = useMotionValue(0);
    const smoothCount = useSpring(count, { stiffness: 70, damping: 18 });
    const [displayNumber, setDisplayNumber] = React.useState(number);
    const numericValue = Number(number.replace(/\D/g, ''));
    const prefix = number.startsWith('+') ? '+' : '';
    const suffix = number.endsWith('+') ? '+' : '';

    React.useEffect(() => {
        if (isInView && numericValue > 0) {
            count.set(numericValue);
        }
    }, [count, isInView, numericValue]);

    React.useEffect(() => {
        const unsubscribe = smoothCount.on('change', (latest) => {
            setDisplayNumber(`${prefix}${Math.round(latest)}${suffix}`);
        });

        return unsubscribe;
    }, [prefix, smoothCount, suffix]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay, ease: 'easeOut' }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="rounded-xl dark-glass border border-[#f5f5f5]/10 p-5 hover:border-[#f5f5f5]/20 transition-all duration-300 group overflow-hidden relative"
        >
            <motion.div
                className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#f5f5f5]/5 blur-xl"
                animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 3.5, repeat: Infinity, delay }}
            />
            <div className="relative flex items-start justify-between mb-3">
                <motion.span
                    className="text-2xl font-oswald font-bold text-[#f5f5f5]"
                    animate={isInView ? { textShadow: ['0 0 0 rgba(245,245,245,0)', '0 0 18px rgba(245,245,245,0.35)', '0 0 0 rgba(245,245,245,0)'] } : {}}
                    transition={{ duration: 1.2, delay: delay + 0.25 }}
                >
                    {displayNumber}
                </motion.span>
                <motion.div
                    animate={{
                        y: [0, -5, 0],
                        rotate: [0, 4, -4, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
                    className="text-[#a6a6a6] group-hover:text-[#f5f5f5] transition-colors"
                >
                    <Icon size={24} strokeWidth={1.5} />
                </motion.div>
            </div>
            <p className="relative text-xs text-[#a6a6a6] font-nunito leading-snug">{label}</p>
        </motion.div>
    );
};
