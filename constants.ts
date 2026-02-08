import { Product } from './types';

// Using Unsplash images for high-quality bakery visuals
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Sourdough',
    description: '48-hour fermented rustic sourdough with a crispy crust and airy crumb.',
    price: 8.50,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1585476263060-655037f516e3?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: '2',
    name: 'Pain au Chocolat',
    description: 'Buttery, flaky layers wrapped around rich Belgian dark chocolate batons.',
    price: 4.75,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: '3',
    name: 'Strawberry Chantilly Cake',
    description: 'Light sponge cake layered with fresh strawberries and vanilla bean whipped cream.',
    price: 45.00,
    category: 'cake',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Almond Croissant',
    description: 'Double-baked croissant filled with almond frangipane and topped with toasted almonds.',
    price: 5.50,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Rosemary Focaccia',
    description: 'Italian olive oil bread topped with fresh rosemary and Maldon sea salt.',
    price: 7.00,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1573140247632-f84660f67126?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Blueberry Danish',
    description: 'Flaky puff pastry center-filled with vanilla custard and fresh blueberry compote.',
    price: 5.00,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'Spinach & Feta Turnover',
    description: 'Savory puff pastry pocket filled with spinach, feta cheese, and herbs.',
    price: 6.50,
    category: 'savory',
    image: 'https://images.unsplash.com/photo-1626804475297-411d863b67ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    name: 'Dark Chocolate Tart',
    description: 'Rich dark chocolate ganache in a chocolate shortcrust pastry shell.',
    price: 6.00,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    popular: true,
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1483695028939-0te5634d5af3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
];

export const TESTIMONIALS = [
  { id: 1, text: "The sourdough is simply the best I've had in the city. The crust is perfect!", author: "Sarah J." },
  { id: 2, text: "Their custom cakes are not only beautiful but delicious. Made my wedding special.", author: "Michael T." },
  { id: 3, text: "A morning ritual for me. Coffee and a Pain au Chocolat. Perfection.", author: "Elena R." },
];
