import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Hammer, MessageSquare, PhoneCall, Sparkles, 
  MapPin, CheckCircle, Flame, Droplets, Volume2, Shield, Calendar, Users 
} from 'lucide-react';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import DoorCard from '../components/DoorCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// Helper component for animated statistics counters
function AnimatedCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2; // seconds
      const end = value;
      if (end === 0) return;
      
      const totalMiliseconds = duration * 1000;
      const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / stepTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-md hover:border-brandGreen/30 transition-all duration-300">
      <span className="block font-montserrat text-4xl font-extrabold text-gradient-green mb-2">
        {count}{suffix}
      </span>
      <span className="block font-poppins text-[10px] tracking-widest text-gray-400 font-bold uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor movement glow on Hero Card
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const securityBadges = [
    { icon: <Shield className="w-6 h-6 text-brandGreen" />, name: "Rust Resistant", desc: "Zinc-galvanized outer coating against moisture" },
    { icon: <Flame className="w-6 h-6 text-brandGreen" />, name: "Fire Resistant", desc: "Fire safety rating up to 120 minutes" },
    { icon: <Droplets className="w-6 h-6 text-brandGreen" />, name: "Weatherproof", desc: "No warping, expansion, or cracking under sun & rain" },
    { icon: <Volume2 className="w-6 h-6 text-brandGreen" />, name: "Noise Reduction", desc: "Acoustic honeycomb insulation core" },
    { icon: <CheckCircle className="w-6 h-6 text-brandGreen" />, name: "Termite Proof", desc: "100% metal structure guarantees zero pest damage" },
    { icon: <Hammer className="w-6 h-6 text-brandGreen" />, name: "Heavy Duty Frame", desc: "Double-reinforced 2mm thick structural door frame" },
  ];

  const processSteps = [
    { title: "Consultation", desc: "Discuss layout, designs, and security demands" },
    { title: "Site Measurement", desc: "Free home visit to lock frame dimensions" },
    { title: "Design Selection", desc: "Finalize texture, color, and smart handle accessories" },
    { title: "Bespoke Production", desc: "Laser cutting and vacuum thermo-transfer texturing" },
    { title: "Quality Check", desc: "Multi-point testing for locking alignment & finish" },
    { title: "Installation", desc: "2-4 hours professional anchoring and frame sealing" }
  ];

  const compatibleLocks = [
    { name: "Godrej", text: "Trusted Indian heritage lock system" },
    { name: "Yale", text: "Global leader in smart access & biometric locks" },
    { name: "Dormakaba", text: "High-end European mechanical keyways" },
    { name: "Europa", text: "Heavy duty anti-theft deadbolts" }
  ];

  // Active review tab index
  const [activeReview, setActiveReview] = useState(0);

  return (
    <div className="relative">
      
      {/* 1. Cinematic Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black select-none"
        style={{
          backgroundImage: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(127,175,44,0.1), transparent 50%)`
        }}
      >
        {/* Parallax Background Image */}
        <div className="absolute inset-0 opacity-100">
          <img 
            src="/bright_hero_bg.png" 
            alt="Luxury Entrance" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/90 z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandGreen/10 border border-brandGreen/20 text-brandGreen font-poppins text-[10px] font-bold uppercase tracking-wider self-start"
            >
              <Sparkles className="w-3.5 h-3.5" /> Strong • Secure • Stylish
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight"
            >
              Uncompromising <span className="text-gradient-green">Security</span> For Your Luxury Home.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-inter text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed"
            >
              Premium steel entrance doors, wood-finish designer doors, and casement windows. Engineered for Chennai's climate and built to withstand any impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <Link
                to="/products"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-sm font-bold shadow-lg shadow-brandGreen/20 hover:shadow-glow-green hover:-translate-y-0.5 transition-all"
              >
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/quote-calculator"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-poppins text-sm font-bold border border-white/10 hover:border-brandLime/50 transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+919176998889"
                className="flex lg:hidden items-center gap-2 px-8 py-4 rounded-xl bg-brandMagenta hover:bg-brandMagenta/90 text-white font-poppins text-sm font-bold"
              >
                <PhoneCall className="w-4 h-4" /> Call Now
              </a>
            </motion.div>

            {/* Quick trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5 font-inter text-xs text-gray-500"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brandGreen" />
                <span>10-Year Rust Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Hammer className="w-4 h-4 text-brandGreen" />
                <span>Free Site Measurement</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Glass Card with statistics summary */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandGreen/10 rounded-full blur-2xl" />
              
              <h3 className="font-montserrat text-lg font-bold text-white mb-4">
                Corporate Showroom
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4.5 h-4.5 text-brandGreen flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-poppins text-xs font-semibold text-gray-200">Address Location</h5>
                    <p className="font-inter text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                      Ambattur, Kallikuppam Road, Venkatapuram, Chennai
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-4.5 h-4.5 text-brandLime flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-poppins text-xs font-semibold text-gray-200">Business Hours</h5>
                    <p className="font-inter text-[11px] text-gray-400 mt-0.5">
                      Monday - Saturday: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-4.5 h-4.5 text-brandMagenta flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-poppins text-xs font-semibold text-gray-200">Direct Support</h5>
                    <p className="font-inter text-[11px] text-gray-400 mt-0.5">
                      pokkishamdoors@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="block font-montserrat text-2xl font-black text-brandGreen">1000+</span>
                  <span className="block font-poppins text-[9px] text-gray-500 font-bold uppercase tracking-wider">Happy Homes Secured</span>
                </div>
                <Link 
                  to="/about"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-brandGreen flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60">
          <span className="font-poppins text-[9px] text-gray-400 tracking-[0.2em] font-medium uppercase">Scroll</span>
          <div className="w-[18px] h-7 rounded-full border border-white/20 p-1 flex justify-center">
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-[2px] h-[6px] rounded-full bg-brandGreen"
            />
          </div>
        </div>

      </section>

      {/* 2. Scroll Counters Statistics Section */}
      <section className="bg-brandDark/50 py-16 border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter value={10} label="Years Experience" suffix="+" />
          <AnimatedCounter value={1000} label="Happy Customers" suffix="+" />
          <AnimatedCounter value={500} label="Door Designs" suffix="+" />
          <AnimatedCounter value={98} label="Customer Satisfaction" suffix="%" />
        </div>
      </section>

      {/* 3. Security Badges / Core Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
              Unmatched Specifications
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-white">
              Engineered for Maximum Protection
            </h2>
            <p className="font-inter text-xs text-gray-400 mt-4 leading-relaxed">
              Every Pokkisham Steel Door is manufactured using high-tensile galvanized steel and premium coatings to deliver long life and high architectural value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityBadges.map((badge, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brandGreen/25 hover:bg-white/[0.04] transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 bg-brandGreen/5 border border-brandGreen/10 rounded-xl flex-shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <h4 className="font-montserrat text-sm font-bold text-white mb-2 tracking-wide">{badge.name}</h4>
                  <p className="font-inter text-[11px] text-gray-400 leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Before & After Comparison Slider */}
      <section className="py-20 bg-brandDark/30 border-t border-b border-white/5 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-poppins font-bold text-brandMagenta tracking-widest uppercase block mb-3">
              Steel vs Wood
            </span>
            <h2 className="font-montserrat text-3xl font-extrabold text-white">
              Visualize The Transformation
            </h2>
            <p className="font-inter text-xs text-gray-400 mt-4 max-w-lg mx-auto">
              Drag the interactive slider below to see the difference between standard wooden doors prone to warping and a reinforced Pokkisham Steel Door.
            </p>
          </div>
          
          {/* Before After Slider Component */}
          <BeforeAfterSlider />

          <div className="text-center mt-8">
            <Link 
              to="/compare" 
              className="inline-flex items-center gap-1.5 font-poppins text-xs font-bold text-brandGreen hover:underline"
            >
              View Full Comparison Matrix <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Highlight Products Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
                Curated Showcase
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-white">
                Our Signature Designs
              </h2>
            </div>
            <Link 
              to="/products"
              className="flex items-center gap-1.5 font-poppins text-xs font-bold text-brandLime hover:text-brandGreen hover:underline self-start md:self-end"
            >
              Browse Catalog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((prod) => (
              <DoorCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lock Compatibility Brands Section */}
      <section className="py-16 bg-brandDark/40 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[9px] font-poppins font-bold text-gray-500 tracking-[0.2em] uppercase block mb-2">
              Maximum Integration
            </span>
            <h4 className="font-montserrat text-sm font-bold text-white tracking-wider">
              Compatible Smart Lock Brands
            </h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {compatibleLocks.map((lock, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-brandMagenta/30 hover:bg-white/[0.02] text-center transition-all duration-300 group"
              >
                <span className="block font-montserrat text-lg font-extrabold text-gray-300 group-hover:text-brandMagenta transition-colors">
                  {lock.name}
                </span>
                <span className="block font-inter text-[10px] text-gray-500 mt-1 leading-normal">
                  {lock.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Corporate Process Timeline */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
              How We Work
            </span>
            <h2 className="font-montserrat text-3xl font-extrabold text-white">
              Our Professional Process
            </h2>
            <p className="font-inter text-xs text-gray-400 mt-4 leading-relaxed">
              From site survey to complete installation, we ensure your transition to security is seamless and professional.
            </p>
          </div>

          <div className="relative border-l-2 border-white/10 max-w-3xl mx-auto pl-8 space-y-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-brandDark border-2 border-brandGreen flex items-center justify-center text-[10px] font-bold text-brandGreen group-hover:bg-brandGreen group-hover:text-white transition-colors duration-300">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-montserrat text-sm font-bold text-white mb-2 tracking-wide group-hover:text-brandGreen transition-colors">
                    {step.title}
                  </h4>
                  <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Google Review Testimonials Slider */}
      <section className="py-24 bg-brandDark/20 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
              Customer Feedback
            </span>
            <h2 className="font-montserrat text-3xl font-extrabold text-white">
              Trusted by 1000+ Families
            </h2>
          </div>

          {/* Testimonial slider / tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Review Cards list */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {testimonials.map((test, idx) => (
                <div 
                  key={test.id}
                  onClick={() => setActiveReview(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    idx === activeReview 
                      ? 'bg-brandDark/80 border-brandGreen shadow-premium' 
                      : 'bg-white/[0.01] border-white/5 hover:border-white/10 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={test.avatar} 
                        alt={test.name} 
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <h4 className="font-poppins text-xs font-bold text-white">{test.name}</h4>
                        <span className="font-inter text-[10px] text-gray-500">{test.location}</span>
                      </div>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-sm">&#9733;</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="font-inter text-xs text-gray-300 leading-relaxed italic">
                    \"{test.text}\"
                  </p>
                  
                  <span className="block font-inter text-[9px] text-gray-500 text-right mt-3">
                    {test.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Google Rating badge summary on right */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
              <span className="block font-montserrat text-4xl font-black text-white">4.9</span>
              <div className="flex items-center gap-0.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-500 text-lg">&#9733;</span>
                ))}
              </div>
              <span className="block font-poppins text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-6">
                Google Rating Summary
              </span>
              <a 
                href="https://maps.app.goo.gl/uX3Qd2x9sB1uJg5R8"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-poppins text-xs font-semibold transition-colors"
              >
                Write Review
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Premium Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-brandDark to-brandGreen/10 border-t border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brandLime via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Secure Your Home?
          </h2>
          <p className="font-inter text-xs text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Get in touch with our experts today. We provide professional advice, free catalog showcases, and accurate site estimation services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919176998889"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-brandMagenta hover:bg-brandMagenta-dark text-white font-poppins text-xs font-bold hover:shadow-glow-magenta transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" /> Call +91 9176998889
            </a>
            <a
              href="https://wa.me/919176998889"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-poppins text-xs font-bold hover:shadow-lg transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" /> Message WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
