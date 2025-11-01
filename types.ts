// Fix: Define all necessary types for the application.
export enum AppState {
  WELCOME,
  SURVEY,
  LOADING,
  RESULTS,
}

export type EducationLevel =
  | 'High School Diploma or Equivalent'
  | 'Associate Degree'
  | 'Bachelor of Technology (B.Tech)'
  | 'Bachelor of Science (B.S.)'
  | 'Master of Technology (M.Tech)'
  | 'Master of Science (M.S.)'
  | 'PhD'
  | 'Other';

export type ExperienceLevel = '0-2 years' | '2-5 years' | '5-10 years' | '10+ years';
export type WorkStyle = 'Mostly Collaborative' | 'Mostly Independent' | 'A Good Mix';
export type WorkEnvironment = 'Fast-paced & Dynamic' | 'Structured & Predictable' | 'Flexible & Remote-friendly';
export type PreferredTasks = 'Creative & Design-oriented' | 'Analytical & Problem-solving' | 'Hands-on & Building';
export type WorkValue = 'Work-Life Balance' | 'High Earning Potential' | 'Job Security' | 'Continuous Learning' | 'Social Impact';

export interface UserProfile {
  name: string;
  education: EducationLevel;
  experience: ExperienceLevel;
  skills: string[];
  interests: string[];
  workStyle: WorkStyle;
  workEnvironment: WorkEnvironment;
  preferredTasks: PreferredTasks;
  workValues: WorkValue[];
}

export interface LearningResource {
  title: string;
  url: string;
  type: 'video' | 'article' | 'course' | 'tutorial';
}

export interface LearningSubCategory {
  name: string;
  resources: LearningResource[];
}

export interface LearningResourceCategory {
  name: string;
  subCategories: Record<string, LearningSubCategory>;
}

export interface LearningStep {
  step: number;
  title: string;
  description: string;
  resourceCategories: string[]; // e.g., ['FRONTEND', 'DEVOPS']
}

export interface SalaryExpectations {
  min: number;
  max: number;
}

export interface CareerRecommendation {
  careerTitle: string;
  careerDescription: string;
  salaryExpectations: SalaryExpectations;
  learningPlan: LearningStep[];
  crucialSkills: string[];
  dayInTheLife: string;
  futureOutlook: string;
}