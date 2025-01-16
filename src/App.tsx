import React from 'react';
import { ThemeProvider } from './lib/theme/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold">Welcome to Your App</h1>
          <p className="mt-4">Start editing to see some magic happen!</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;