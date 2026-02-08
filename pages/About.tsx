import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-bakery-900 pb-24">
      {/* Hero */}
      <div className="pt-48 pb-32 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-bakery-200 uppercase tracking-[0.3em] text-xs">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif text-bakery-50 mt-8 mb-12 leading-tight">
            Baking the World a <span className="italic text-bakery-200">Better Place</span>
          </h1>
          <p className="text-xl text-bakery-400 font-light leading-relaxed max-w-2xl mx-auto">
            Founded in 2024, Lumière began as a humble kitchen project and blossomed into a sanctuary for artisan baking. We believe in slow fermentation, real butter, and the power of community.
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[600px] mb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1920&q=80" 
          alt="Bakers working" 
          className="w-full h-full object-cover fixed top-0 left-0" // fixed attachment doesn't work well with transforms usually, using simple cover here
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-16">
            <h2 className="text-4xl font-serif text-bakery-50 border-l-2 border-bakery-200 pl-6">Our Philosophy</h2>
            <div className="space-y-12">
              {[
                { id: "01", title: "Quality First", text: "We never compromise. Organic flour, free-range eggs, and premium chocolate are our non-negotiables." },
                { id: "02", title: "Patience is Key", text: "Our sourdough ferments for 48 hours. We believe good things take time, and you can taste the difference." },
                { id: "03", title: "Community Focused", text: "We are more than a bakery; we are a gathering place. We support local farmers and donate daily to shelters." }
              ].map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="font-serif text-4xl text-bakery-800 group-hover:text-bakery-200 transition-colors font-bold opacity-50">{item.id}</div>
                  <div>
                    <h3 className="text-xl font-serif text-bakery-50 mb-3">{item.title}</h3>
                    <p className="text-bakery-400 font-light leading-relaxed text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 relative">
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
             >
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" className="rounded-sm shadow-2xl mt-20 grayscale hover:grayscale-0 transition-all duration-700" alt="Croissant" />
             </motion.div>
             <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
             >
                <img src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80" className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Bread" />
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};