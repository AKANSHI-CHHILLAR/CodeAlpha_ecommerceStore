import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { ProductDetail } from './components/ProductDetail';
import { Filters } from './components/Filters';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';
import { Product } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
        <Cart />
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        
        <main>
          <Hero />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                {searchQuery ? `Search results for "${searchQuery}"` : 'Featured Products'}
              </h2>
              <p className="text-gray-600">
                {searchQuery 
                  ? `Found ${filteredAndSortedProducts.length} products`
                  : 'Discover our curated collection of premium products'
                }
              </p>
            </div>

            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedSort={selectedSort}
              onSortChange={setSelectedSort}
            />

            <ProductGrid 
              products={filteredAndSortedProducts}
              onViewDetails={setSelectedProduct}
            />
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;