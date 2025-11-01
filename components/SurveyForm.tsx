import React, { useState, FormEvent } from 'react';
import { UserProfile, EducationLevel, ExperienceLevel, WorkStyle, WorkEnvironment, PreferredTasks, WorkValue } from '../types';

interface SurveyFormProps {
  onSubmit: (profile: UserProfile) => void;
  userProfile: UserProfile | null;
  error: string | null;
  onCancel: () => void;
}

const SurveyForm: React.FC<SurveyFormProps> = ({ onSubmit, userProfile: initialProfile, error, onCancel }) => {
  const [profile, setProfile] = useState<UserProfile>(initialProfile || {
    name: '',
    education: 'Bachelor of Technology (B.Tech)',
    experience: '0-2 years',
    skills: [],
    interests: [],
    workStyle: 'A Good Mix',
    workEnvironment: 'Flexible & Remote-friendly',
    preferredTasks: 'Analytical & Problem-solving',
    workValues: [],
  });

  const [skillsInput, setSkillsInput] = useState(initialProfile?.skills.join(', ') || '');
  const [interestsInput, setInterestsInput] = useState(initialProfile?.interests.join(', ') || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleWorkValuesChange = (value: WorkValue) => {
    setProfile(prev => {
      const newWorkValues = prev.workValues.includes(value)
        ? prev.workValues.filter(v => v !== value)
        : [...prev.workValues, value];
      return { ...prev, workValues: newWorkValues };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const skills = skillsInput.split(',').map(s => s.trim()).filter(Boolean);
    const interests = interestsInput.split(',').map(i => i.trim()).filter(Boolean);
    onSubmit({ ...profile, skills, interests });
  };
  
  const educationLevels: EducationLevel[] = [
    'High School Diploma or Equivalent',
    'Associate Degree',
    'Bachelor of Technology (B.Tech)',
    'Bachelor of Science (B.S.)',
    'Master of Technology (M.Tech)',
    'Master of Science (M.S.)',
    'PhD',
    'Other'
  ];
  const experienceLevels: ExperienceLevel[] = ['0-2 years', '2-5 years', '5-10 years', '10+ years'];
  const workStyles: WorkStyle[] = ['Mostly Collaborative', 'Mostly Independent', 'A Good Mix'];
  const workEnvironments: WorkEnvironment[] = ['Fast-paced & Dynamic', 'Structured & Predictable', 'Flexible & Remote-friendly'];
  const preferredTasksOptions: PreferredTasks[] = ['Creative & Design-oriented', 'Analytical & Problem-solving', 'Hands-on & Building'];
  const workValuesOptions: WorkValue[] = ['Work-Life Balance', 'High Earning Potential', 'Job Security', 'Continuous Learning', 'Social Impact'];

  const inputClass = "w-full p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow";
  const labelClass = "block text-slate-700 dark:text-slate-200 font-semibold mb-2";

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{initialProfile ? 'Edit Your Profile' : 'Tell Us About Yourself'}</h2>
        <p className="text-slate-600 dark:text-slate-300 mt-2">The more we know, the better your recommendation will be.</p>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset className="border-t border-slate-300 dark:border-slate-600 pt-6">
          <legend className="text-xl font-semibold mb-4 px-2 text-slate-800 dark:text-slate-200">Basic Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text" name="name" value={profile.name} onChange={handleInputChange} className={inputClass} required />
              </div>
              <div>
                  <label className={labelClass}>Education Level</label>
                  <select name="education" value={profile.education} onChange={handleInputChange} className={inputClass}>
                      {educationLevels.map(level => <option key={level} value={level}>{level}</option>)}
                  </select>
              </div>
               <div>
                  <label className={labelClass}>Years of Experience</label>
                  <select name="experience" value={profile.experience} onChange={handleInputChange} className={inputClass}>
                      {experienceLevels.map(level => <option key={level} value={level}>{level}</option>)}
                  </select>
              </div>
          </div>
        </fieldset>

        <fieldset className="border-t border-slate-300 dark:border-slate-600 pt-6">
           <legend className="text-xl font-semibold mb-4 px-2 text-slate-800 dark:text-slate-200">Skills & Interests</legend>
            <div>
                <label className={labelClass}>Technical Skills (comma-separated)</label>
                <input type="text" value={skillsInput} onChange={e => setSkillsInput(e.target.value)} placeholder="e.g., React, Node.js, Python" className={inputClass} required />
            </div>
            <div>
                <label className={labelClass}>Interests (comma-separated)</label>
                <input type="text" value={interestsInput} onChange={e => setInterestsInput(e.target.value)} placeholder="e.g., AI, Data Visualization, Open Source" className={inputClass} required />
            </div>
        </fieldset>
        
        <fieldset className="border-t border-slate-300 dark:border-slate-600 pt-6">
            <legend className="text-xl font-semibold mb-4 px-2 text-slate-800 dark:text-slate-200">Work Preferences</legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                     <label className={labelClass}>Preferred Work Style</label>
                     <select name="workStyle" value={profile.workStyle} onChange={handleInputChange} className={inputClass}>
                        {workStyles.map(style => <option key={style} value={style}>{style}</option>)}
                    </select>
                </div>
                 <div>
                     <label className={labelClass}>Preferred Work Environment</label>
                     <select name="workEnvironment" value={profile.workEnvironment} onChange={handleInputChange} className={inputClass}>
                        {workEnvironments.map(env => <option key={env} value={env}>{env}</option>)}
                    </select>
                </div>
                 <div>
                     <label className={labelClass}>Preferred Types of Tasks</label>
                     <select name="preferredTasks" value={profile.preferredTasks} onChange={handleInputChange} className={inputClass}>
                        {preferredTasksOptions.map(task => <option key={task} value={task}>{task}</option>)}
                    </select>
                </div>
            </div>
        </fieldset>
        
        <fieldset className="border-t border-slate-300 dark:border-slate-600 pt-6">
            <legend className="text-xl font-semibold mb-4 px-2 text-slate-800 dark:text-slate-200">What do you value most in a job?</legend>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {workValuesOptions.map(value => {
                  const isChecked = profile.workValues.includes(value);
                  return (
                    <label key={value} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all border ${
                      isChecked
                        ? 'bg-primary-50 dark:bg-primary-900/50 border-primary-500'
                        : 'bg-slate-100 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
                    }`}>
                        <input type="checkbox" checked={isChecked} onChange={() => handleWorkValuesChange(value)} className="hidden" />
                        <div className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center ${isChecked ? 'bg-primary-600 border-primary-600' : 'border-slate-400'}`}>
                          {isChecked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className={`font-medium ${isChecked ? 'text-primary-800 dark:text-primary-100' : 'text-slate-700 dark:text-slate-200'}`}>{value}</span>
                    </label>
                  )
                })}
            </div>
        </fieldset>

        <div className="flex justify-center items-center gap-4 pt-6">
            <button type="button" onClick={onCancel} className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 text-slate-800 dark:text-slate-200 font-bold py-3 px-10 rounded-full text-lg transition-all transform hover:scale-105">
                {initialProfile ? 'Cancel' : 'Go Back'}
            </button>
            <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/40">
                {initialProfile ? 'Update & Regenerate' : 'Generate My Career Plan'}
            </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;