import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Croissant } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bakery-950 text-bakery-400 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-bakery-50">
               <Croissant size={24} strokeWidth={1} className="text-bakery-200" />
               <span className="font-serif text-2xl font-bold">Lumière</span>
            </div>
            <p className="text-bakery-400/80 text-sm leading-relaxed font-light">
              Crafting memories one crumb at a time. We use only the finest organic ingredients to bring you authentic artisanal flavors.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="#" className="hover:text-bakery-200 transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-bakery-200 transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-bakery-200 transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-bakery-50 mb-8 italic">Explore</h4>
            <ul className="space-y-4 text-sm font-light tracking-wide">
              <li><Link to="/" className="hover:text-bakery-200 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-bakery-200 transition-colors">Our Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-bakery-200 transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-bakery-200 transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-bakery-50 mb-8 italic">Visit Us</h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-bakery-200" />
                <span>123 Baker Street,<br />Artisan District, NY 10012</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-bakery-200" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-bakery-200" />
                <span>hello@lumierebakery.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-bakery-50 mb-8 italic">Hours</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri</span>
                <span className="text-bakery-100">7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-bakery-100">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-bakery-100">8:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-bakery-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Lumière Bakery.</p>
          <div className="space-x-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-bakery-200">Privacy Policy</a>
             <a href="#" className="hover:text-bakery-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};