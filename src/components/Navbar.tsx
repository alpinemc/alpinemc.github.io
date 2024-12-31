import React from 'react';
import { Mountain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Mountain className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">Alpine</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
            <a href="#support" className="text-gray-300 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;