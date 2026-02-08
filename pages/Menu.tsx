import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ApiService } from '../services/api';
import { Product } from '../types';
import { Button } from '../components/UI/Button';
import { Loader2 } from 'lucide-react';

export const Menu: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { addToCart } = useCart();

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await ApiService.getMenu();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load menu");
      } finally {
        setLoading(false);
      }
    };
    loadMenu();
  }, []);

  const categories = ['all', 'bread', 'pastry', 'cake', 'savory'];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-bakery-900 pb-24">
      
      {/* Header */}
      <div className="relative pt-48 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-bakery-50 mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-1 bg-bakery-200 mx-auto mb-8"
          />
          <p className="text-bakery-200/80 max-w-xl mx-auto text-lg font-light">
            Handcrafted daily using traditional methods and the finest organic ingredients.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-sm uppercase tracking-widest text-xs transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-bakery-200 border-bakery-200 text-bakery-900 font-bold' 
                  : 'bg-transparent border-white/10 text-bakery-400 hover:border-bakery-200 hover:text-bakery-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-bakery-200 w-12 h-12" />
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-bakery-800 rounded-sm overflow-hidden group border border-white/5 hover:border-bakery-200/30"
                >
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors"></div>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {product.popular && (
                      <span className="absolute top-4 left-4 z-20 bg-bakery-200 text-bakery-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
                        Best Seller
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-18rem)]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-serif text-bakery-50 leading-tight group-hover:text-bakery-200 transition-colors">{product.name}</h3>
                      <span className="text-lg font-serif italic text-bakery-200">${product.price.toFixed(2)}</span>
                    </div>
                    <p className="text-bakery-100/50 text-sm mb-8 flex-grow leading-relaxed font-light">{product.description}</p>
                    <Button onClick={() => addToCart(product)} variant="outline" className="w-full py-3 text-xs">
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};