import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import companyLogo from '../assets/Navlogo2.png';

// Background image - starry sky town
const backgroundImage = 'https://res.cloudinary.com/dmofiy1up/image/upload/v1771297404/starry-sky-town_1_lezagg.jpg';

const SplashPage = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Start fade out after loading completes
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    // Complete animation and show main site
    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 4500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Background Image with Dark Overlay and Blur */}
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-[#0a1628]/85"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            {/* Logo with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-8"
            >
              {/* Glow Effect Behind Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#8B7355]/30 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              {/* Logo Image */}
              <motion.img
                src={companyLogo}
                alt="Covenant Terrains Logo"
                className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-[0.2em] mb-4"
            >
              COVENANT TERRAINS
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm md:text-base text-[#8B7355] tracking-[0.15em] italic mb-12"
            >
              "BUILDING WEALTH FROM THE GROUND"
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '200px' }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative"
            >
              {/* Background Bar */}
              <div className="w-48 md:w-56 h-[2px] bg-white/20 rounded-full overflow-hidden">
                {/* Progress Bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-[#8B7355] to-[#c4a87c] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              {/* Loading Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-white/50 text-xs tracking-widest mt-4"
              >
                {loadingProgress < 100 ? 'LOADING...' : 'WELCOME'}
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Corner Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#8B7355]/50"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#8B7355]/50"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SplashPage.propTypes = {
  onAnimationComplete: PropTypes.func.isRequired,
};

export default SplashPage;
