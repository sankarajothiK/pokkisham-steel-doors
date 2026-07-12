import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, ArrowLeft, Home, Building2, Landmark, Compass, Award, Heart, Shield, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import type { Product } from '../data/products';

export default function DoorFinder() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    application: '', // 'residential' | 'commercial'
    style: '',       // 'modern' | 'traditional'
    type: '',        // 'single' | 'double' | 'window'
    color: '',       // 'wood' | 'solid'
    budget: ''       // 'standard' | 'luxury'
  });

  const totalSteps = 5;

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step <= totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetFinder = () => {
    setAnswers({
      application: '',
      style: '',
      type: '',
      color: '',
      budget: ''
    });
    setStep(1);
  };

  // Recommendation engine logic
  const getRecommendations = (): Product[] => {
    return products.filter((prod) => {
      // Step 1: Application Filter
      if (answers.application === 'commercial') {
        return prod.category === 'commercial';
      }
      
      // Step 2: Product Type casements
      if (answers.type === 'window') {
        return prod.category === 'windows';
      }

      // Step 3: Wood finish or solid
      if (answers.color === 'wood') {
        return prod.category === 'wood-finish' || prod.category === 'entrance';
      }

      if (answers.color === 'solid') {
        return prod.category === 'designer' || prod.category === 'luxury' || prod.category === 'entrance';
      }

      return true;
    }).slice(0, 3); // Return top 3 matches
  };

  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative flex items-center justify-center">
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brandGreen/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto px-6">
        
        {/* Main Card */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-premium relative overflow-hidden">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-2">
              Interactive Assistant
            </span>
            <h1 className="font-montserrat text-2xl md:text-3xl font-black text-white">
              Door Finder
            </h1>
            <p className="font-inter text-xs text-gray-400 mt-2">
              Answer 5 quick questions and our system will recommend the perfect doors for your project.
            </p>
          </div>

          {/* Progress Bar */}
          {step <= totalSteps && (
            <div className="w-full h-[3px] bg-white/5 rounded-full mb-8 relative overflow-hidden">
              <div 
                className="absolute top-0 bottom-0 left-0 bg-brandGreen transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}

          {/* Stepped Form Body */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Application */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-poppins text-sm font-semibold text-gray-300 text-center mb-6">
                    What type of property is this door for?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => { handleSelect('application', 'residential'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.application === 'residential' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <Home className="w-8 h-8 text-brandGreen" />
                      <div>
                        <span className="block font-poppins text-xs font-bold">Residential</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">Houses, Villas, Apartments</span>
                      </div>
                    </button>
                    <button
                      onClick={() => { handleSelect('application', 'commercial'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.application === 'commercial' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <Building2 className="w-8 h-8 text-brandMagenta" />
                      <div>
                        <span className="block font-poppins text-xs font-bold">Commercial</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">Offices, Factories, Retail</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Style */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-poppins text-sm font-semibold text-gray-300 text-center mb-6">
                    What aesthetic style matches your building?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => { handleSelect('style', 'modern'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.style === 'modern' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <Compass className="w-8 h-8 text-brandGreen" />
                      <div>
                        <span className="block font-poppins text-xs font-bold">Modern / Contemporary</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">Clean lines, safety glass, flush surfaces</span>
                      </div>
                    </button>
                    <button
                      onClick={() => { handleSelect('style', 'traditional'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.style === 'traditional' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <Landmark className="w-8 h-8 text-brandLime" />
                      <div>
                        <span className="block font-poppins text-xs font-bold">Traditional / Classical</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">Ornate textures, traditional wooden grains</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Product Type */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-poppins text-sm font-semibold text-gray-300 text-center mb-6">
                    What structure type are you looking for?
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['single', 'double', 'window'].map((item) => (
                      <button
                        key={item}
                        onClick={() => { handleSelect('type', item); nextStep(); }}
                        className={`p-5 rounded-2xl border text-center flex flex-col items-center gap-3 transition-all ${
                          answers.type === item ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                        }`}
                      >
                        <Shield className="w-6 h-6 text-brandGreen" />
                        <span className="block font-poppins text-[10px] font-bold capitalize">{item}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Color Preferences */}
              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-poppins text-sm font-semibold text-gray-300 text-center mb-6">
                    What color/finish preference do you have?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => { handleSelect('color', 'wood'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.color === 'wood' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <span className="w-10 h-10 rounded-full border-2 border-brandGreen flex items-center justify-center text-xs font-bold text-brandGreen">TEAK</span>
                      <div>
                        <span className="block font-poppins text-xs font-bold">Wood Grain Finishes</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">Realistic Teak, Walnut, or Rosewood</span>
                      </div>
                    </button>
                    <button
                      onClick={() => { handleSelect('color', 'solid'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.color === 'solid' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <span className="w-10 h-10 rounded-full border-2 border-brandMagenta flex items-center justify-center text-xs font-bold text-brandMagenta">GREY</span>
                      <div>
                        <span className="block font-poppins text-xs font-bold">Solid Metallic Colors</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">Matte Black, Anthracite, Titanium, Off-White</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Budget */}
              {step === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-poppins text-sm font-semibold text-gray-300 text-center mb-6">
                    What budget range suits your project?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => { handleSelect('budget', 'standard'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.budget === 'standard' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <Award className="w-8 h-8 text-brandLime" />
                      <div>
                        <span className="block font-poppins text-xs font-bold">Standard Value</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">₹25,000 - ₹50,000</span>
                      </div>
                    </button>
                    <button
                      onClick={() => { handleSelect('budget', 'luxury'); nextStep(); }}
                      className={`p-6 rounded-2xl border text-center flex flex-col items-center gap-4 transition-all ${
                        answers.budget === 'luxury' ? 'border-brandGreen bg-brandGreen/5 text-white' : 'border-white/5 bg-white/[0.01] hover:border-white/10'
                      }`}
                    >
                      <Heart className="w-8 h-8 text-brandMagenta" />
                      <div>
                        <span className="block font-poppins text-xs font-bold">Luxury Premium</span>
                        <span className="block font-inter text-[10px] text-gray-400 mt-1">₹50,000 - ₹1,20,000+</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Recommendations Page */}
              {step > totalSteps && (
                <motion.div
                  key="recommendations"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <span className="w-12 h-12 rounded-full bg-brandGreen/10 flex items-center justify-center text-brandGreen mx-auto mb-4 border border-brandGreen/20">
                      <ShieldCheck className="w-6 h-6" />
                    </span>
                    <h3 className="font-montserrat text-lg font-bold text-white mb-2">
                      Recommendations Prepared
                    </h3>
                    <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                      Based on your preferences, we recommend the following premium solutions:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[300px] overflow-y-auto px-2 py-1">
                    {getRecommendations().map((prod) => (
                      <div key={prod.id} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brandGreen/25 flex gap-4 items-center">
                        <img src={prod.image} alt={prod.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                        <div>
                          <h5 className="font-poppins text-xs font-bold text-white leading-tight">{prod.title}</h5>
                          <span className="block font-montserrat text-[10px] text-brandGreen font-medium mt-1">{prod.priceRange}</span>
                          <Link to={`/products/${prod.id}`} className="inline-flex items-center gap-1 font-poppins text-[9px] text-brandLime font-bold uppercase mt-2">
                            View details <ArrowRight className="w-2.5 h-2.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4 border-t border-white/5 pt-6">
                    <button
                      onClick={resetFinder}
                      className="flex items-center gap-1.5 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white font-poppins text-xs font-semibold border border-white/10 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Reset Assistant
                    </button>
                    <Link
                      to="/contact"
                      className="py-3 px-6 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-xs font-bold transition-all shadow-md"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Prev / Next controls footer */}
          {step <= totalSteps && (
            <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-1 font-poppins text-xs font-semibold ${
                  step === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white'
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>

              <span className="font-poppins text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Step {step} of {totalSteps}
              </span>

              <button
                onClick={nextStep}
                className="flex items-center gap-1 font-poppins text-xs font-bold text-brandGreen hover:text-brandGreen-light transition-colors"
              >
                Skip Question <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
