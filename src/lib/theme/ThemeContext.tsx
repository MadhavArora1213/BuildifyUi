import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { type Theme, themes } from './themes';

type ThemeContextType = {
  theme: Theme;
  setTheme: (name: string) => void;
  availableThemes: string[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(themes.light);

  const setTheme = (name: string) => {
    const newTheme = themes[name];
    if (newTheme) {
      setThemeState(newTheme);
      localStorage.setItem('theme', name);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes[savedTheme]) {
      setThemeState(themes[savedTheme]);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', theme.colors.primary);
    document.documentElement.style.setProperty('--secondary', theme.colors.secondary);
    document.documentElement.style.setProperty('--background', theme.colors.background);
    document.documentElement.style.setProperty('--text', theme.colors.text);
    document.documentElement.style.setProperty('--accent', theme.colors.accent);
    document.documentElement.style.backgroundColor = theme.colors.background;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes: Object.keys(themes) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { themes };
