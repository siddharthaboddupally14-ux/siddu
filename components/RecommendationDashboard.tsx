import React from 'react';
import { CareerRecommendation, UserProfile, LearningStep } from '../types';
import { LEARNING_RESOURCES } from '../constants';
import ResourceCard from './ResourceCard';

interface RecommendationDashboardProps {
  recommendation: CareerRecommendation;
  userProfile: UserProfile;
  onStartOver: () => void;
  onEditProfile: () => void;
}

const StatCard: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({icon, title, children}) => (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-lg text-primary-600 dark:text-primary-400">
           {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-300">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
);


const RecommendationDashboard: React.FC<RecommendationDashboardProps> = ({ recommendation, userProfile, onStartOver, onEditProfile }) => {
  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };
  
  return (
    <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">Your Personalized Career Path</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-1">{recommendation.careerTitle}</h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onEditProfile}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-5 rounded-full transition-colors whitespace-nowrap text-sm sm:text-base"
            >
              Edit Profile
            </button>
            <button
              onClick={onStartOver}
              className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold py-2 px-5 rounded-full transition-colors whitespace-nowrap text-sm sm:text-base"
            >
              Start Over
            </button>
          </div>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl">
          Hi <span className="font-bold text-slate-800 dark:text-slate-100">{userProfile.name}</span>, based on your unique profile, we believe this is an excellent path for you. {recommendation.careerDescription}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <StatCard 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>} 
          title="Estimated Salary (INR)"
        >
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {formatSalary(recommendation.salaryExpectations.min)} - {formatSalary(recommendation.salaryExpectations.max)}
          </p>
          <p className="text-sm text-slate-500 mt-1">per year, based on your experience</p>
        </StatCard>
        
        <div className="lg:col-span-2">
           <StatCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
            title="Your Key Strengths"
           >
              <div className="flex flex-wrap gap-3">
                {userProfile.skills.map(skill => {
                  const isCrucial = recommendation.crucialSkills.includes(skill);
                  return (
                     <div 
                      key={skill} 
                      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                        isCrucial 
                          ? 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/50 dark:text-amber-200 dark:border-amber-700 shadow-sm' 
                          : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'
                      }`}
                    >
                      {isCrucial && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )}
                      <span>{skill}</span>
                    </div>
                  )
                })}
              </div>
               <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                <span className="font-semibold text-amber-600 dark:text-amber-400">Highlighted skills</span> are your key strengths for this career path.
              </p>
           </StatCard>
        </div>
      </div>
      
      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StatCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
            title="A Day in the Life"
          >
            <p className="text-slate-600 dark:text-slate-300">{recommendation.dayInTheLife}</p>
          </StatCard>
          <StatCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            title="Future Outlook"
          >
            <p className="text-slate-600 dark:text-slate-300">{recommendation.futureOutlook}</p>
          </StatCard>
      </div>

      {/* Learning Plan */}
      <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Your Personalized Learning Plan</h3>
        <div className="relative pl-8">
          {/* Timeline Line */}
          <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-slate-300 dark:bg-slate-600"></div>

          {recommendation.learningPlan.sort((a, b) => a.step - b.step).map((step, index) => {
            const resources = step.resourceCategories.flatMap(categoryKey => {
              const category = LEARNING_RESOURCES[categoryKey];
              if (!category) return [];
              return Object.values(category.subCategories).flatMap(subCategory => subCategory.resources);
            });

            return (
              <div key={step.step} className="mb-10 relative">
                <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold ring-8 ring-slate-100 dark:ring-slate-900">{step.step}</div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-1">{step.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{step.description}</p>
                  {resources.length > 0 && (
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                      <h5 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Suggested Resources:</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {resources.map((resource, resIndex) => (
                          <ResourceCard key={`${step.step}-${resIndex}`} resource={resource} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendationDashboard;