import type React from 'react';
import { lazy, Suspense, useMemo } from 'react';
import { useTheme } from '../../lib/theme/ThemeContext';

// Lazy load the Search icon for better performance
const SearchIcon = lazy(() => import('lucide-react').then((module) => ({ default: module.Search })));

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search...",
  className = ""
}) => {
  const { theme } = useTheme();

  // Memoize theme styles to prevent unnecessary re-renders
  const themeStyles = useMemo(() => ({
    textColor: theme.colors.text,
    bgColor: `${theme.colors.text}10`,
    borderColor: `${theme.colors.text}20`
  }), [theme]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Icon - Lazy Loaded */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Suspense fallback={<div className="w-5 h-5 ">🔍</div>}>
          <SearchIcon className="h-5 w-5" style={{ color: `${themeStyles.textColor}80` }} />
        </Suspense>
      </div>

      {/* Search Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        aria-label="Search"
        className="block w-full pl-10 pr-3 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        style={{
          backgroundColor: themeStyles.bgColor,
          color: themeStyles.textColor,
          borderColor: themeStyles.borderColor,
        }}
      />
    </div>
  );
};
