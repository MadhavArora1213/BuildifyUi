export type Theme = {
    mode: string;
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
      mode: ''
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
      mode: ''
    },
    blue: {
      name: 'blue',
      colors: {
        primary: '#1E3A8A',
        secondary: '#60A5FA',
        accent: '#93C5FD',
        neutral: '#1E293B',
        'base-100': '#F0F9FF',
        background: '#E0F2FE',
        text: '#0F172A',
      },
      palette: ['#1E3A8A', '#60A5FA', '#93C5FD', '#E0F2FE'],
      mode: ''
    },
    orange: {
      name: 'orange',
      colors: {
        primary: '#FF8C00',
        secondary: '#FFA500',
        accent: '#FFD580',
        neutral: '#7A3C00',
        'base-100': '#FFF5E5',
        background: '#FFEDCC',
        text: '#662900',
      },
      palette: ['#FF8C00', '#FFA500', '#FFD580', '#FFEDCC'],
      mode: ''
    },
    gray: {
      name: 'gray',
      colors: {
        primary: '#374151',
        secondary: '#9CA3AF',
        accent: '#D1D5DB',
        neutral: '#111827',
        'base-100': '#F9FAFB',
        background: '#E5E7EB',
        text: '#1F2937',
      },
      palette: ['#374151', '#9CA3AF', '#D1D5DB', '#E5E7EB'],
      mode: ''
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
      mode: ''
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
      mode: ''
    },
    green: {
      name: 'green',
      colors: {
        primary: '#2F584F',
        secondary: '#748F89',
        accent: '#8CA29D',
        neutral: '#D1DAD8',
        'base-100': '#EDF5EE',
        background: '#E2F0EC',
        text: '#2F584F',
      },
      palette: ['#2F584F', '#748F89', '#8CA29D', '#D1DAD8', '#EDF5EE', '#E2F0EC'],
      mode: 'light'
    },
    purple: {
      name: 'purple',
      colors: {
        primary: '#8872BF',
        secondary: '#B6AED3',
        accent: '#CFB5D6',
        neutral: '#E1D1E6',
        'base-100': '#F6EFF6',
        background: '#E6DFF6',
        text: '#8872BF',
      },
      palette: ['#8872BF', '#B6AED3', '#CFB5D6', '#E1D1E6', '#F6EFF6'],
      mode: 'light'
    },
    aura: {
      name: 'aura',
      colors: {
        primary: '#1A2D42',
        secondary: '#2E4156',
        accent: '#AAB7B7',
        neutral: '#C0C8CA',
        'base-100': '#D4D8DD',
        background: '#F5F5F5',
        text: '#1A2D42',
      },
      palette: ['#1A2D42', '#2E4156', '#AAB7B7', '#C0C8CA', '#D4D8DD'],
      mode: 'light'
    },
    sage: {
      name: 'sage',
      colors: {
        primary: '#2F584F',
        secondary: '#748F89',
        accent: '#8CA29D',
        neutral: '#D1DAD8',
        'base-100': '#EDF5EE',
        background: '#E2F0EC',
        text: '#2F584F',
      },
      palette: ['#D1DAD8', '#BAC7C4', '#8CA29D', '#748F89', '#5D7D76', '#2F584F'],
      mode: 'light'
    },
    navy: {
      name: 'navy',
      colors: {
        primary: '#1A2D42',
        secondary: '#2E4156',
        accent: '#AAB7B7',
        neutral: '#C0C8CA',
        'base-100': '#D4D8DD',
        background: '#F5F5F5',
        text: '#1A2D42',
      },
      palette: ['#1A2D42', '#2E4156', '#AAB7B7', '#C0C8CA', '#D4D8DD'],
      mode: 'light'
    },
    red: {
      name: 'red',
      colors: {
        primary: '#B91C1C',
        secondary: '#F87171',
        accent: '#FCA5A5',
        neutral: '#7F1D1D',
        'base-100': '#FEF2F2',
        background: '#FEE2E2',
        text: '#7F1D1D',
      },
      palette: ['#B91C1C', '#F87171', '#FCA5A5', '#FEE2E2'],
      mode: 'light'
    },
    teal: {
      name: 'teal',
      colors: {
        primary: '#1E3A3C',
        secondary: '#2F5C5C',
        accent: '#3D7A7A',
        neutral: '#6B9797',
        'base-100': '#B5D5D5',
        background: '#E8F3F3',
        text: '#1E3A3C',
      },
      palette: ['#1E3A3C', '#2F5C5C', '#3D7A7A', '#6B9797', '#B5D5D5', '#E8F3F3'],
      mode: 'light'
    },
    frosted: {
      name: 'frosted',
      colors: {
        primary: '#1A2D3D',
        secondary: '#2E4456',
        accent: '#516A82',
        neutral: '#8AA2BA',
        'base-100': '#D1E0F0',
        background: '#F0F5FA',
        text: '#1A2D3D',
      },
      palette: ['#1A2D3D', '#2E4456', '#516A82', '#8AA2BA', '#D1E0F0', '#F0F5FA'],
      mode: 'light'
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
      mode: ''
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
      mode: ''
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
      mode: ''
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
      mode: ''
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
      mode: ''
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
      mode: ''
    },
  };