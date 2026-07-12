import { ShieldCheck } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="pt-28 pb-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-6 font-inter text-xs leading-relaxed text-gray-300">
        
        <div className="border-b border-white/5 pb-4 mb-8">
          <ShieldCheck className="w-10 h-10 text-brandGreen mb-3" />
          <h1 className="font-montserrat text-3xl font-black text-white">Disclaimer</h1>
          <span className="block text-[10px] text-gray-500 font-poppins mt-1">Last Updated: July 12, 2026</span>
        </div>

        <p>
          If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at **pokkishamdoors@gmail.com**.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Information Disclaimers</h3>
        <p>
          All the information on this website - www.pokkishamsteeldoors.com - is published in good faith and for general information purpose only. Pokkisham Steel Doors does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk. Pokkisham Steel Doors will not be liable for any losses and/or damages in connection with the use of our website.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Estimate Calculations</h3>
        <p>
          Pricing values displayed on the interactive Quote Calculator and Product catalog lists represent standard estimates for budget planning. Final quotes are subjected to actual physical measurements checked by our survey technicians and custom accessory hardware configurations.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">External Links</h3>
        <p>
          From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Consent</h3>
        <p>
          By using our website, you hereby consent to our disclaimer and agree to its terms.
        </p>

      </div>
    </div>
  );
}
