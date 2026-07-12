import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-28 pb-20 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-6 font-inter text-xs leading-relaxed text-gray-300">
        
        <div className="border-b border-white/5 pb-4 mb-8">
          <ShieldCheck className="w-10 h-10 text-brandGreen mb-3" />
          <h1 className="font-montserrat text-3xl font-black text-white">Privacy Policy</h1>
          <span className="block text-[10px] text-gray-500 font-poppins mt-1">Last Updated: July 12, 2026</span>
        </div>

        <p>
          At **Pokkisham Steel Doors** (www.pokkishamsteeldoors.com), accessible from Ambattur, Chennai, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Pokkisham Steel Doors and how we use it.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Information We Collect</h3>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. This includes details submitted via our inquiry forms (Name, phone, email, city, and door specifications) which compile WhatsApp messages.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">How We Use Your Information</h3>
        <p>
          We use the information we collect in various ways, including to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide, operate, and maintain our website and product catalog.</li>
          <li>Improve, personalize, and expand our online showroom experience.</li>
          <li>Understand and analyze how you interact with our website and recommendation tools.</li>
          <li>Develop new steel designs, lock integrations, and features.</li>
          <li>Communicate with you via WhatsApp or phone call to respond to your quote requests.</li>
        </ul>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Log Files</h3>
        <p>
          Pokkisham Steel Doors follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
        </p>

        <h3 className="font-montserrat text-sm font-bold text-white tracking-wide mt-8">Contact Us</h3>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at **pokkishamdoors@gmail.com** or call us at **+91 9176998889**.
        </p>

      </div>
    </div>
  );
}
