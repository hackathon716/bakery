import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-bakery-900 pb-24">
       <div className="pt-48 pb-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-bakery-50 mb-6"
          >
            The Gallery
          </motion.h1>
          <p className="text-bakery-400 tracking-widest uppercase text-xs">
            A visual journey through our kitchen
          </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setSelectedImg(src)}
            >
              <div className="absolute inset-0 bg-bakery-200/0 group-hover:bg-bakery-900/40 transition-colors z-10 duration-500" />
              <img src={src} alt={`Gallery ${index}`} className="w-full h-auto filter sepia-[.2] grayscale-[.2] group-hover:sepia-0 group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bakery-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg} 
              alt="Zoomed" 
              className="max-w-full max-h-[85vh] shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};