import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

export default function FloatingContactPanel() {
  const panelItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Now",
      href: "tel:+919176998889",
      color: "bg-blue-600 hover:bg-blue-700",
      glow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/919176998889",
      color: "bg-green-600 hover:bg-green-700",
      glow: "hover:shadow-[0_0_15px_rgba(22,163,74,0.5)]"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Google Maps",
      href: "https://maps.app.goo.gl/uX3Qd2x9sB1uJg5R8", // Standard direct map search or map location link
      color: "bg-red-600 hover:bg-red-700",
      glow: "hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:pokkishamdoors@gmail.com",
      color: "bg-brandMagenta hover:bg-brandMagenta/90",
      glow: "hover:shadow-[0_0_15px_rgba(197,0,107,0.5)]"
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[49] hidden md:flex flex-col gap-3">
      {panelItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
          className={`group flex items-center justify-center w-12 h-12 rounded-full text-white ${item.color} ${item.glow} transition-all duration-300 relative shadow-premium`}
          aria-label={item.label}
        >
          {item.icon}
          
          {/* Label Tooltip */}
          <span className="absolute right-14 scale-0 group-hover:scale-100 origin-right transition-transform duration-300 bg-brandDark/95 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-poppins font-medium whitespace-nowrap backdrop-blur-md">
            {item.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
