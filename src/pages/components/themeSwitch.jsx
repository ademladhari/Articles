import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Switch = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
      localStorage.setItem('theme', theme);
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }, [theme]);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 group flex items-center justify-between w-20 h-10 p-1 rounded-full transition-colors duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full">
        {/* Sliding circle */}
        <div
          className={`absolute top-0 w-8 h-8 rounded-full bg-white transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-10' : 'translate-x-0'
          }`}
        />
        
        {/* Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-1">
          <FaMoon className={`h-4 w-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-700'
          }`} />
          <FaSun className={`h-4 w-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-yellow-300' : 'text-slate-400'
          }`} />
        </div>
      </div>
    </button>
  );
};

export default Switch;