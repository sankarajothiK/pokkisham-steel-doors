import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brandDark border-t border-white/5 pt-16 pb-28 md:pb-12 text-gray-400 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brandGreen/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brandMagenta/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/5">
              <img src="/logo.jpeg" alt="Pokkisham Logo" className="w-8 h-8 object-contain rounded-full" />
            </div>
            <div>
              <span className="font-montserrat text-lg font-black tracking-wider text-white">
                POKKISHAM
              </span>
              <span className="block font-poppins text-[8px] tracking-[0.35em] text-brandGreen font-semibold -mt-1">
                STEEL DOORS
              </span>
            </div>
          </Link>
          <p className="font-inter text-xs text-gray-400 leading-relaxed mt-2">
            Strong • Secure • Stylish. Premium quality steel doors and windows manufacturer serving Chennai and South India. Designed for luxurious security.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a 
              href="https://facebook.com/p/Pokkisham-STEEL-DOOR-61572772931399/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brandGreen text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/5"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/pokkisham_steel_doors_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-brandMagenta text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/5"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-montserrat text-xs font-bold text-white uppercase tracking-wider mb-6 border-l-2 border-brandGreen pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 font-poppins text-xs">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Company</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition-colors">Project Gallery</Link>
            </li>
            <li>
              <Link to="/door-finder" className="hover:text-white transition-colors flex items-center gap-1">
                Door Finder <span className="bg-brandGreen/20 text-brandGreen px-1.5 py-0.5 rounded text-[8px] font-bold">New</span>
              </Link>
            </li>
            <li>
              <Link to="/quote-calculator" className="hover:text-white transition-colors">Quote Calculator</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">FAQs</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="font-montserrat text-xs font-bold text-white uppercase tracking-wider mb-6 border-l-2 border-brandGreen pl-3">
            Product Line
          </h4>
          <ul className="space-y-3 font-poppins text-xs">
            <li>
              <Link to="/products?category=entrance" className="hover:text-white transition-colors">Steel Entrance Doors</Link>
            </li>
            <li>
              <Link to="/products?category=wood-finish" className="hover:text-white transition-colors">Wood Finish Steel Doors</Link>
            </li>
            <li>
              <Link to="/products?category=designer" className="hover:text-white transition-colors">Designer Steel Doors</Link>
            </li>
            <li>
              <Link to="/products?category=luxury" className="hover:text-white transition-colors">Luxury Safety Glass Doors</Link>
            </li>
            <li>
              <Link to="/products?category=commercial" className="hover:text-white transition-colors">Commercial Exit Doors</Link>
            </li>
            <li>
              <Link to="/products?category=windows" className="hover:text-white transition-colors">Premium Steel Windows</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-montserrat text-xs font-bold text-white uppercase tracking-wider mb-6 border-l-2 border-brandGreen pl-3">
            Contact Details
          </h4>
          <ul className="space-y-4 font-inter text-xs">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brandGreen flex-shrink-0 mt-0.5" />
              <span>
                No.5, Subbammal Street, Kallikuppam Road, Venkatapuram, Ambattur, Chennai - 600053
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brandGreen flex-shrink-0" />
              <a href="tel:+919176998889" className="hover:text-white transition-colors">
                +91 9176998889
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brandGreen flex-shrink-0" />
              <a href="mailto:pokkishamdoors@gmail.com" className="hover:text-white transition-colors">
                pokkishamdoors@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-brandGreen flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-white font-medium">Mon - Sat: 9:00 AM - 8:00 PM</span>
                <span className="block text-gray-500">Sunday: Closed</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Map Iframe */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/5 shadow-inner opacity-70 hover:opacity-95 transition-opacity">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.642878438676!2d80.15570077587786!3d13.12185208720743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52631555555555%3A0xe1c76a599b662d5!2sPokkisham%20STEEL%20DOORS!5e0!3m2!1sen!2sin!4v1720750000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Pokkisham Steel Doors Location"
          />
        </div>
      </div>

      {/* Footer Legal and copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-inter text-[11px] text-gray-500">
        <div>
          &copy; {currentYear} Pokkisham Steel Doors. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <ShieldCheck className="w-3.5 h-3.5 text-brandGreen" /> Secure connection verified
        </div>
      </div>

    </footer>
  );
}
