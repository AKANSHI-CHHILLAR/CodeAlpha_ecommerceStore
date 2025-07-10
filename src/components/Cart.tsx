import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { state, closeCart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (!state.isOpen) return null;

  const total = getTotalPrice();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold text-slate-800">Shopping Cart</h2>
            <button 
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button 
                  onClick={closeCart}
                  className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800 mb-1">{item.product.name}</h3>
                      <p className="text-sm text-gray-600">${item.product.price.toFixed(2)}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-slate-800 mb-2">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-slate-800">Total:</span>
                <span className="text-2xl font-bold text-slate-800">${total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <button className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium">
                  Checkout
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}