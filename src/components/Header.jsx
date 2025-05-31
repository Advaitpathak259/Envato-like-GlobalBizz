import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">GlobalBizz</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors">All Items</a>
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors">About</a>
          </nav>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-48 bg-gray-100 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105">
            Get unlimited
          </button>
        </div>

        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors py-2">All Items</a>
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors py-2">Categories</a>
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors py-2">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-lime-500 transition-colors py-2">About</a>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-100 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <button className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-full mt-2 transition-all">
              Get unlimited
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;