import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Shield, Compass, Calculator, PhoneCall, Info } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const productCategories = [
    { name: "Steel Entrance Doors", path: "/products?category=entrance", desc: "Heavy security & architectural main doors" },
    { name: "Wood Finish Doors", path: "/products?category=wood-finish", desc: "Natural wood aesthetics with steel durability" },
    { name: "Designer Doors", path: "/products?category=designer", desc: "Modern embossed geometric patterns" },
    { name: "Luxury Doors", path: "/products?category=luxury", desc: "Safety glass integrated premium doors" },
    { name: "Commercial Doors", path: "/products?category=commercial", desc: "UL fire-rated office & panic exit doors" },
    { name: "Steel Windows", path: "/products?category=windows", desc: "Casement windows with integrated grills" },
    { name: "Custom Doors", path: "/products?category=custom", desc: "Made-to-order bespoke frame openings" }
  ];

  const menuItems = [
    { label: "Home", path: "/" },
    { 
      label: "About Us", 
      path: "/about",
      subItems: [
        { label: "Company Profile", path: "/about#company", icon: <Info className="w-4 h-4" /> },
        { label: "Mission & Vision", path: "/about#mission", icon: <Sparkles className="w-4 h-4" /> },
        { label: "Why Choose Us", path: "/about#why-choose-us", icon: <Shield className="w-4 h-4" /> }
      ]
    },
    { 
      label: "Products", 
      path: "/products",
      isMega: true 
    },
    { label: "Gallery", path: "/gallery" },
    { label: "Door Finder", path: "/door-finder", icon: <Compass className="w-4 h-4 text-brandLime" /> },
    { label: "Quote Calculator", path: "/quote-calculator", icon: <Calculator className="w-4 h-4 text-brandMagenta" /> },
    { label: "FAQ", path: "/faq" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-brandGreen transition-colors flex items-center justify-center bg-white/5 backdrop-blur-sm">
            <img src="/logo.jpeg" alt="Pokkisham Logo" className="w-8 h-8 object-contain rounded-full" />
          </div>
          <div>
            <span className="font-montserrat text-lg font-black tracking-wider text-white flex items-center">
              POKKISHAM
            </span>
            <span className="block font-poppins text-[8px] tracking-[0.35em] text-brandGreen font-semibold -mt-1">
              STEEL DOORS
            </span>
          </div>
        </Link>

        {/* Desktop Menu links */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            
            // Mega menu style
            if (item.isMega) {
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveDropdown('products')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative py-2"
                >
                  <button className={`flex items-center gap-1 font-poppins text-xs font-semibold tracking-wide transition-colors ${
                    activeDropdown === 'products' || isActive ? 'text-brandGreen' : 'text-gray-300 hover:text-white'
                  }`}>
                    {item.label} <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[550px] rounded-3xl glass-panel p-6 shadow-premium grid grid-cols-2 gap-4"
                      >
                        <div className="col-span-2 border-b border-white/5 pb-2 mb-2">
                          <h4 className="font-montserrat text-xs font-bold text-white tracking-wider flex items-center gap-1.5 uppercase">
                            <Sparkles className="w-3.5 h-3.5 text-brandGreen" /> Premium Steel Catalog
                          </h4>
                        </div>
                        {productCategories.map((cat, cidx) => (
                          <Link
                            key={cidx}
                            to={cat.path}
                            className="p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 hover:shadow-premium group transition-all"
                          >
                            <span className="block font-poppins text-xs font-bold text-white group-hover:text-brandGreen transition-colors">
                              {cat.name}
                            </span>
                            <span className="block font-inter text-[10px] text-gray-400 mt-1">
                              {cat.desc}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Dropdown menu (e.g. About)
            if (item.subItems) {
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveDropdown('about')}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="relative py-2"
                >
                  <button className={`flex items-center gap-1 font-poppins text-xs font-semibold tracking-wide transition-colors ${
                    activeDropdown === 'about' || isActive ? 'text-brandGreen' : 'text-gray-300 hover:text-white'
                  }`}>
                    {item.label} <ChevronDown className="w-3 h-3" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'about' && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-48 rounded-2xl glass-panel p-3 shadow-premium flex flex-col gap-1"
                      >
                        {item.subItems.map((sub, sidx) => (
                          <Link
                            key={sidx}
                            to={sub.path}
                            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 font-poppins text-xs font-medium text-gray-300 hover:text-white transition-colors"
                          >
                            {sub.icon}
                            <span>{sub.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={idx}
                to={item.path}
                className={`font-poppins text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-colors ${
                  isActive ? 'text-brandGreen' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* CTA Contact Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brandMagenta hover:bg-brandMagenta-dark text-white font-poppins text-xs font-bold shadow-lg shadow-brandMagenta/20 hover:shadow-glow-magenta hover:-translate-y-0.5 transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4 animate-bounce" /> Get Consultation
          </Link>
        </div>

        {/* Mobile Hamburger menu button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white hover:text-brandGreen p-2.5 rounded-full bg-white/5 border border-white/5"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brandDark/95 border-b border-white/10 backdrop-blur-xl absolute top-full left-0 right-0 overflow-y-auto max-h-[85vh]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                
                if (item.isMega) {
                  return (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="font-poppins text-xs font-bold text-gray-400 tracking-wider uppercase">
                        {item.label}
                      </span>
                      <div className="grid grid-cols-2 gap-2 pl-2">
                        {productCategories.map((cat, cidx) => (
                          <Link
                            key={cidx}
                            to={cat.path}
                            className="p-2 rounded-xl bg-white/5 font-poppins text-[11px] font-semibold text-gray-300"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.subItems) {
                  return (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="font-poppins text-xs font-bold text-gray-400 tracking-wider uppercase">
                        {item.label}
                      </span>
                      <div className="flex flex-col gap-2 pl-2">
                        {item.subItems.map((sub, sidx) => (
                          <Link
                            key={sidx}
                            to={sub.path}
                            className="flex items-center gap-2 p-2 rounded-xl bg-white/5 font-poppins text-[11px] font-semibold text-gray-300"
                          >
                            {sub.icon} {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`font-poppins text-sm font-semibold tracking-wide flex items-center gap-2 ${
                      isActive ? 'text-brandGreen' : 'text-gray-200'
                    }`}
                  >
                    {item.icon} {item.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-brandMagenta hover:bg-brandMagenta/90 text-white font-poppins text-xs font-bold"
              >
                <PhoneCall className="w-4 h-4" /> Call Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
