import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const values = [
    {
      icon: <Award className="w-6 h-6 text-brandGreen" />,
      title: "Unyielding Quality",
      desc: "We use only G90 structural galvanized steel sheets and premium thermo-transfer print foils to ensure maximum lifetime value."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brandLime" />,
      title: "Advanced Security",
      desc: "Our lock mechanisms and reinforced frames are design-tested to withstand heavy impact forces and lock-tampering attempts."
    },
    {
      icon: <Users className="w-6 h-6 text-brandMagenta" />,
      title: "Customer First",
      desc: "We believe in establishing lifetime relationships by delivering prompt site surveys, free estimations, and quick support response."
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-24 pb-20 text-white overflow-hidden relative"
    >
      
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brandGreen/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brandMagenta/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center lg:text-left">
        <motion.div variants={itemVariants}>
          <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
            Our Heritage
          </span>
          <h1 className="font-montserrat text-4xl sm:text-5xl font-black mb-4">
            About <span className="text-gradient-green">Pokkisham</span>
          </h1>
          <p className="font-inter text-xs text-gray-400 max-w-xl leading-relaxed">
            South India's premier manufacturer and dealer of heavy-duty, high-security steel doors and windows.
          </p>
        </motion.div>
      </div>

      {/* Company Story & Image */}
      <section id="company" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 scroll-mt-28">
        <motion.div 
          variants={itemVariants} 
          className="lg:col-span-6 space-y-6"
        >
          <h2 className="font-montserrat text-2xl font-bold text-gradient-green">
            Redefining Security and Elegance
          </h2>
          
          <p className="font-inter text-xs text-gray-300 leading-relaxed">
            Founded in Chennai, **Pokkisham Steel Doors** was born from a simple mission: to replace vulnerable, high-maintenance wooden doors with modern, indestructible steel solutions that preserve the warmth and premium look of wood. Over the past 10 years, we have grown to become a trusted brand serving Chennai, Tamil Nadu, and South India.
          </p>
          
          <p className="font-inter text-xs text-gray-300 leading-relaxed">
            Our products combine deep-drawn cold-rolled steel frameworks with high-temperature vacuum thermo-transfer technologies, delivering the realistic, textured grain of Teak and Walnut wood. Unlike real wood, our steel doors do not shrink, warp, rot, or support termites, offering life-long, maintenance-free protection.
          </p>

          <p className="font-inter text-xs text-gray-300 leading-relaxed font-semibold text-brandLime">
            With over 1,000 satisfied homes secured, we continue to engineer peace of mind for every family.
          </p>
        </motion.div>

        {/* Story Illustration Image */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-6 w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-premium relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="block font-poppins text-xs font-bold text-white uppercase tracking-wider">Showroom Quality</span>
            <span className="block font-inter text-[10px] text-gray-400 mt-1">Premium finishes designed for luxury interiors.</span>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-brandDark/40 border-t border-b border-white/5 py-20 mb-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-brandGreen/20 transition-all flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-brandGreen/10 border border-brandGreen/20 flex items-center justify-center text-brandGreen">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat text-lg font-bold text-white tracking-wide">
              Our Mission
            </h3>
            <p className="font-inter text-xs text-gray-300 leading-relaxed">
              To engineer and deliver high-security steel doors and windows that offer absolute protection, elegant designs, and lifetime durability, ensuring our customers have peace of mind without compromising on architectural style.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-brandMagenta/20 transition-all flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-brandMagenta/10 border border-brandMagenta/20 flex items-center justify-center text-brandMagenta">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat text-lg font-bold text-white tracking-wide">
              Our Vision
            </h3>
            <p className="font-inter text-xs text-gray-300 leading-relaxed">
              To be the most trusted and preferred luxury steel door brand in South India, continuously innovating in security hardware, weather-resistant surfaces, and aesthetic wood grain textures for high-end modern homes.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Values & Quality Promise */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-6 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div variants={itemVariants}>
            <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
              Core Principles
            </span>
            <h2 className="font-montserrat text-3xl font-extrabold">
              Our Brand Values
            </h2>
            <p className="font-inter text-xs text-gray-400 mt-4 leading-relaxed">
              The foundation of how we manufacture, install, and support our premium security catalog.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brandLime/25 hover:bg-white/[0.03] transition-all flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                {val.icon}
              </div>
              <div>
                <h4 className="font-montserrat text-sm font-bold text-white mb-2 tracking-wide">{val.title}</h4>
                <p className="font-inter text-[11px] text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
