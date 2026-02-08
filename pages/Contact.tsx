import React, { useState } from 'react';
import { ApiService } from '../services/api';
import { Button } from '../components/UI/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await ApiService.sendMessage(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-bakery-900 pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-bakery-50 mb-6">Get in Touch</h1>
          <p className="text-bakery-400 font-light max-w-xl mx-auto">We'd love to hear from you. Drop us a line or visit our kitchen.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Card */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-bakery-800 p-12 rounded-sm border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-bakery-200/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-3xl font-serif text-bakery-50 mb-12 italic">Information</h2>
            <div className="space-y-10 relative z-10">
              <div className="flex items-start gap-6">
                <div className="text-bakery-200 mt-1">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-bold text-bakery-50 uppercase tracking-widest text-xs mb-2">Location</h3>
                  <p className="text-bakery-400 font-light">123 Baker Street, Artisan District<br/>New York, NY 10012</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="text-bakery-200 mt-1">
                  <Phone size={24} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-bold text-bakery-50 uppercase tracking-widest text-xs mb-2">Phone</h3>
                  <p className="text-bakery-400 font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-bakery-200 mt-1">
                  <Mail size={24} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="font-bold text-bakery-50 uppercase tracking-widest text-xs mb-2">Email</h3>
                  <p className="text-bakery-400 font-light">hello@lumierebakery.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 relative z-10">
              <h3 className="font-bold text-bakery-50 uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                Opening Hours
              </h3>
              <div className="grid grid-cols-2 gap-8 text-bakery-400 font-light text-sm">
                <div>
                  <p className="text-bakery-200 font-medium mb-1">Weekdays</p>
                  <p>7:00 AM - 7:00 PM</p>
                </div>
                <div>
                  <p className="text-bakery-200 font-medium mb-1">Weekends</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-transparent p-4"
          >
            <h2 className="text-3xl font-serif text-bakery-50 mb-10 italic">Send a Message</h2>
            {status === 'success' ? (
              <div className="text-center py-16 bg-bakery-800 border border-bakery-200/20 rounded-sm">
                <h3 className="text-2xl font-serif text-bakery-200 mb-4">Message Sent</h3>
                <p className="text-bakery-400 mb-8">Thank you. We will respond shortly.</p>
                <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-bakery-400 mb-3 group-focus-within:text-bakery-200 transition-colors">Your Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-bakery-50 focus:border-bakery-200 focus:outline-none transition-colors" 
                    value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-bakery-400 mb-3 group-focus-within:text-bakery-200 transition-colors">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-bakery-50 focus:border-bakery-200 focus:outline-none transition-colors" 
                    value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@example.com" />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-bakery-400 mb-3 group-focus-within:text-bakery-200 transition-colors">Message</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-bakery-50 focus:border-bakery-200 focus:outline-none transition-colors resize-none" 
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="How can we help you?"></textarea>
                </div>
                <Button type="submit" isLoading={status === 'loading'} className="w-full mt-4">Send Message</Button>
                {status === 'error' && <p className="text-red-400 text-center text-sm">Something went wrong. Try again.</p>}
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};