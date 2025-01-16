import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '../lib/theme/ThemeContext';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search...",
  className = ""
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5" style={{ color: theme.colors.text + '80' }} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 rounded-lg transition-colors duration-200"
        style={{
          backgroundColor: theme.colors.text + '10',
          color: theme.colors.text,
          borderColor: theme.colors.text + '20',
        }}
      />
    </div>
  );
};