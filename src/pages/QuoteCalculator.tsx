import { useState, useEffect } from 'react';
import { Calculator, MessageSquare, Check } from 'lucide-react';
import { products } from '../data/products';
import SuccessModal from '../components/SuccessModal';

export default function QuoteCalculator() {
  const [selectedDoorId, setSelectedDoorId] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('3.5ft x 7ft');
  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');
  
  const [accessories, setAccessories] = useState<string[]>([]);
  const [totalEstimate, setTotalEstimate] = useState(0);

  // Success Modal
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const accessoryOptions = [
    { id: "yale-smart", name: "Yale Biometric Smart Lock (Fingerprint, PIN, App)", price: 15000 },
    { id: "godrej-multi", name: "Godrej Multi-Point Mechanical Deadbolt Lock", price: 6000 },
    { id: "heavy-hinges", name: "Heavy Duty Concealed 3D Adjustable Hinges", price: 2000 },
    { id: "door-closer", name: "Automatic Heavy Hydraulic Door Closer", price: 3000 },
    { id: "smart-peephole", name: "Wide-Angle HD Digital Peephole Camera Screen", price: 5000 }
  ];

  // Base price extraction (takes lower range value e.g. 45000 from "₹45,000 - ₹95,000")
  const getSelectedDoorBasePrice = (): number => {
    const door = products.find(p => p.id === selectedDoorId);
    if (!door) return 0;
    const priceStr = door.priceRange;
    const cleanNum = priceStr.replace(/[^0-9,]/g, '').split(',')[0];
    const basePrice = parseInt(cleanNum) || 30000;
    return basePrice;
  };

  useEffect(() => {
    const basePrice = getSelectedDoorBasePrice();
    const accessoriesPrice = accessories.reduce((acc, currentId) => {
      const option = accessoryOptions.find(o => o.id === currentId);
      return acc + (option ? option.price : 0);
    }, 0);

    const sizePremium = size === 'Custom' ? 5000 : 0;

    setTotalEstimate((basePrice + accessoriesPrice + sizePremium) * quantity);
  }, [selectedDoorId, quantity, size, accessories]);

  const handleAccessoryToggle = (id: string) => {
    setAccessories(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const selectedDoor = products.find(p => p.id === selectedDoorId);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format accessories text
    const accText = accessories.length > 0 
      ? accessories.map(id => accessoryOptions.find(o => o.id === id)?.name).join(', ')
      : 'None';

    const finalSize = size === 'Custom' 
      ? `Custom (${customWidth} W x ${customHeight} H)` 
      : size;

    const message = `Hello Pokkisham Steel Doors,\nI would like to request a quote based on my customized configuration.\n\nProduct Selected: ${selectedDoor?.title || ''}\nQuantity: ${quantity}\nSize Preference: ${finalSize}\nAccessories: ${accText}\nEstimated Price: ₹${totalEstimate.toLocaleString('en-IN')}\n\nPlease contact me.\nThank You.`;

    const url = `https://wa.me/919176998889?text=${encodeURIComponent(message)}`;

    setIsSuccessOpen(true);

    setTimeout(() => {
      window.open(url, '_blank');
      setIsSuccessOpen(false);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative">
      
      {/* Success alert overlay */}
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />

      {/* Background glow radial */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brandGreen/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
            Instant Estimate
          </span>
          <h1 className="font-montserrat text-4xl font-extrabold mb-4">
            Quote <span className="text-gradient-green">Calculator</span>
          </h1>
          <p className="font-inter text-xs text-gray-400">
            Configure your door leaf specifications, locks, accessories, and quantities to receive an instant pre-filled WhatsApp quote request.
          </p>
        </div>

        {/* Configuration Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Settings form Column (Left) */}
          <form onSubmit={handleWhatsAppRedirect} className="lg:col-span-7 space-y-6">
            
            {/* Select Door */}
            <div className="glass-panel p-6 rounded-3xl space-y-3">
              <label className="block font-poppins text-xs font-bold text-gray-300 uppercase tracking-wider">
                1. Select Door Model
              </label>
              <select
                value={selectedDoorId}
                onChange={(e) => setSelectedDoorId(e.target.value)}
                className="w-full py-3 px-4 bg-brandDark border border-white/10 hover:border-brandGreen/40 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </div>

            {/* Select Quantity & Size */}
            <div className="glass-panel p-6 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-3">
                <label className="block font-poppins text-xs font-bold text-gray-300 uppercase tracking-wider">
                  2. Quantity
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 hover:border-brandGreen/40 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block font-poppins text-xs font-bold text-gray-300 uppercase tracking-wider">
                  3. Size Preference
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full py-3 px-4 bg-brandDark border border-white/10 hover:border-brandGreen/40 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                >
                  <option value="3x7ft">Standard: 3ft x 7ft</option>
                  <option value="3.5x7ft">Standard: 3.5ft x 7ft</option>
                  <option value="4x8ft">Standard: 4ft x 8ft</option>
                  <option value="Custom">Custom Frame Size</option>
                </select>
              </div>

            </div>

            {/* Conditional Custom Size inputs */}
            {size === 'Custom' && (
              <div className="glass-panel p-6 rounded-3xl grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Width (in inches)</label>
                  <input
                    type="text"
                    placeholder="e.g. 42"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(e.target.value)}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-wider">Height (in inches)</label>
                  <input
                    type="text"
                    placeholder="e.g. 96"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(e.target.value)}
                    className="w-full py-3 px-4 bg-brandDark border border-white/10 focus:border-brandGreen focus:outline-none rounded-xl font-inter text-xs text-white"
                  />
                </div>
              </div>
            )}

            {/* Select Accessories */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <label className="block font-poppins text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                4. Premium Hardware & Accessories
              </label>
              
              <div className="space-y-2">
                {accessoryOptions.map((opt) => {
                  const isChecked = accessories.includes(opt.id);
                  return (
                    <div 
                      key={opt.id}
                      onClick={() => handleAccessoryToggle(opt.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked 
                          ? 'bg-brandGreen/5 border-brandGreen' 
                          : 'bg-white/[0.01] border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-brandGreen border-brandGreen text-white' : 'border-white/20 text-transparent'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-poppins text-xs font-medium text-gray-200">{opt.name}</span>
                      </div>
                      <span className="font-montserrat text-xs text-brandLime font-bold">+₹{opt.price.toLocaleString('en-IN')}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Submit Quote */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-sm font-bold shadow-lg shadow-brandGreen/25 hover:shadow-glow-green hover:-translate-y-0.5 transition-all"
            >
              <MessageSquare className="w-4 h-4" /> Send Quote Request to WhatsApp
            </button>

          </form>

          {/* Breakdown summary (Right) */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl space-y-6 sticky top-28">
            <h3 className="font-montserrat text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-brandGreen" /> Estimate Summary
            </h3>
            
            <div className="space-y-4 border-b border-white/5 pb-6">
              
              {/* Product row */}
              <div className="flex justify-between font-inter text-xs">
                <span className="text-gray-500">Selected Door Base Price</span>
                <span className="text-gray-200">₹{getSelectedDoorBasePrice().toLocaleString('en-IN')}</span>
              </div>

              {/* Custom Size Prem */}
              {size === 'Custom' && (
                <div className="flex justify-between font-inter text-xs">
                  <span className="text-gray-500">Custom Size Manufacture Fee</span>
                  <span className="text-gray-200">+₹5,000</span>
                </div>
              )}

              {/* Accessories list */}
              {accessories.length > 0 && (
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <span className="block font-poppins text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Hardware Details</span>
                  {accessories.map((id) => {
                    const opt = accessoryOptions.find(o => o.id === id);
                    return (
                      <div key={id} className="flex justify-between font-inter text-[11px] text-gray-400">
                        <span>{opt?.name.substring(0, 35)}...</span>
                        <span>+₹{opt?.price.toLocaleString('en-IN')}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Quantity row */}
              <div className="flex justify-between font-inter text-xs border-t border-white/5 pt-4">
                <span className="text-gray-500">Quantity</span>
                <span className="text-gray-200">x{quantity}</span>
              </div>

            </div>

            {/* Total Price display */}
            <div className="flex items-center justify-between">
              <div>
                <span className="block font-poppins text-[10px] text-gray-500 font-bold uppercase tracking-wider">Total Estimate</span>
                <span className="block font-montserrat text-2xl font-black text-brandGreen mt-1">
                  ₹{totalEstimate.toLocaleString('en-IN')}
                </span>
              </div>
              <span className="bg-brandGreen/10 text-brandGreen border border-brandGreen/25 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                GST Extra
              </span>
            </div>

            <p className="font-inter text-[10px] text-gray-500 leading-normal">
              *Disclaimer: This is a placeholder estimate calculator for budget purposes. Final quotes depend on physical site inspection, dimensions verification, and transportation charges.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
