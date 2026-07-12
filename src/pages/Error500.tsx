import { Link } from 'react-router-dom';
import { Settings, RefreshCw } from 'lucide-react';

export default function Error500() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="pt-24 pb-20 text-white min-h-screen flex items-center justify-center relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-brandLime/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-md w-full mx-auto px-6 text-center space-y-6">
        <div className="inline-flex p-4 rounded-3xl bg-brandLime/10 border border-brandLime/20 text-brandLime">
          <Settings className="w-12 h-12 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        
        <h1 className="font-montserrat text-4xl font-black text-white">500</h1>
        <h3 className="font-poppins text-sm font-bold text-gray-300 uppercase tracking-wider">Internal Server Error</h3>
        
        <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
          Our digital security systems encountered an alignment problem. We are checking the locks now.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <button
            onClick={handleReload}
            className="py-3 px-6 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reload Page
          </button>
          <Link
            to="/"
            className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white font-poppins text-xs font-semibold border border-white/10 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
