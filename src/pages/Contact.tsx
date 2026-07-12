import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MessageSquare, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import SuccessModal from '../components/SuccessModal';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  doorType: string;
  productInterested: string;
  doorSize: string;
  quantity: string;
  budget: string;
  contactTime: string;
  message: string;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ContactFormData>();
  
  // Success Modal
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Pre-fill fields from query parameters (e.g. product title from DoorCard)
  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      setValue('productInterested', productParam);
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: ContactFormData) => {
    // Compile WhatsApp message string
    const messageTemplate = `Hello Pokkisham Steel Doors,\n\nI am interested in your products.\n\nCustomer Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\nDoor Type: ${data.doorType}\nInterested Product: ${data.productInterested}\nDoor Size: ${data.doorSize}\nQuantity: ${data.quantity}\nBudget: ${data.budget}\nPreferred Contact Time: ${data.contactTime}\nMessage: ${data.message}\n\nPlease contact me.\nThank You.`;

    const waLink = `https://wa.me/919176998889?text=${encodeURIComponent(messageTemplate)}`;

    setIsSuccessOpen(true);

    // Redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      window.open(waLink, '_blank');
      setIsSuccessOpen(false);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative">
      
      {/* Success Redirect Overlay */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />

      {/* Background glow radial */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[300px] bg-brandGreen/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
            Get In Touch
          </span>
          <h1 className="font-montserrat text-4xl font-extrabold mb-4">
            Contact <span className="text-gradient-green">Pokkisham</span>
          </h1>
          <p className="font-inter text-xs text-gray-400">
            Submit your doorframe parameters and details below to prepare your inquiry chat on WhatsApp.
          </p>
        </div>

        {/* Form and info panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Details & Map Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="font-montserrat text-lg font-bold text-white border-b border-white/5 pb-4">
                Showroom Office
              </h3>
              
              <ul className="space-y-4 font-inter text-xs text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brandGreen mt-0.5 flex-shrink-0" />
                  <span>
                    No.5, Subbammal Street, Kallikuppam Road, Venkatapuram, Ambattur, Chennai - 600053
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brandGreen flex-shrink-0" />
                  <a href="tel:+919176998889" className="hover:text-white transition-colors">
                    +91 9176998889
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brandGreen flex-shrink-0" />
                  <a href="mailto:pokkishamdoors@gmail.com" className="hover:text-white transition-colors">
                    pokkishamdoors@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brandGreen flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">Mon - Sat: 9:00 AM - 8:00 PM</span>
                    <span className="block text-gray-500">Sunday: Closed</span>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-poppins text-gray-500">
                <span>Serving Chennai & Tamil Nadu</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brandGreen" /> Verified Location</span>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <div className="h-56 rounded-2xl overflow-hidden border border-white/5 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.642878438676!2d80.15570077587786!3d13.12185208720743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52631555555555%3A0xe1c76a599b662d5!2sPokkisham%20STEEL%20DOORS!5e0!3m2!1sen!2sin!4v1720750000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pokkisham Location Map"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://maps.app.goo.gl/uX3Qd2x9sB1uJg5R8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-center rounded-xl bg-white/5 hover:bg-white/10 text-white font-poppins text-xs font-semibold border border-white/10 transition-colors"
                >
                  Open in Google Maps
                </a>
                <a
                  href="https://maps.app.goo.gl/uX3Qd2x9sB1uJg5R8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-center rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-xs font-bold transition-all shadow-md"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry form Column (Right) */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-premium">
            <h3 className="font-montserrat text-lg font-bold text-white mb-6 border-b border-white/5 pb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brandGreen" /> Lead Inquiry Form
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Customer Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    {...register("name", { required: "Name is required" })}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                  {errors.name && <span className="block text-[10px] text-brandMagenta font-medium">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 9876543210"
                    {...register("phone", { required: "Phone is required" })}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                  {errors.phone && <span className="block text-[10px] text-brandMagenta font-medium">{errors.phone.message}</span>}
                </div>
              </div>

              {/* Row 2: Email & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. customer@gmail.com"
                    {...register("email")}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">City / Location *</label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai"
                    {...register("city", { required: "City is required" })}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                  {errors.city && <span className="block text-[10px] text-brandMagenta font-medium">{errors.city.message}</span>}
                </div>
              </div>

              {/* Row 3: Door Type & Product */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Door Type</label>
                  <select
                    {...register("doorType")}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  >
                    <option value="Single Door">Single Door Frame</option>
                    <option value="Double Door">Double Door Frame</option>
                    <option value="Windows">Casement Steel Windows</option>
                    <option value="Custom Frame">Custom Frame Opening</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Product Interested</label>
                  <select
                    {...register("productInterested")}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  >
                    <option value="General Enquiry">General Consultation</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Size & Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expected Door Size</label>
                  <input
                    type="text"
                    placeholder="e.g. 3.5ft x 7ft or Custom"
                    {...register("doorSize")}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Quantity</label>
                  <input
                    type="text"
                    placeholder="e.g. 1"
                    defaultValue="1"
                    {...register("quantity")}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
              </div>

              {/* Row 5: Budget & Preferred Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expected Budget</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹35,000 - ₹50,000"
                    {...register("budget")}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Preferred Contact Time</label>
                  <input
                    type="text"
                    placeholder="e.g. Morning (10 AM - 12 PM)"
                    {...register("contactTime")}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Additional Message</label>
                <textarea
                  placeholder="Tell us about your frames or design details..."
                  rows={4}
                  {...register("message")}
                  className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-sm font-bold shadow-lg shadow-brandGreen/25 hover:shadow-glow-green hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-4.5 h-4.5" /> Send Enquiry via WhatsApp
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
