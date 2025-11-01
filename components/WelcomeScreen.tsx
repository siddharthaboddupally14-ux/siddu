import React from 'react';
import AnimatedShaderBackground from './ui/animated-shader-background';

interface WelcomeScreenProps {
  onStartSurvey: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartSurvey }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full py-16">
      <AnimatedShaderBackground />
      <div className="relative z-10 text-center py-16 px-6 bg-white/10 dark:bg-slate-900/50 rounded-2xl shadow-xl max-w-3xl mx-auto border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-lg">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary-500 to-indigo-500 dark:from-primary-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Unlock Your Professional Destiny
        </h2>
        <p className="text-lg text-slate-200 dark:text-slate-300 mb-10 max-w-xl mx-auto">
          Your personalized career roadmap, powered by AI, awaits. Let's discover the path that's uniquely yours.
        </p>
        <button
          onClick={onStartSurvey}
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50 dark:hover:shadow-primary-400/20"
        >
          <span>Start Your Career Plan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;