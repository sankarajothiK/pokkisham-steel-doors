import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative">
      
      {/* Background glow radial */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[300px] bg-brandGreen/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
            Got Questions?
          </span>
          <h1 className="font-montserrat text-4xl font-extrabold mb-4">
            Frequently Asked <span className="text-gradient-green">Questions</span>
          </h1>
          <p className="font-inter text-xs text-gray-400">
            Find answers to common questions about materials, lock compatibility, installation, and delivery options.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
              >
                
                {/* Accordion trigger button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-poppins text-xs font-bold text-white hover:bg-white/[0.02] focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brandGreen flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-brandGreen flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {/* Accordion Expandable Content panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 font-inter text-xs text-gray-300 leading-relaxed bg-brandDark/25">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Nudge Callout footer */}
        <div className="mt-16 text-center bg-white/[0.01] border border-white/5 rounded-2xl p-6 max-w-xl mx-auto">
          <h4 className="font-poppins text-xs font-bold text-white mb-2">Still have questions?</h4>
          <p className="font-inter text-[11px] text-gray-400 leading-relaxed mb-4">
            If you need customized specifications or structural frame alignment assessments, chat directly with our experts.
          </p>
          <a
            href="https://wa.me/919176998889"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-2 px-5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-poppins text-[10px] font-bold tracking-wide transition-colors"
          >
            Chat support on WhatsApp
          </a>
        </div>

      </div>

    </div>
  );
}
