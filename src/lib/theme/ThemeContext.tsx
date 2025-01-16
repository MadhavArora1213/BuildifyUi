import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = {
  name: string;
  colors: {
    primary: string;
    'primary-content'?: string;
    secondary: string;
    'secondary-content'?: string;
    accent: string;
    'accent-content'?: string;
    neutral: string;
    'neutral-content'?: string;
    'base-100': string;
    'base-200'?: string;
    'base-300'?: string;
    'base-content'?: string;
    info?: string;
    'info-content'?: string;
    success?: string;
    'success-content'?: string;
    warning?: string;
    'warning-content'?: string;
    error?: string;
    'error-content'?: string;
    background: string;
    text: string;
  };
  palette: string[];
};

export const themes: Record<string, Theme> = {
  light: {
    name: 'light',
    colors: {
      primary: '#4F46E5',
      secondary: '#EC4899',
      accent: '#10B981',
      neutral: '#2B3440',
      'base-100': '#FFFFFF',
      'base-200': '#F2F2F2',
      'base-300': '#E5E6E6',
      background: '#FFFFFF',
      text: '#1f2937',
    },
    palette: ['#4F46E5', '#EC4899', '#10B981', '#F59E0B'],
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#818CF8',
      secondary: '#F472B6',
      accent: '#34D399',
      neutral: '#2a323c',
      'base-100': '#1d232a',
      'base-200': '#191e24',
      'base-300': '#15191e',
      background: '#1d232a',
      text: '#A6ADBB',
    },
    palette: ['#818CF8', '#F472B6', '#34D399', '#3B82F6'],
  },
  cupcake: {
    name: 'cupcake',
    colors: {
      primary: '#65c3c8',
      secondary: '#ef9fbc',
      accent: '#eeaf3a',
      neutral: '#291334',
      'base-100': '#faf7f5',
      'base-200': '#efeae6',
      'base-300': '#e7e2df',
      background: '#faf7f5',
      text: '#291334',
    },
    palette: ['#65c3c8', '#ef9fbc', '#eeaf3a', '#291334'],
  },
  synthwave: {
    name: 'synthwave',
    colors: {
      primary: '#e779c1',
      secondary: '#58c7f3',
      accent: '#f9c80e',
      neutral: '#221551',
      'base-100': '#1a103d',
      background: '#1a103d',
      text: '#f9f7fd',
      info: '#53c0f3',
      success: '#71ead2',
      warning: '#eace6c',
      error: '#ec8c78',
    },
    palette: ['#e779c1', '#58c7f3', '#f9c80e', '#ec8c78'],
  },
  retro: {
    name: 'retro',
    colors: {
      primary: '#ef9995',
      secondary: '#a4cbb4',
      accent: '#DC8850',
      neutral: '#2E282A',
      'base-100': '#ece3ca',
      'base-200': '#e4d8b4',
      'base-300': '#DBCA9A',
      background: '#ece3ca',
      text: '#282425',
    },
    palette: ['#ef9995', '#a4cbb4', '#DC8850', '#2E282A'],
  },
  cyberpunk: {
    name: 'cyberpunk',
    colors: {
      primary: '#FF00FF',
      secondary: '#00FFFF',
      accent: '#F9C80E',
      neutral: '#2E1437',
      'base-100': '#2E1437',
      background: '#2E1437',
      text: '#FFFFFF',
    },
    palette: ['#FF00FF', '#00FFFF', '#F9C80E', '#FF3864'],
  },
  valentine: {
    name: 'valentine',
    colors: {
      primary: '#e96d7b',
      secondary: '#a991f7',
      accent: '#66b1b3',
      neutral: '#af4670',
      'base-100': '#fae7f4',
      background: '#fae7f4',
      text: '#632c3b',
    },
    palette: ['#e96d7b', '#a991f7', '#66b1b3', '#af4670'],
  },
  aqua: {
    name: 'aqua',
    colors: {
      primary: '#09ecf3',
      'primary-content': '#005355',
      secondary: '#966fb3',
      accent: '#ffe999',
      neutral: '#3b8ac4',
      'base-100': '#345da7',
      background: '#345da7',
      text: '#ffffff',
    },
    palette: ['#09ecf3', '#966fb3', '#ffe999', '#3b8ac4'],
  },
  garden: {
    name: 'garden',
    colors: {
      primary: '#5c7f67',
      secondary: '#8E4162',
      accent: '#5c7f67',
      neutral: '#291E00',
      'base-100': '#e9e7e7',
      background: '#e9e7e7',
      text: '#100f0f',
    },
    palette: ['#5c7f67', '#8E4162', '#5c7f67', '#291E00'],
  },
  forest: {
    name: 'forest',
    colors: {
      primary: '#1eb854',
      secondary: '#1DB88E',
      accent: '#1DB8AB',
      neutral: '#19362D',
      'base-100': '#171212',
      background: '#171212',
      text: '#ffffff',
    },
    palette: ['#1eb854', '#1DB88E', '#1DB8AB', '#19362D'],
  },
};

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