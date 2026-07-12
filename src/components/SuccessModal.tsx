import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-brandDark/95 border border-white/10 rounded-3xl p-8 text-center text-white shadow-premium z-10 overflow-hidden"
          >
            {/* Animated Glow Border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brandGreen to-transparent" />

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <CheckCircle2 className="w-16 h-16 text-brandGreen" />
            </motion.div>

            {/* Content */}
            <h3 className="font-montserrat text-2xl font-bold mb-3 tracking-wide">
              Thank You!
            </h3>
            
            <p className="font-inter text-sm text-gray-300 mb-6 leading-relaxed">
              Your inquiry has been successfully compiled and prepared.
            </p>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-6 flex items-center justify-center gap-3">
              <Loader2 className="w-5 h-5 text-brandLime animate-spin" />
              <span className="font-poppins text-xs text-brandLime font-medium tracking-wide">
                Opening WhatsApp to Send Message...
              </span>
            </div>

            <p className="font-inter text-[11px] text-gray-400">
              If it does not open automatically, check your browser block settings or click the submit button again.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
