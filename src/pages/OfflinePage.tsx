import { WifiOff, RotateCw } from 'lucide-react';

export default function OfflinePage() {
  const checkConnection = () => {
    window.location.reload();
  };

  return (
    <div className="pt-24 pb-20 text-white min-h-screen flex items-center justify-center relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-brandGreen/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-md w-full mx-auto px-6 text-center space-y-6">
        <div className="inline-flex p-4 rounded-3xl bg-brandGreen/10 border border-brandGreen/20 text-brandGreen">
          <WifiOff className="w-12 h-12" />
        </div>
        
        <h1 className="font-montserrat text-3xl font-black text-white">Connection Lost</h1>
        <h3 className="font-poppins text-xs font-bold text-gray-300 uppercase tracking-wider">You are offline</h3>
        
        <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
          Please check your internet connection or Wi-Fi router settings. Pokkisham Steel Doors showroom will load once connection returns.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={checkConnection}
            className="py-3 px-8 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <RotateCw className="w-4 h-4" /> Retry Connection
          </button>
        </div>
      </div>
    </div>
  );
}
