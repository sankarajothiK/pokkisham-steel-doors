import { Phone, MessageCircle, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[49] md:hidden bg-brandDark/90 backdrop-blur-lg border-t border-white/10 px-4 py-2 flex items-center justify-around shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
      <a 
        href="tel:+919176998889" 
        className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
      >
        <div className="p-1 rounded-full bg-blue-600/10 text-blue-500">
          <Phone className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-poppins font-medium">Call Now</span>
      </a>

      <a 
        href="https://wa.me/919176998889" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
      >
        <div className="p-1 rounded-full bg-green-600/10 text-green-500">
          <MessageCircle className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-poppins font-medium">WhatsApp</span>
      </a>

      <a 
        href="https://maps.app.goo.gl/uX3Qd2x9sB1uJg5R8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
      >
        <div className="p-1 rounded-full bg-red-600/10 text-red-500">
          <MapPin className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-poppins font-medium">Location</span>
      </a>

      <Link 
        to="/door-finder" 
        className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
      >
        <div className="p-1 rounded-full bg-brandGreen/10 text-brandGreen">
          <Compass className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-poppins font-medium">Door Finder</span>
      </Link>
    </div>
  );
}
