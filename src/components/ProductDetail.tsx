import React, { useState } from 'react';
import { X, Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  const images = product.images || [product.image];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-4 bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-slate-800">Product Details</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {images.length > 1 && (
                  <div className="flex space-x-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                          selectedImage === index ? 'border-amber-500' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    {product.sale && (
                      <span className="text-sm text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">{product.name}</h1>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl font-bold text-slate-800">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    {product.inStock ? (
                      <span className="text-green-600 font-medium">✓ In Stock</span>
                    ) : (
                      <span className="text-red-600 font-medium">✗ Out of Stock</span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-slate-700">Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}