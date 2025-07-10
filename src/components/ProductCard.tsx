import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(product);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Sale Badge */}
      {product.sale && (
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
          Sale
        </div>
      )}
      
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-2">
          <button
            onClick={handleViewDetails}
            className="opacity-0 group-hover:opacity-100 bg-white text-slate-700 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform translate-y-4 group-hover:translate-y-0"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-all duration-200 transform translate-y-4 group-hover:translate-y-0"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-amber-600 font-medium">{product.category}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-slate-800">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {product.inStock ? (
              <span className="text-green-600 text-sm font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 text-sm font-medium">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}