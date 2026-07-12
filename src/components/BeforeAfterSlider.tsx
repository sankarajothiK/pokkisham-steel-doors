import { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/10"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Before Image (Old Wooden Door) */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1549845013-31f0e45ed73d?auto=format&fit=crop&q=80&w=1200" 
          alt="Old Wooden Door" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-brandDark/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold text-gray-300 border border-white/5">
          Old Wooden Door (Vulnerable & High Maintenance)
        </div>
      </div>

      {/* After Image (Premium Steel Door) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200" 
          alt="Premium Steel Door" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-brandGreen/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-poppins font-semibold text-white border border-brandLime/20">
          Pokkisham Steel Door (Ultra Secure & Maintenance Free)
        </div>
      </div>

      {/* Slider Bar */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brandGreen text-white border-2 border-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4"
          >
            <path d="m15 18-6-6 6-6" />
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Prompt Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-brandDark/85 backdrop-blur-md px-4 py-2 rounded-full text-xs font-poppins text-gray-300 font-medium border border-white/10 pointer-events-none animate-pulse">
        Drag Slider to Compare
      </div>
    </div>
  );
}
