import { lazy, Suspense, useMemo } from 'react';
import { useTheme } from '../lib/theme/ThemeContext';
import Logo from '../assets/Buildify_Logo.png'
// Lazy load icons for better performance
const MenuIcon = lazy(() => import('lucide-react').then((module) => ({ default: module.Menu })));
const GithubIcon = lazy(() => import('lucide-react').then((module) => ({ default: module.Github })));

import { ThemeDropdown } from './ThemeDropdown';
import { SearchBar } from './SearchBar';

const Navbar = () => {
  const { theme } = useTheme();

  // Memoize styles to prevent unnecessary re-renders
  const themeStyles = useMemo(() => ({
    borderColor: `${theme.colors.text}20`,
    primaryBg: `${theme.colors.primary}10`,
    textColor: theme.colors.text,
    accentBg: theme.colors.accent,
  }), [theme]);

  return (
    <nav className="border-b transition-colors duration-200" style={{ borderColor: themeStyles.borderColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center">
            <Suspense fallback={<div className="w-6 h-6 animate-spin">☰</div>}>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className="p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200" style={{ backgroundColor: themeStyles.primaryBg }}>
                <MenuIcon size={24} style={{ color: themeStyles.textColor }} />
              </button>
            </Suspense>
            <div className="flex items-center space-x-3 ml-2">
              <img 
                src={Logo}
                alt="Buildify UI Logo" 
                className="h-10 w-auto" 
                style={{ filter: theme.mode === 'dark' ? 'invert(1)' : 'invert(0)' }}
              />
              <span className="ml-2 text-xl font-bold" style={{ color: themeStyles.textColor }}>Buildify UI</span>
            </div>
          </div>

          {/* Center section - Search */}
          <div className="flex flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="#" className="hover:opacity-80 transition-opacity duration-200" style={{ color: themeStyles.textColor }}>Components</a>
            <div className="flex items-center space-x-2">
              <ThemeDropdown />
              <Suspense fallback={<div className="w-5 h-5 animate-spin">🔗</div>}>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="p-2 rounded-lg hover:bg-opacity-10 transition-colors duration-200" style={{ backgroundColor: themeStyles.primaryBg }}>
                  <GithubIcon size={20} style={{ color: themeStyles.textColor }} />
                </button>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
