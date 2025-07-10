import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Header({ onSearch, searchQuery }: HeaderProps) {
  const { toggleCart, getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-slate-800">
                <span className="text-amber-500">Luxe</span>Store
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Shop
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Categories
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center text-slate-600 hover:text-slate-900 transition-colors">
              <User className="h-6 w-6" />
            </button>
            
            <button
              onClick={toggleCart}
              className="relative flex items-center text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                />
              </div>
              
              <a href="#" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">
                Shop
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">
                Categories
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <button className="text-slate-600 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Account
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}