import { ShieldCheck } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="pt-28 pb-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-6 font-inter text-xs leading-relaxed text-gray-300">
        
        <div className="border-b border-white/5 pb-4 mb-8">
          <ShieldCheck className="w-10 h-10 text-brandGreen mb-3" />
          <h1 className="font-montserrat text-3xl font-black text-white">Terms & Conditions</h1>
          <span className="block text-[10px] text-gray-500 font-poppins mt-1">Last Updated: July 12, 2026</span>
        </div>

        <p>
          Welcome to **Pokkisham Steel Doors**! These terms and conditions outline the rules and regulations for the use of Pokkisham Steel Doors' Website, located at www.pokkishamsteeldoors.com.
        </p>

        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Pokkisham Steel Doors if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Bespoke Product Orders</h3>
        <p>
          Since steel doors are manufactured according to individual structural frame openings and custom dimensions (site measurements), orders cannot be cancelled or refunded once production begins at our fabrication yard. We conduct physical dimensions checks prior to manufacturing.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">License & Copyright</h3>
        <p>
          Unless otherwise stated, Pokkisham Steel Doors and/or its licensors own the intellectual property rights for all material on Pokkisham Steel Doors. All intellectual property rights are reserved. You may access this from Pokkisham Steel Doors for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Removal of links from our website</h3>
        <p>
          If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Disclaimer of Liability</h3>
        <p>
          We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
        </p>

      </div>
    </div>
  );
}
