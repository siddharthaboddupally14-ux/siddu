import React, { useState, useCallback } from 'react';
import { AppState, UserProfile, CareerRecommendation } from './types';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import SurveyForm from './components/SurveyForm';
import LoadingSpinner from './components/LoadingSpinner';
import RecommendationDashboard from './components/RecommendationDashboard';
import { generateCareerPlan } from './services/geminiService';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [recommendation, setRecommendation] = useState<CareerRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStartSurvey = () => {
    setAppState(AppState.SURVEY);
    setError(null);
    setRecommendation(null);
    setUserProfile(null);
  };

  const handleReturnToWelcome = () => {
    setAppState(AppState.WELCOME);
    setRecommendation(null);
    setUserProfile(null);
    setError(null);
  };
  
  const handleCancelSurvey = () => {
    // If there's a recommendation, we are editing, so go back to results.
    // Otherwise, we are on a new survey, so go back to welcome.
    if (recommendation && userProfile) {
      setAppState(AppState.RESULTS);
      setError(null);
    } else {
      setAppState(AppState.WELCOME);
    }
  };

  const handleEditProfile = () => {
    setAppState(AppState.SURVEY);
    // Keep recommendation in state so the user can cancel and go back
  };

  const handleSurveySubmit = useCallback(async (profile: UserProfile) => {
    setUserProfile(profile);
    setAppState(AppState.LOADING);
    setError(null);
    try {
      const result = await generateCareerPlan(profile);
      setRecommendation(result);
      setAppState(AppState.RESULTS);
    } catch (err) {
      setError('An error occurred while generating your career plan. Please try again.');
      setAppState(AppState.SURVEY); // Go back to survey on error
    }
  }, []);

  const handleGoBack = () => {
    if (appState === AppState.SURVEY) {
      handleCancelSurvey();
    } else if (appState === AppState.RESULTS) {
      handleEditProfile();
    }
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.WELCOME:
        return <WelcomeScreen onStartSurvey={handleStartSurvey} />;
      case AppState.SURVEY:
        return <SurveyForm
          onSubmit={handleSurveySubmit}
          userProfile={userProfile}
          error={error}
          onCancel={handleCancelSurvey}
        />;
      case AppState.LOADING:
        return <LoadingSpinner />;
      case AppState.RESULTS:
        if (recommendation && userProfile) {
          return <RecommendationDashboard
            recommendation={recommendation}
            userProfile={userProfile}
            onStartOver={handleReturnToWelcome}
            onEditProfile={handleEditProfile}
          />;
        }
        // Fallback in case state is inconsistent
        handleStartSurvey();
        return null;
      default:
        return <WelcomeScreen onStartSurvey={handleStartSurvey} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header appState={appState} onGoBack={handleGoBack} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderContent()}
      </main>
      <footer className="w-full text-center p-4 text-slate-500 dark:text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} CareerBridge AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;