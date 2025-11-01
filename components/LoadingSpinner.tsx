import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500"></div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-8">
        Crafting Your Future...
      </h2>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-center">
        Our AI is analyzing your profile to create a personalized career path. This might take a moment.
      </p>
    </div>
  );
};

export default LoadingSpinner;