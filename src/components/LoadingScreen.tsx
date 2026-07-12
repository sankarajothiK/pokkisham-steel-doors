import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500); // Intro lasts 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#0c0c0c] flex flex-col items-center justify-center text-white"
        >
          {/* Logo Animation */}
          <div className="relative mb-8 flex flex-col items-center">
            {/* Pulsing Outer Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: [0, 1, 1]
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-24 h-24 rounded-full border-2 border-brandGreen flex items-center justify-center bg-brandDark/50 backdrop-blur-md relative overflow-hidden"
            >
              {/* Spinning Accent */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-r-2 border-brandMagenta rounded-full opacity-60 pointer-events-none"
              />
              
              <img 
                src="/logo.jpeg" 
                alt="Pokkisham Logo" 
                className="w-20 h-20 object-contain rounded-full"
              />
            </motion.div>
          </div>

          {/* Text Animation */}
          <div className="text-center overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="font-montserrat text-3xl font-extrabold tracking-wider"
            >
              POKKISHAM
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="font-poppins text-xs tracking-[0.3em] text-brandGreen font-medium mt-2"
            >
              STEEL DOORS
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="font-inter text-[10px] tracking-widest text-brandLime font-light mt-6"
            >
              STRONG • SECURE • STYLISH
            </motion.p>
          </div>
          
          {/* Progress bar mock */}
          <div className="w-48 h-[1px] bg-brandDark/80 rounded-full mt-10 overflow-hidden relative border border-white/5">
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-brandGreen to-brandMagenta"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
