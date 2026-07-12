import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import DoorCard from '../components/DoorCard';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Read URL query parameter for category routing
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const categories = [
    { value: "all", label: "All Products" },
    { value: "entrance", label: "Entrance Doors" },
    { value: "luxury", label: "Luxury Glass Doors" },
    { value: "wood-finish", label: "Wood Finish" },
    { value: "designer", label: "Designer" },
    { value: "commercial", label: "Commercial" },
    { value: "windows", label: "Steel Windows" }
  ];

  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
    if (val === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', val);
    }
    setSearchParams(searchParams);
  };

  // Filter products based on search query and category
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    
    const searchString = `${prod.title} ${prod.shortDesc} ${prod.description} ${prod.category} ${prod.specs.applications}`.toLowerCase();
    
    // Support synonyms or tag checks
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-24 pb-20 text-white min-h-screen relative">
      
      {/* Background glow radial */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brandGreen/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-poppins font-bold text-brandGreen tracking-widest uppercase block mb-3">
            Product Catalog
          </span>
          <h1 className="font-montserrat text-4xl font-extrabold mb-4">
            Security <span className="text-gradient-green">Meets</span> Design
          </h1>
          <p className="font-inter text-xs text-gray-400">
            Explore our premium collections of steel doors, wood finish finishes, windows, and custom structural doorframe integrations.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-panel p-6 rounded-3xl mb-12 flex flex-col md:flex-row items-center gap-4 justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search e.g. Wood Finish, Luxury, Modern, Double Door..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-brandDark/50 border border-white/10 hover:border-brandGreen/40 focus:border-brandGreen focus:outline-none rounded-2xl font-inter text-xs placeholder:text-gray-500 text-white transition-colors"
            />
          </div>

          {/* Active Filter Title */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-poppins font-bold text-gray-500 tracking-wider uppercase">
            <SlidersHorizontal className="w-4 h-4 text-brandLime" /> Found {filteredProducts.length} results
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 hide-scrollbar max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-5 py-2.5 rounded-full font-poppins text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.value
                  ? 'bg-brandGreen border-brandLime text-white shadow-glow-green'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((prod) => (
              <motion.div key={prod.id} variants={itemVariants}>
                <DoorCard product={prod} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white/[0.01] border border-white/5 rounded-3xl p-8 max-w-md mx-auto">
            <span className="block font-poppins text-xs font-bold text-brandMagenta tracking-wider uppercase mb-2">
              No results found
            </span>
            <p className="font-inter text-xs text-gray-500 leading-relaxed mb-6">
              We couldn't find any products matching your active filters. Try checking spelling or resetting search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
              className="py-2.5 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-poppins text-xs font-semibold hover:bg-white/10"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
