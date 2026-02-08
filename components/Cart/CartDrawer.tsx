import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../UI/Button';
import { ApiService } from '../../services/api';
import { OrderDetails } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, toggleCart, items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    type: 'pickup' as 'pickup' | 'delivery'
  });
  const [orderId, setOrderId] = useState<string>('');

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const order: OrderDetails = {
        customerName: formData.name,
        phone: formData.phone,
        address: formData.address,
        type: formData.type,
        items: items,
        total: subtotal
      };

      const result = await ApiService.submitOrder(order);
      if (result.success) {
        setOrderId(result.orderId);
        setStep('success');
        clearCart();
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={toggleCart} 
          />
          
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="absolute inset-y-0 right-0 max-w-md w-full flex"
          >
            <div className="h-full w-full bg-bakery-900 border-l border-white/10 shadow-2xl flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between p-8 border-b border-white/5 bg-bakery-950">
                <h2 className="text-2xl font-serif text-bakery-50 italic">
                  {step === 'cart' ? 'Your Selection' : step === 'checkout' ? 'Checkout' : 'Order Confirmed'}
                </h2>
                <button onClick={toggleCart} className="text-bakery-400 hover:text-white transition-colors">
                  <X size={24} strokeWidth={1} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 bg-bakery-900">
                
                {/* Step 1: Cart Items */}
                {step === 'cart' && (
                  <>
                    {items.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                        <div className="w-20 h-20 border border-bakery-200/20 rounded-full flex items-center justify-center text-bakery-200">
                          <ShoppingBagIcon />
                        </div>
                        <div>
                          <p className="text-bakery-50 text-xl font-serif mb-2">Your cart is empty</p>
                          <p className="text-bakery-400 text-sm max-w-xs mx-auto">Discover our artisan selection and add something delicious.</p>
                        </div>
                        <Button variant="outline" onClick={toggleCart}>Return to Menu</Button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-4 bg-bakery-800 p-4 rounded-sm border border-white/5">
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-sm" />
                            <div className="flex-1">
                              <h3 className="font-serif text-bakery-50 line-clamp-1 mb-1">{item.name}</h3>
                              <p className="text-bakery-200 text-sm mb-3">${item.price.toFixed(2)}</p>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center border border-white/10 rounded-sm bg-bakery-900">
                                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-bakery-200 text-bakery-400"><Minus size={14} /></button>
                                  <span className="w-8 text-center text-sm font-medium text-bakery-100">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-bakery-200 text-bakery-400"><Plus size={14} /></button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-bakery-400 hover:text-red-400 ml-auto transition-colors">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Step 2: Checkout Form */}
                {step === 'checkout' && (
                  <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-6">
                    <div className="space-y-4">
                      <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-bakery-400 mb-2">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-bakery-800 border border-white/10 rounded-sm text-bakery-50 focus:border-bakery-200 focus:outline-none transition-colors" 
                          value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-bakery-400 mb-2">Phone</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-bakery-800 border border-white/10 rounded-sm text-bakery-50 focus:border-bakery-200 focus:outline-none transition-colors" 
                          value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-bakery-400 mb-2">Order Type</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button type="button" onClick={() => setFormData({...formData, type: 'pickup'})}
                            className={`py-3 rounded-sm border text-sm font-medium transition-colors ${formData.type === 'pickup' ? 'bg-bakery-200 text-bakery-900 border-bakery-200' : 'bg-transparent border-white/10 text-bakery-400 hover:border-bakery-200'}`}>
                            Pickup
                          </button>
                          <button type="button" onClick={() => setFormData({...formData, type: 'delivery'})}
                            className={`py-3 rounded-sm border text-sm font-medium transition-colors ${formData.type === 'delivery' ? 'bg-bakery-200 text-bakery-900 border-bakery-200' : 'bg-transparent border-white/10 text-bakery-400 hover:border-bakery-200'}`}>
                            Delivery
                          </button>
                        </div>
                      </div>
                      {formData.type === 'delivery' && (
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-bakery-400 mb-2">Delivery Address</label>
                          <textarea required rows={3} className="w-full px-4 py-3 bg-bakery-800 border border-white/10 rounded-sm text-bakery-50 focus:border-bakery-200 focus:outline-none transition-colors" 
                            value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                        </div>
                      )}
                    </div>
                  </form>
                )}

                {/* Step 3: Success */}
                {step === 'success' && (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-24 h-24 border-2 border-bakery-200 rounded-full flex items-center justify-center text-bakery-200 mb-8">
                      <CheckIcon size={48} />
                    </div>
                    <h3 className="text-3xl font-serif italic text-bakery-50 mb-4">Merci!</h3>
                    <p className="text-bakery-400 mb-8 leading-relaxed">Thank you for your order, {formData.name}.<br/>Your Order ID is <span className="font-mono text-bakery-200">{orderId}</span></p>
                    <Button onClick={toggleCart} className="w-full">Continue Browsing</Button>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              {step !== 'success' && items.length > 0 && (
                <div className="p-8 border-t border-white/5 bg-bakery-950">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-bakery-400 uppercase tracking-widest text-xs">Subtotal</span>
                    <span className="text-2xl font-serif text-bakery-50">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {step === 'cart' ? (
                    <Button onClick={() => setStep('checkout')} className="w-full flex items-center justify-center gap-2">
                      Proceed to Checkout <ArrowRight size={18} />
                    </Button>
                  ) : (
                    <div className="flex gap-3">
                      <Button variant="ghost" onClick={() => setStep('cart')} className="flex-1">Back</Button>
                      <Button type="submit" form="checkout-form" isLoading={isLoading} className="flex-[2]">Confirm Order</Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Icons needed locally
const ShoppingBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);
const CheckIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);