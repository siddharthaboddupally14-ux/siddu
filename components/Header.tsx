import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { AppState } from '../types';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  appState: AppState;
  onGoBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ appState, onGoBack }) => {
  const { theme, toggleTheme } = useTheme();

  const showBackButton = appState === AppState.SURVEY || appState === AppState.RESULTS;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
           {showBackButton && (
            <button
              onClick={onGoBack}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2"
              aria-label="Go back"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
           )}
           <svg className="w-8 h-8 text-primary-600 dark:text-primary-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.378 1.602a.75.75 0 00-.756 0L3.366 6.166A.75.75 0 003 6.821v10.358c0 .32.19.601.472.713l8.256 3.302a.75.75 0 00.544 0l8.256-3.302a.75.75 0 00.472-.713V6.821a.75.75 0 00-.366-.655L12.378 1.602zm-1.128 4.08a.75.75 0 00-1.06 1.06l4.25 4.25-4.25 4.25a.75.75 0 001.06 1.06l4.25-4.25 2.122-2.121-6.372-6.37z" />
          </svg>
          <h1 className="text-2xl font-bold text-primary-700 dark:text-primary-400">
            CareerBridge AI
          </h1>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          }
        </button>
      </div>
    </header>
  );
};

export default Header;