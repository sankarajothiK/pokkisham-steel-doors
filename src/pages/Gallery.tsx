import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import Lightbox from '../components/Lightbox';

interface GalleryItem {
  id: string;
  url: string;
  category: 'villa' | 'apartment' | 'commercial' | 'residential' | 'designer' | 'wood-finish';
  title: string;
  desc: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
      category: "villa",
      title: "Royal Villa Main Foyer",
      desc: "Double-leaf steel entrance door matching classical stone pillar layouts."
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      category: "apartment",
      title: "Apartment Hallway Entrance",
      desc: "Vanguard modernist dark steel door with smart lock integration."
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      category: "commercial",
      title: "Corporate Headquarters Foyer",
      desc: "UL-listed fire-rated security doors with heavy duty handles."
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      category: "wood-finish",
      title: "Rich Teak Residential Entry",
      desc: "Vacuum thermo-transferred textured teak grains on galvanized steel frames."
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      category: "residential",
      title: "Modern Foyer Side Door",
      desc: "Textured charcoal gray single steel door frame."
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      category: "designer",
      title: "Embossed Geometric Door",
      desc: "Precision CNC relief lines and customized vertical bar pulls."
    },
    {
      id: "gal-7",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      category: "designer",
      title: "Villa Steel Windows",
      desc: "Casement security profiles matching modern building architecture."
    },
    {
      id: "gal-8",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
      category: "wood-finish",
      title: "Walnut Double-leaf Entrance",
      desc: "Luxurious walnut finish with perimeter weather stripping."
    }
  ];

  const categories = [
    { value: "all", label: "Show All" },
    { value: "villa", label: "Villas" },
    { value: "apartment", label: "Apartments" },
    { value: "commercial", label: "Commercial" },
    { value: "residential", label: "Residential" },
    { value: "designer", label: "Designer" },
    { value: "wood-finish", label: "Wood Finish" }
  ];

  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const handleImageClick = (id: string) => {
    // Find index in filtered items list
    const index = filteredItems.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
      setIsLightboxOpen(true);
    }
  };

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative">
      
      {/* Lightbox Component */}
      <Lightbox
        images={filteredItems.map(item => item.url)}
        initialIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
            Portfolio Gallery
          </span>
          <h1 className="font-montserrat text-4xl font-extrabold mb-4">
            Completed <span className="text-gradient-green">Projects</span>
          </h1>
          <p className="font-inter text-xs text-gray-400">
            A showcase of luxury homes and commercial structures secured and beautified by Pokkisham Steel Doors.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 hide-scrollbar max-w-full justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold transition-all border ${
                selectedFilter === cat.value
                  ? 'bg-brandMagenta border-brandMagenta/50 text-white shadow-glow-magenta'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleImageClick(item.id)}
                className="masonry-item break-inside-avoid relative rounded-2xl overflow-hidden border border-white/5 hover:border-brandGreen/40 bg-brandDark/40 cursor-zoom-in group"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500" 
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="block font-poppins text-[10px] font-bold text-brandLime uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-montserrat text-sm font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="font-inter text-[11px] text-gray-300 leading-normal">
                    {item.desc}
                  </p>
                  
                  <div className="absolute top-4 right-4 bg-brandGreen/90 p-2 rounded-full text-white shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

    </div>
  );
}
