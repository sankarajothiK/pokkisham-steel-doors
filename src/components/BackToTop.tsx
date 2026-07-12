import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 20;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress * circumference);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[49] w-12 h-12 flex items-center justify-center rounded-full bg-brandDark/80 hover:bg-brandDark text-white border border-white/10 hover:border-brandGreen transition-colors focus:outline-none focus:ring-2 focus:ring-brandGreen shadow-premium group"
          aria-label="Back to Top"
        >
          {/* Circular Progress Overlay */}
          <svg className="absolute -rotate-90 w-[50px] h-[50px]">
            <circle
              cx="25"
              cy="25"
              r={radius}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            <circle
              cx="25"
              cy="25"
              r={radius}
              stroke="#7FAF2C"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-75"
            />
          </svg>
          
          <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-brandGreen group-hover:-translate-y-1 transition-all duration-300 z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
