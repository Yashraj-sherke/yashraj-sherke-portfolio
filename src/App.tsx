import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import { Scene3D } from './components/3d/Scene3D';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // GSAP ScrollTrigger animations
      gsap.utils.toArray('section').forEach((section) => {
        gsap.from(section as gsap.TweenTarget, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section as gsap.DOMTarget,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        });
      });
    }
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-luxury-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-oswald font-bold text-luxury-white mb-4">
                YS
              </h1>
              <motion.div
                animate={{ width: ['0%', '100%'] }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-1 bg-luxury-white mx-auto"
                style={{ maxWidth: '200px' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Application */}
      {!isLoading && (
        <div className="relative">
          {/* 3D Background Scene */}
          <Scene3D />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="relative z-10 bg-transparent" style={{ background: 'transparent' }}>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;