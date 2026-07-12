import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, MessageSquare, ShieldCheck, Settings, Check, ZoomIn } from 'lucide-react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import Lightbox from '../components/Lightbox';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  
  // Lightbox control state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Selected Swatch Color
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | null>(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.specs.availableColors[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="font-montserrat text-xl font-bold text-white mb-4">Product Not Found</h2>
        <Link to="/products" className="text-brandGreen font-poppins text-xs font-semibold hover:underline">
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Find related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  // WhatsApp Quote Link Generator
  const waQuoteLink = `https://wa.me/919176998889?text=${encodeURIComponent(
    `Hello Pokkisham Steel Doors,\nI am interested in requesting a quote for your product.\n\nProduct Name: ${product.title}\nColor Selected: ${selectedColor?.name || 'Default'}\nApplications: ${product.specs.applications}\n\nPlease contact me.\nThank You.`
  )}`;

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative">
      
      {/* Lightbox Modal */}
      <Lightbox
        images={product.gallery}
        initialIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-white font-poppins text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        {/* Product Info Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Gallery Block (Left) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Main Image */}
            <div 
              onClick={() => handleOpenLightbox(0)}
              className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 relative group cursor-zoom-in bg-brandDark/25"
            >
              <img 
                src={product.gallery[0]} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 bg-brandDark/85 backdrop-blur-md p-2.5 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
            
            {/* Gallery Thumbnails List */}
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleOpenLightbox(idx)}
                  className="h-24 md:h-28 rounded-2xl overflow-hidden border border-white/5 hover:border-brandGreen transition-all cursor-zoom-in bg-brandDark/25 relative"
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Block (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] font-poppins font-bold text-brandLime tracking-widest uppercase block mb-2">
                {product.category.replace('-', ' ')}
              </span>
              <h1 className="font-montserrat text-3xl font-extrabold text-white leading-tight">
                {product.title}
              </h1>
              <span className="block font-montserrat text-lg font-bold text-brandGreen mt-2">
                Estimated: {product.priceRange}
              </span>
            </div>

            <p className="font-inter text-xs text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Colors Select Swatches */}
            <div>
              <h4 className="font-poppins text-xs font-bold text-white uppercase tracking-wider mb-3">
                Available Colors
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {product.specs.availableColors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full border font-poppins text-[10px] font-semibold transition-all ${
                      selectedColor?.name === color.name
                        ? 'border-brandGreen bg-white/5 text-white'
                        : 'border-white/5 bg-white/[0.01] text-gray-400 hover:text-white'
                    }`}
                  >
                    <span 
                      className="w-3 h-3 rounded-full border border-white/10 flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                    {selectedColor?.name === color.name && <Check className="w-3 h-3 text-brandGreen" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications Matrix list */}
            <div>
              <h4 className="font-poppins text-xs font-bold text-white uppercase tracking-wider mb-3">
                Technical Specifications
              </h4>
              <div className="rounded-2xl border border-white/5 overflow-hidden font-inter text-xs">
                <div className="grid grid-cols-2 p-3 bg-white/[0.01] border-b border-white/5">
                  <span className="text-gray-500">Material</span>
                  <span className="text-gray-200">{product.specs.material}</span>
                </div>
                <div className="grid grid-cols-2 p-3 border-b border-white/5">
                  <span className="text-gray-500">Leaf/Frame Thickness</span>
                  <span className="text-gray-200">{product.specs.thickness}</span>
                </div>
                <div className="grid grid-cols-2 p-3 bg-white/[0.01] border-b border-white/5">
                  <span className="text-gray-500">Lock System</span>
                  <span className="text-gray-200">{product.specs.lockSystem}</span>
                </div>
                <div className="grid grid-cols-2 p-3 border-b border-white/5">
                  <span className="text-gray-500">Warranty Protection</span>
                  <span className="text-gray-200">{product.specs.warranty}</span>
                </div>
                <div className="grid grid-cols-2 p-3 bg-white/[0.01]">
                  <span className="text-gray-500">Applications</span>
                  <span className="text-gray-200">{product.specs.applications}</span>
                </div>
              </div>
            </div>

            {/* Quote Action */}
            <div className="pt-4 border-t border-white/5">
              <a
                href={waQuoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-sm font-bold shadow-lg shadow-brandGreen/25 hover:shadow-glow-green hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-4 h-4" /> Request Quote on WhatsApp
              </a>
            </div>

          </div>

        </div>

        {/* Customization Details Panel */}
        <div className="glass-panel p-8 rounded-3xl mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-montserrat text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-brandLime" /> Customization Options
            </h3>
            <ul className="space-y-3 font-inter text-xs text-gray-300">
              {product.customizationOptions.map((opt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandLime mt-2 flex-shrink-0" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brandGreen" /> Core Product Advantages
            </h3>
            <ul className="space-y-3 font-inter text-xs text-gray-300">
              {product.features.map((opt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brandGreen mt-0.5 flex-shrink-0" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="font-montserrat text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">
              Related Designs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <div key={p.id} className="interactive-glow-card rounded-2xl bg-brandDark/40 border border-white/5 overflow-hidden p-4 flex flex-col justify-between">
                  <div className="h-44 rounded-xl overflow-hidden mb-4">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-montserrat text-sm font-bold text-white mb-1">{p.title}</h4>
                  <span className="block font-poppins text-[10px] text-brandGreen font-semibold mb-4 uppercase tracking-wider">{p.category}</span>
                  <Link
                    to={`/products/${p.id}`}
                    className="block text-center py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-poppins text-xs font-semibold border border-white/15"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
