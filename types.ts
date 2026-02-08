export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bread' | 'pastry' | 'cake' | 'savory';
  image: string;
  popular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  phone: string;
  address: string;
  type: 'pickup' | 'delivery';
  items: CartItem[];
  total: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'popular';
