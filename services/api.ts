import { ContactForm, OrderDetails, Product } from '../types';
import { PRODUCTS } from '../constants';

/**
 * Mock Backend Service
 * In a real application, these functions would use `fetch` or `axios` to hit Node/Express endpoints.
 */

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const ApiService = {
  getMenu: async (): Promise<Product[]> => {
    await delay(600); // Simulate loading
    return PRODUCTS;
  },

  submitOrder: async (order: OrderDetails): Promise<{ success: boolean; orderId: string }> => {
    await delay(1500); // Simulate processing
    // Simulate validation
    if (order.items.length === 0) throw new Error("Cart is empty");
    if (!order.customerName || !order.phone) throw new Error("Missing customer details");
    
    console.log("Order submitted to backend:", order);
    return { success: true, orderId: `ORD-${Math.floor(Math.random() * 10000)}` };
  },

  sendMessage: async (form: ContactForm): Promise<{ success: boolean }> => {
    await delay(1000);
    if (!form.email.includes('@')) throw new Error("Invalid email");
    console.log("Message sent to backend:", form);
    return { success: true };
  }
};