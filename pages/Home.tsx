import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Clock, Heart, ChevronDown } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { useCart } from '../context/CartContext';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const featuredProducts = PRODUCTS.filter(p => p.popular).slice(0, 3);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="w-full overflow-hidden bg-bakery-900">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bakery-900 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1920&q=80" 
            alt="Artisan Bread" 
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        <motion.div 
          style={{ opacity: opacityHero }}
          className="relative z-20 text-center max-w-5xl px-4 mt-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 mb-8 border border-bakery-200/30 rounded-full text-bakery-200 text-xs tracking-[0.3em] uppercase backdrop-blur-md bg-black/20">
              Est. 2024 • New York
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-bakery-50 mb-8 leading-[0.9]"
          >
            <span className="italic block text-bakery-200/90 mb-2">Artisan</span> 
            Baking
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-bakery-100/80 mb-12 max-w-xl mx-auto font-light leading-relaxed"
          >
            Experience the warmth of handcrafted sourdough and delicate pastries, baked fresh every single morning using ancient techniques.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button onClick={() => navigate('/menu')}>
              Order Now
            </Button>
            <Button variant="outline" onClick={() => navigate('/menu')}>
              Explore Menu
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Features Section - Dark Cards */}
      <section className="py-32 bg-bakery-900 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-bakery-200/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-bakery-200 font-medium tracking-[0.2em] uppercase text-xs">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-bakery-50 mt-6">The Lumière Standard</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Fresh Ingredients", desc: "We source 100% organic flour and locally grown fruits for unmatched flavor." },
              { icon: Clock, title: "Handcrafted Daily", desc: "Our bakers start at 3 AM every day to ensure your breakfast is warm and fresh." },
              { icon: Heart, title: "Made with Love", desc: "Traditional recipes passed down through generations, baked with modern passion." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="text-center p-10 rounded-sm bg-bakery-800/50 border border-white/5 hover:border-bakery-200/30 transition-colors duration-500 group"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-bakery-200 mx-auto mb-8 bg-bakery-900 border border-white/5 group-hover:bg-bakery-200 group-hover:text-bakery-900 transition-all duration-500">
                  <feature.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-bakery-50 mb-4">{feature.title}</h3>
                <p className="text-bakery-100/60 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Divider */}
      <div className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div style={{ y: useTransform(scrollY, [800, 2000], [-100, 100]) }} className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80" className="w-full h-[120%] object-cover" alt="Divider" />
        </motion.div>
        <div className="relative z-20 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-serif text-white italic mb-6">Taste the Tradition</h2>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black mt-4">Read Our Story</Button>
        </div>
      </div>

      {/* Best Sellers Preview */}
      <section className="py-32 bg-bakery-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-bakery-50">Customer Favorites</h2>
              <p className="text-bakery-400 mt-4 max-w-md">Top rated treats curated for the perfect moment of indulgence.</p>
            </div>
            <Link to="/menu" className="hidden md:flex items-center text-bakery-200 text-sm tracking-widest uppercase hover:text-white transition-colors group">
              View Full Menu <ArrowRight size={16} className="ml-3 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProducts.map((product, idx) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group bg-bakery-800 rounded-sm overflow-hidden border border-white/5 hover:border-bakery-200/50 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="text-2xl font-serif text-bakery-50 group-hover:text-bakery-200 transition-colors">{product.name}</h3>
                    <span className="text-lg font-medium text-bakery-200">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-bakery-100/60 text-sm mb-8 line-clamp-2 leading-relaxed">{product.description}</p>
                  <Button onClick={() => addToCart(product)} className="w-full" variant="secondary">
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center text-bakery-200 tracking-widest uppercase text-xs">
              View Full Menu <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-bakery-950 text-bakery-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-bakery-200/5 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-bakery-200/5 rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-20">Sweet Words</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-sm border border-white/5 hover:border-bakery-200/30 transition-colors"
              >
                <div className="flex justify-center mb-6 text-bakery-200">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-lg italic mb-8 font-serif text-bakery-100/90 leading-relaxed">"{t.text}"</p>
                <cite className="not-italic text-xs font-bold text-bakery-400 tracking-widest uppercase">— {t.author}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};