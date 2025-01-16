import React, { useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../lib/theme/ThemeContext';
import { useClickOutside } from '../lib/hooks/useClickOutside';
import { themes } from '../lib/theme/ThemeContext';

export const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, availableThemes } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-opacity-10 hover:bg-opacity-20 transition-colors duration-200"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <span style={{ color: theme.colors.text }}>Theme</span>
        <ChevronDown
          size={16}
          style={{ color: theme.colors.text }}
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg py-1 z-50"
          style={{ backgroundColor: theme.colors.background }}
        >
          {availableThemes.map((themeName) => (
            <button
              key={themeName}
              onClick={() => {
                setTheme(themeName);
                setIsOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-opacity-10 transition-colors duration-200"
              style={{
                backgroundColor: theme.name === themeName ? theme.colors.primary + '20' : 'transparent',
                color: theme.colors.text,
              }}
            >
              <div className="flex items-center space-x-3">
                <span className="capitalize">{themeName}</span>
                {theme.name === themeName && <Check size={16} />}
              </div>
              <div className="flex space-x-1">
                {themes[themeName].palette.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};