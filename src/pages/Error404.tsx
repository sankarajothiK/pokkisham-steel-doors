import { Link } from 'react-router-dom';
import { ShieldAlert, Compass } from 'lucide-react';

export default function Error404() {
  return (
    <div className="pt-24 pb-20 text-white min-h-screen flex items-center justify-center relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-brandMagenta/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-md w-full mx-auto px-6 text-center space-y-6">
        <div className="inline-flex p-4 rounded-3xl bg-brandMagenta/10 border border-brandMagenta/20 text-brandMagenta">
          <ShieldAlert className="w-12 h-12" />
        </div>
        
        <h1 className="font-montserrat text-4xl font-black text-white">404</h1>
        <h3 className="font-poppins text-sm font-bold text-gray-300 uppercase tracking-wider">Page Not Found</h3>
        
        <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
          The security layout for this page does not exist. It may have been relocated or deleted.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="py-3 px-6 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all"
          >
            Go to Home
          </Link>
          <Link
            to="/door-finder"
            className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white font-poppins text-xs font-semibold border border-white/10 transition-colors flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4" /> Door Finder
          </Link>
        </div>
      </div>
    </div>
  );
}
