export interface Product {
  id: string;
  title: string;
  category: 'entrance' | 'luxury' | 'wood-finish' | 'designer' | 'commercial' | 'windows' | 'custom';
  shortDesc: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  specs: {
    material: string;
    thickness: string;
    lockSystem: string;
    availableSizes: string[];
    availableColors: { name: string; hex: string }[];
    applications: string;
    warranty: string;
  };
  customizationOptions: string[];
  priceRange: string;
}

export const products: Product[] = [
  {
    id: "royal-emperor-entrance",
    title: "Royal Emperor Steel Entrance Door",
    category: "entrance",
    shortDesc: "Majestic high-security double-leaf main entrance door with premium copper finish.",
    description: "Engineered for grand entrances, the Royal Emperor combines unmatched physical strength with timeless luxury. Designed specifically for villas and high-end residences in Chennai, it features a heavy-duty cold-rolled steel framework, anti-pry lock mechanisms, and multi-point security bolts that engage in 4 directions.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "12-Point Multi-Lock System",
      "1.5mm Cold-Rolled Galvanized Steel",
      "Fire-Resistant Honeycomb Core (90 Mins)",
      "Weatherproof UV-Resistant Coating",
      "Termite & Pest Resistant Construction"
    ],
    specs: {
      material: "High-grade Galvanized Steel (G90 Sheet)",
      thickness: "70mm Door Leaf, 1.5mm Sheet thickness, 2.0mm Frame",
      lockSystem: "Yale/Godrej Multi-point Smart Lock Compatible (12 security pins)",
      availableSizes: ["3.5ft x 7ft", "4ft x 8ft", "5ft x 8ft (Double Door)", "Customizable"],
      availableColors: [
        { name: "Antique Copper", hex: "#783f04" },
        { name: "Teak Wood Finish", hex: "#8a5a36" },
        { name: "Matte Charcoal", hex: "#2b2b2b" }
      ],
      applications: "Main Entrance, Villa Entry, Independent House Main Door",
      warranty: "10 Years Structural & Rust Warranty"
    },
    customizationOptions: [
      "Biometric fingerprint + PIN card access",
      "Custom brass handles (1.2m vertical pulls)",
      "Integrated wide-angle smart peephole camera",
      "Double bore deadbolts"
    ],
    priceRange: "₹45,000 - ₹95,000"
  },
  {
    id: "luxury-glassmorphic-grand",
    title: "Luxera Glass-Embedded Steel Door",
    category: "luxury",
    shortDesc: "Contemporary safety glass integrated design with premium brushed finishes.",
    description: "Designed for premium modern architecture. Incorporates triple-glazed frosted safety glass within an ultra-reinforced steel frame. Delivers natural daylight into your foyer without compromising an ounce of privacy or security.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Triple Glazed Frosted Safety Glass",
      "Sound Insulation up to 42 dB",
      "Internal Steel Rib Reinforcements",
      "Hidden Heavy Duty Hinges",
      "Fingerprint Biometric Lock System"
    ],
    specs: {
      material: "Anti-Corrosive Electro-Galvanized Steel",
      thickness: "80mm Leaf, 1.8mm Frame Thickness",
      lockSystem: "Dormakaba Premium Smart Lock (Fingerprint, Card, App control)",
      availableSizes: ["3.5ft x 7ft", "4ft x 8ft", "Custom Sizes"],
      availableColors: [
        { name: "Obsidian Black", hex: "#121212" },
        { name: "Titanium Silver", hex: "#8e8e93" },
        { name: "Champagne Gold", hex: "#cfb53b" }
      ],
      applications: "Modern Villa Entrance, Luxury Penthouse Entrance",
      warranty: "15 Years Structure & Glass Seals Warranty"
    },
    customizationOptions: [
      "One-way mirror glass",
      "Brushed brass handles with integrated LED indicator",
      "Premium magnetic latch mechanism",
      "Smart Home connection (WiFi Zigbee)"
    ],
    priceRange: "₹65,000 - ₹1,20,000"
  },
  {
    id: "teak-wood-finish-prime",
    title: "Teak Wood-Finish Steel Door",
    category: "wood-finish",
    shortDesc: "Authentic look of natural teak wood combined with the absolute strength of steel.",
    description: "A perfect blend of traditional South Indian aesthetics and modern engineering. Features a 3D textured wood grain finish transferred through a high-temperature vacuum system onto a zinc-galvanized steel panel. Will never warp, rot, crack, or require polishing like real wood.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Zero Maintenance Wood Texture",
      "Rust & Corrosion Resistant Coating",
      "Termite & Borer Proof Guarantee",
      "4-Step Heavy Duty Weather stripping",
      "Reinforced Lock Pocket"
    ],
    specs: {
      material: "Thermo-transferred Epoxy Galvanized Steel",
      thickness: "70mm Leaf, 1.2mm Panel, 1.8mm Frame",
      lockSystem: "Yale High-Security Deadbolt + Mortise Lock Combo",
      availableSizes: ["3ft x 7ft", "3.28ft x 7ft", "3.5ft x 7ft", "Custom Sizes"],
      availableColors: [
        { name: "Premium Teak Finish", hex: "#7a461c" },
        { name: "Rich Walnut", hex: "#4c2c15" },
        { name: "African Rosewood", hex: "#5c1e19" }
      ],
      applications: "Apartments, Residential Main Door, Premium Bedrooms",
      warranty: "10 Years Coating & Structural Warranty"
    },
    customizationOptions: [
      "Classic brass architrave frame overlays",
      "Decorative traditional brass cladding details",
      "Integrated mechanical heavy brass door knocker",
      "Dual cylinder double security locks"
    ],
    priceRange: "₹35,000 - ₹75,000"
  },
  {
    id: "modernist-designer-door",
    title: "Vanguard Modernist Designer Door",
    category: "designer",
    shortDesc: "Geometric modern embossed lines with premium powder coated matte finishes.",
    description: "Designed for trend-setting contemporary homes. The Vanguard series utilizes laser-embossed geometric relief patterns on ultra-flat steel sheets, combined with high-contrast metallic details. Features integrated handles and smart keyless entry.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Architectural Grade Embossed Patterns",
      "Textured Powder Coated Scratch Resistant",
      "Double Magnetic Perimeter Seals",
      "Euro-Profile High-Security Cylinder",
      "Hidden Hinges with 3D Adjustment"
    ],
    specs: {
      material: "Precision CNC Laser cut Steel Sheets",
      thickness: "75mm Leaf, 1.5mm Sheet, 2.0mm Frame",
      lockSystem: "Yale Smart Mortise (RFID, PIN, Key, Bluetooth)",
      availableSizes: ["3.28ft x 7ft", "3.5ft x 7ft", "3.5ft x 8ft", "Custom Sizes"],
      availableColors: [
        { name: "Anthracite Gray", hex: "#374151" },
        { name: "Sleek Off-White", hex: "#f9fafb" },
        { name: "Urban Bronze", hex: "#52473b" }
      ],
      applications: "Modern Apartments, Villa Side Doors, Luxury Bedrooms",
      warranty: "12 Years Structural & Lock Warranty"
    },
    customizationOptions: [
      "LED backlit door numbers integrated in handle panel",
      "Custom line engraving pattern modifications",
      "Extended bottom drop seal (wind & dust protector)",
      "Stainless steel plate kicks"
    ],
    priceRange: "₹40,000 - ₹80,000"
  },
  {
    id: "titan-commercial-security",
    title: "Titan Heavy-Duty Commercial Door",
    category: "commercial",
    shortDesc: "UL listed fire-rated steel door with reinforced hardware for retail and corporate spaces.",
    description: "Engineered to withstand heavy foot traffic and rigorous safety standards. Ideal for offices, retail stores, banks, and utility rooms. Fully tested for fire resistance, security breach attempts, and sound dampening.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Up to 180 Mins UL Fire-Rated",
      "Heavy-Duty Panic Bar Hardware",
      "Automatic Door Closer Ready",
      "Reinforced Core for Structural Integrity",
      "Anti-Breach Blast Resistance"
    ],
    specs: {
      material: "Heavy Gauge Zinc-Coated Steel Plates",
      thickness: "50mm Leaf, 2.0mm Frame, 1.8mm Panel",
      lockSystem: "Europa Commercial Grade Mortise or Panic Bar system",
      availableSizes: ["3ft x 7ft", "4ft x 7ft", "6ft x 7ft (Double leaf)", "Custom Sizes"],
      availableColors: [
        { name: "Industrial Gray", hex: "#9ca3af" },
        { name: "Safety Red", hex: "#ef4444" },
        { name: "Clean White", hex: "#ffffff" }
      ],
      applications: "Offices, Retail, Banks, Server Rooms, Fire Exits",
      warranty: "5 Years Heavy Commercial Warranty"
    },
    customizationOptions: [
      "Panic bar crash hardware installation",
      "Custom rectangular fire-glass vision panel",
      "Kick plates in brushed stainless steel (10-inch high)",
      "Magnetic access card integration"
    ],
    priceRange: "₹25,000 - ₹60,000"
  },
  {
    id: "aurora-steel-window-system",
    title: "Aurora Premium Steel Windows",
    category: "windows",
    shortDesc: "Aesthetic heavy-duty steel casement windows with integrated security grills.",
    description: "A premium solution for modern residential windows. Eliminates the need for ugly separate security grills by combining structural steel frames with beautiful high-transmission window panes. Soundproofing and air-tight seals keep out Chennai dust and heat.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Integrated High-Tensile Security Grills",
      "Casement & Top-Hung Openings",
      "Double EPDM Rubber Air-Tight Seals",
      "Anti-Corrosion Powder Coating",
      "Triple-Glazed Acoustical Glass option"
    ],
    specs: {
      material: "Cold-Rolled Casement Steel Profiles",
      thickness: "45mm Profile depth, 1.6mm Profile wall thickness",
      lockSystem: "Multi-point Window Handle Lock",
      availableSizes: ["4ft x 4ft", "5ft x 4ft", "6ft x 5ft", "Custom Sizes"],
      availableColors: [
        { name: "Charcoal Black", hex: "#1e1e24" },
        { name: "Warm Off-White", hex: "#f7f7f7" },
        { name: "Bronze Anodized", hex: "#615c54" }
      ],
      applications: "Residential Homes, Corporate Offices, Villa Windows",
      warranty: "8 Years Structural & Seals Warranty"
    },
    customizationOptions: [
      "Built-in retractable mesh fly screens",
      "Reflective smart glass coatings",
      "Designer geometric security bar patterns",
      "Brass vintage locks and friction stays"
    ],
    priceRange: "₹18,000 - ₹45,000"
  }
];
