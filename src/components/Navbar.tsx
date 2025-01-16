import React from 'react';
import { Menu, Settings, Globe } from 'lucide-react';
import { ThemeDropdown } from './ThemeDropdown';
import { useTheme } from '../lib/theme/ThemeContext';
import { SearchBar } from './SearchBar';

const Navbar = () => {
  const { theme } = useTheme();
  
  return (
    <nav className="border-b transition-colors duration-200" style={{ borderColor: theme.colors.text + '20' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <button className="p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200 lg:hidden"
              style={{ backgroundColor: theme.colors.primary + '10' }}>
              <Menu size={24} style={{ color: theme.colors.text }} />
            </button>
            <div className="flex items-center space-x-3 ml-2 lg:ml-0">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.primary }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                </div>
                <span className="ml-2 text-xl font-bold">UI Library</span>
              </div>
              <span className="px-2 py-1 text-sm rounded-md" 
                style={{ backgroundColor: theme.colors.text + '10' }}>
                latest
              </span>
            </div>
          </div>

          {/* Center section - Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:opacity-80 transition-opacity duration-200">Components</a>
            <a href="#" className="hover:opacity-80 transition-opacity duration-200">Store</a>
            <div className="flex items-center space-x-2">
              <ThemeDropdown />
              <button className="p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200"
                style={{ backgroundColor: theme.colors.primary + '10' }}>
                <Settings size={20} style={{ color: theme.colors.text }} />
              </button>
              <button className="p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200"
                style={{ backgroundColor: theme.colors.primary + '10' }}>
                <Globe size={20} style={{ color: theme.colors.text }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;