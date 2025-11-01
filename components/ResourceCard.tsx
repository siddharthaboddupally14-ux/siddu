import React from 'react';
import { LearningResource } from '../types';

interface ResourceCardProps {
  resource: LearningResource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getIconForType = (type: LearningResource['type']) => {
    switch (type) {
      case 'video': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 001.553.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>;
      case 'article': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm2 1a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>;
      case 'course': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 011.056 0l4-1.82a1 1 0 011.056 0l4 1.82a1 1 0 011.056 0l2.606-1.183a1 1 0 000-1.84l-7-3zM3.25 9.442c-1.053 0-2.062.18-3 .512a1 1 0 00-1 1v6a1 1 0 001 1h16a1 1 0 001-1v-6a1 1 0 00-1-1c-.938-.332-1.947-.512-3-.512h-10z" /></svg>;
      case 'tutorial': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>;
      default: return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>;
    }
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 bg-white dark:bg-slate-700/50 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/40 transition-colors group border border-slate-200 dark:border-slate-700"
    >
      <span className="mr-3 text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">
        {getIconForType(resource.type)}
      </span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary-800 dark:group-hover:text-primary-200 truncate">
        {resource.title}
      </span>
    </a>
  );
};

export default ResourceCard;