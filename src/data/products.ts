import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    featured: true,
    sale: true
  },
  {
    id: '2',
    name: 'Luxury Smart Watch',
    price: 449.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'Advanced smartwatch with health tracking, GPS, and elegant design.',
    rating: 4.6,
    reviews: 189,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 199.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    description: 'Stylish designer sunglasses with UV protection and premium frames.',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 899.99,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'Professional-grade camera with advanced features for photography enthusiasts.',
    rating: 4.9,
    reviews: 342,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Minimalist Backpack',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    description: 'Sleek, minimalist backpack perfect for daily use and travel.',
    rating: 4.5,
    reviews: 98,
    inStock: true
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    price: 349.99,
    image: 'https://images.pexels.com/photos/586998/pexels-photo-586998.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/586998/pexels-photo-586998.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home',
    description: 'Comfortable ergonomic office chair with lumbar support and adjustable features.',
    rating: 4.4,
    reviews: 276,
    inStock: true
  },
  {
    id: '7',
    name: 'Wireless Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'Portable wireless speaker with excellent sound quality and long battery life.',
    rating: 4.3,
    reviews: 189,
    inStock: true,
    sale: true
  },
  {
    id: '8',
    name: 'Premium Coffee Maker',
    price: 299.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home',
    description: 'Professional coffee maker with programmable settings and premium build quality.',
    rating: 4.6,
    reviews: 234,
    inStock: true
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Home'];

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' }
];