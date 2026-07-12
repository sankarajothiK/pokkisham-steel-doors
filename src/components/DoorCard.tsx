import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import type { Product } from '../data/products';

interface DoorCardProps {
  product: Product;
}

export default function DoorCard({ product }: DoorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="interactive-glow-card group rounded-2xl flex flex-col justify-between h-full bg-brandDark/40 backdrop-blur-md overflow-hidden relative"
    >
      {/* Product Image Panel */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent opacity-90" />
        
        {/* Category Label */}
        <div className="absolute top-4 left-4 bg-brandDark/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md text-[10px] font-poppins font-semibold uppercase tracking-wider text-brandLime">
          {product.category.replace('-', ' ')}
        </div>
      </div>

      {/* Product Info Panel */}
      <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <h3 className="font-montserrat text-lg font-bold text-white mb-2 group-hover:text-brandGreen transition-colors duration-300">
            {product.title}
          </h3>
          <p className="font-inter text-xs text-gray-400 leading-relaxed mb-4">
            {product.shortDesc}
          </p>

          {/* Features Checklist */}
          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[11px] font-inter text-gray-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brandGreen flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-poppins text-xs font-semibold border border-white/10 hover:border-brandGreen transition-all duration-300"
          >
            Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <Link
            to={`/contact?product=${encodeURIComponent(product.title)}`}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-xs font-semibold hover:shadow-glow-green transition-all duration-300"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
