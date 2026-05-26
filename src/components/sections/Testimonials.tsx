import React from 'react';
import { motion } from 'framer-motion';
import certGoogleCloud from '../../assets/cert_google_cloud.png';
import certInfosys from '../../assets/cert_infosys.png';
import certGdsc from '../../assets/cert_gdsc.png';

// Treat certificates like proof of credibility, not decoration.

export const Testimonials: React.FC = () => {
    const certificates = [
        {
            image: certGoogleCloud,
            title: 'Google Cloud: Intro to Generative AI',
            description: 'Earned the "Introduction to Generative AI" completion badge from Google Cloud, demonstrating foundational knowledge in generative AI concepts and applications.',
        },
        {
            image: certInfosys,
            title: 'Infosys Springboard: Website Creation',
            description: 'Successfully completed the "Website Creation" course on Infosys Springboard, gaining practical skills in web development and design.',
        },
        {
            image: certGdsc,
            title: 'Google Developer Student Clubs',
            description: 'Completed the Google Cloud Computing Foundations & Generative AI Study Jams at GDSC MITS, gaining cloud computing fundamentals.',
        },
    ];

    return (
        <section id="testimonials" className="relative py-24 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-oswald font-bold text-[#f5f5f5] mb-4 tracking-tight">
                        .../Testimonials and Recognitions
                    </h2>
                    <p className="text-[#a6a6a6] font-nunito text-base lg:text-lg max-w-4xl">
                        Throughout my B.Tech journey, I have actively pursued continuous learning and skills enhancement.
                        Here are some of the key certifications and recognitions I have earned from reputed organizations.
                    </p>
                </motion.div>

                {/* Certificate Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={cert.title} {...cert} delay={index * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface CertificateCardProps {
    image: string;
    title: string;
    description: string;
    delay: number;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ image, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="group"
    >
        {/* Certificate Image */}
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl overflow-hidden border border-[#f5f5f5]/10 mb-6 hover:border-[#f5f5f5]/30 transition-all duration-300"
            style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(245,245,245,0.05)',
            }}
        >
            <img
                src={image}
                alt={`${title} Certificate`}
                className="w-full h-auto object-cover"
            />
        </motion.div>

        {/* Card Content */}
        <div>
            <h3 className="text-xl font-oswald font-bold text-[#f5f5f5] mb-3 tracking-tight">
                {title}
            </h3>
            <p className="text-sm text-[#a6a6a6] font-nunito leading-relaxed">
                {description}
            </p>
        </div>
    </motion.div>
);
