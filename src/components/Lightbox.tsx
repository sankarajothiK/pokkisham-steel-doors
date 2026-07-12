import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomScale, setZoomScale] = useState(1);

  if (!isOpen) return null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomScale(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomScale(1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prevScale) => (prevScale === 1 ? 2 : 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[99999] bg-black/95 flex flex-col justify-between p-4"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between z-10 w-full px-4 py-2">
            <span className="font-poppins text-xs text-gray-400 font-semibold tracking-wide">
              {currentIndex + 1} / {images.length}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleZoom}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
                title="Toggle Zoom"
              >
                {zoomScale === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Viewer Panel */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: zoomScale }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-[80vh] flex items-center justify-center cursor-zoom-in"
              onClick={toggleZoom}
            >
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Previews */}
          <div className="flex justify-center gap-2 overflow-x-auto py-4 max-w-xl mx-auto hide-scrollbar z-10">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomScale(1);
                  setCurrentIndex(idx);
                }}
                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  idx === currentIndex ? 'border-brandGreen scale-105' : 'border-transparent opacity-40 hover:opacity-75'
                }`}
              >
                <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
