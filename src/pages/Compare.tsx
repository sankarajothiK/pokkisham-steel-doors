import { Link } from 'react-router-dom';
import { ShieldCheck, Flame, AlertCircle } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  desc: string;
  steel: {
    text: string;
    advantage: boolean;
  };
  wood: {
    text: string;
    advantage: boolean;
  };
}

export default function Compare() {
  const comparisonData: ComparisonRow[] = [
    {
      feature: "Security & Multi-Lock",
      desc: "Protection against physical force and lock tampering.",
      steel: {
        text: "Extreme. Heavy gauge galvanized steel with integrated 12-point multi-locking bolts securing in all 4 frame directions.",
        advantage: true
      },
      wood: {
        text: "Moderate. Standard single-point deadbolts anchored into soft wood, highly vulnerable to crowbar leverage.",
        advantage: false
      }
    },
    {
      feature: "Periodic Maintenance",
      desc: "Required costs and activities over time.",
      steel: {
        text: "Zero. High-durability coatings require only occasional wiping with a damp cloth. Never needs painting.",
        advantage: true
      },
      wood: {
        text: "High. Needs periodic varnishing, polishing, or repainting every 2-3 years to prevent moisture rot and fading.",
        advantage: false
      }
    },
    {
      feature: "Warping & Swelling",
      desc: "Structural shifts during seasonal monsoon changes.",
      steel: {
        text: "None. Metal structure is completely stable and impervious to temperature and humidity variations.",
        advantage: true
      },
      wood: {
        text: "Severe. Tends to swell and warp in high humidity, causing difficulties in opening, closing, or locking.",
        advantage: false
      }
    },
    {
      feature: "Termite & Pest Protection",
      desc: "Vulnerability to biological pests.",
      steel: {
        text: "100% Proof. Inorganic materials are completely immune to termites, wood borers, and mold.",
        advantage: true
      },
      wood: {
        text: "Vulnerable. Highly susceptible to termite attacks, requiring expensive chemical treatments.",
        advantage: false
      }
    },
    {
      feature: "Fire Resistance",
      desc: "Ability to contain fire spread.",
      steel: {
        text: "Excellent. Rated up to 120-180 minutes of fire containment, utilizing non-combustible internal cores.",
        advantage: true
      },
      wood: {
        text: "Highly Flammable. Wood catches fire instantly, facilitating the spread of smoke and heat.",
        advantage: false
      }
    },
    {
      feature: "Lifespan",
      desc: "Expected service years under typical conditions.",
      steel: {
        text: "Lifetime. Rust-free structural warranty ensures the door lasts as long as the building foundation.",
        advantage: true
      },
      wood: {
        text: "10 - 15 Years. Gradual decomposition, cracking, and rot limit the lifetime of real wood doors.",
        advantage: false
      }
    },
    {
      feature: "Initial Cost",
      desc: "Upfront pricing comparison.",
      steel: {
        text: "Highly Competitive. Offers incredible structural security value, starting from only ₹25,000.",
        advantage: true
      },
      wood: {
        text: "Very High. Premium real teak wood main entrance doors cost up to ₹1,50,000+ plus frames and lock hardware.",
        advantage: false
      }
    },
    {
      feature: "Appearance & Grains",
      desc: "Aesthetic look and texture.",
      steel: {
        text: "Bespoke. Highly realistic wood-grain textures transferred using vacuum thermo-foils, giving teak looks.",
        advantage: true
      },
      wood: {
        text: "Natural. Beautiful organic grain, but susceptible to fading, splitting, scratching, and cracking.",
        advantage: false
      }
    }
  ];

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative">
      
      {/* Background glow radial */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[300px] bg-brandGreen/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-poppins font-bold text-brandMagenta tracking-widest uppercase block mb-3">
            Comparison Guide
          </span>
          <h1 className="font-montserrat text-4xl font-extrabold mb-4">
            Steel Doors <span className="text-gradient-green">vs</span> Wooden Doors
          </h1>
          <p className="font-inter text-xs text-gray-400">
            A detailed, objective side-by-side analysis to help you make an informed decision for your home's main entrance.
          </p>
        </div>

        {/* Matrix Comparison Table */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-premium border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px] font-inter text-xs">
              
              <thead>
                <tr className="bg-brandDark/80 border-b border-white/10">
                  <th className="p-6 font-montserrat text-xs font-bold uppercase tracking-wider text-gray-400 w-1/4">Criteria</th>
                  <th className="p-6 font-montserrat text-xs font-bold uppercase tracking-wider text-brandGreen w-3/8 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Pokkisham Steel Doors
                  </th>
                  <th className="p-6 font-montserrat text-xs font-bold uppercase tracking-wider text-brandMagenta w-3/8">
                    Traditional Wood Doors
                  </th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-white/5 bg-brandDark/20">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    
                    {/* Feature label */}
                    <td className="p-6 border-r border-white/5">
                      <span className="block font-poppins text-xs font-bold text-white mb-1">
                        {row.feature}
                      </span>
                      <span className="block font-inter text-[10px] text-gray-500 leading-normal">
                        {row.desc}
                      </span>
                    </td>

                    {/* Steel Details */}
                    <td className="p-6 border-r border-white/5 bg-brandGreen/5">
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-brandGreen flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 leading-relaxed font-medium">
                          {row.steel.text}
                        </span>
                      </div>
                    </td>

                    {/* Wood Details */}
                    <td className="p-6 bg-brandMagenta/5">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-brandMagenta flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 leading-relaxed">
                          {row.wood.text}
                        </span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Conclusion / Disclaimer Callout */}
        <div className="mt-12 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <Flame className="w-5 h-5 text-brandLime flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-poppins text-xs font-bold text-white mb-1">The Verdict is Clear</h5>
              <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                While real wood has organic heritage appeal, Pokkisham Steel Doors deliver superior security, zero maintenance, structural longevity, and complete resistance to fire and pests at a fraction of the cost.
              </p>
            </div>
          </div>
          <Link
            to="/quote-calculator"
            className="py-3 px-6 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-white font-poppins text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0"
          >
            Calculate Quote
          </Link>
        </div>

      </div>

    </div>
  );
}
