import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">Trusted by 50,000+ customers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover
                <span className="text-amber-500"> Premium</span>
                <br />
                Products
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg">
                Curated collection of premium products for the modern lifestyle. 
                Quality, style, and innovation in every item.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="border border-gray-300 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-medium">
                View Collection
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-amber-500">50K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">1000+</div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">4.9</div>
                <div className="text-sm text-gray-300">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Product */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Featured Product"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-amber-600 font-medium">Electronics</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800">
                  Premium Wireless Headphones
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-slate-800">$299.99</span>
                    <span className="text-sm text-gray-500 line-through">$399.99</span>
                  </div>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                    25% OFF
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-3 rounded-full">
              <Star className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-slate-800 p-3 rounded-full shadow-lg">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}