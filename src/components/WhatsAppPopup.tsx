import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-24 left-6 z-[49] max-w-[300px] rounded-2xl glass-panel text-white p-4 shadow-premium border border-white/10"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-poppins text-xs font-bold text-gray-200">Pokkisham Support</h4>
                <p className="text-[9px] text-green-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Online
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body content */}
          <div className="mb-4 bg-brandDark/50 rounded-xl p-3 border border-white/5">
            <p className="font-inter text-xs text-gray-300 leading-relaxed">
              Hi 👋 Need help selecting the perfect steel door? Ask us anything! We can recommend sizes, models, and lock combinations.
            </p>
          </div>

          {/* Action Button */}
          <a
            href="https://wa.me/919176998889"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-700 transition-colors font-poppins text-xs font-semibold text-white shadow-lg shadow-green-900/30"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
