import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Croissant } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled || mobileMenuOpen 
          ? 'bg-bakery-900/80 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-bakery-200 blur opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <div className="relative text-bakery-200">
                <Croissant size={28} strokeWidth={1} />
              </div>
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide text-bakery-50">
              Lumière<span className="text-bakery-200">.</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 relative group py-2 ${
                    isActive ? 'text-bakery-200' : 'text-bakery-100 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-bakery-200 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleCart} 
              className="relative group text-bakery-100 hover:text-bakery-200 transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingBag size={22} strokeWidth={1} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-bakery-900 bg-bakery-200 rounded-full animate-fade-in">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-bakery-100 hover:text-bakery-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bakery-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6 flex flex-col items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-serif italic ${
                      isActive ? 'text-bakery-200' : 'text-bakery-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button 
                onClick={() => {
                  toggleCart();
                  setMobileMenuOpen(false);
                }}
                className="mt-4 w-full bg-bakery-200 text-bakery-900 py-3 rounded-sm text-xs font-bold uppercase tracking-widest"
              >
                View Cart ({totalItems})
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};