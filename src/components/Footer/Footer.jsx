import React from 'react';
import { Film } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-white/10 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Film className="w-6 h-6 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            CineVault
          </span>
        </div>
        <p>&copy; 2025 CineVault. All rights reserved. Made with ❤️ for movie lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;