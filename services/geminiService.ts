// Fix: Implement the Gemini API service to generate career plans.
import { GoogleGenAI, Type } from "@google/genai";
import type { UserProfile, CareerRecommendation } from '../types';

// Fix: Per coding guidelines, initialize without non-null assertion.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generatePrompt = (profile: UserProfile): string => {
  return `
    Analyze the following comprehensive user profile to generate a highly personalized career recommendation and a detailed learning plan.
    Go beyond a simple skills match. Consider the user's personality, work style preferences, and core values to recommend a career path that offers long-term fulfillment.

    **Comprehensive User Profile:**
    - **Name:** ${profile.name}
    - **Education Level:** ${profile.education}
    - **Professional Experience:** ${profile.experience}
    - **Technical Skills:** ${profile.skills.join(', ')}
    - **Interests:** ${profile.interests.join(', ')}
    - **Preferred Work Style:** ${profile.workStyle}
    - **Preferred Work Environment:** ${profile.workEnvironment}
    - **Preferred Types of Tasks:** ${profile.preferredTasks}
    - **Core Work Values:** ${profile.workValues.join(', ')}

    **Your Task:**
    Generate a response in JSON format. Your recommendation should be for a specific, actionable career path.

    **JSON Response Requirements:**
    1.  **'careerTitle'**: A string for the recommended career (e.g., "AI Ethics Specialist in HealthTech").
    2.  **'careerDescription'**: A compelling string (3-4 sentences) explaining *why* this career is an excellent fit, referencing specifics from their profile like their work values, interests, and work style. For example: "Given your interest in 'Data Science' and your core value of 'Social Impact', a career as..."
    3.  **'salaryExpectations'**: An object with 'min' and 'max' for the estimated annual salary in Indian Rupees (INR), appropriate for their experience level.
    4.  **'learningPlan'**: An array of objects for a step-by-step learning roadmap. Each step must have:
        - 'step': An integer (1, 2, 3, etc.).
        - 'title': A string for the step's title (e.g., "Build a Strong Ethical Framework").
        - 'description': A string explaining what the user will learn or achieve in this step.
        - 'resourceCategories': An array of strings. Each string must be a key from the provided list that contains relevant learning resources for this step. Use only the most relevant keys.
          **Available keys:** FRONTEND, BACKEND, DATABASE, DEVOPS, SYSTEMS.
    5.  **'crucialSkills'**: An array of strings. From the user's provided 'Technical Skills', identify the top 3-5 most critical skills for the recommended 'careerTitle' and list them here. This array must be a subset of the user's skills.
    6.  **'dayInTheLife'**: A string (2-3 sentences) describing the typical daily tasks and responsibilities for this role.
    7.  **'futureOutlook'**: A string (2-3 sentences) summarizing the future job outlook, growth potential, and emerging trends related to this career.
  `;
};

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    careerTitle: { type: Type.STRING },
    careerDescription: { type: Type.STRING },
    salaryExpectations: {
      type: Type.OBJECT,
      properties: {
        min: { type: Type.NUMBER },
        max: { type: Type.NUMBER },
      },
      required: ['min', 'max'],
    },
    learningPlan: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          step: { type: Type.INTEGER },
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          resourceCategories: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
        },
        required: ['step', 'title', 'description', 'resourceCategories'],
      },
    },
    crucialSkills: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    dayInTheLife: { type: Type.STRING },
    futureOutlook: { type: Type.STRING },
  },
  required: ['careerTitle', 'careerDescription', 'salaryExpectations', 'learningPlan', 'crucialSkills', 'dayInTheLife', 'futureOutlook'],
};

export const generateCareerPlan = async (profile: UserProfile): Promise<CareerRecommendation> => {
  const prompt = generatePrompt(profile);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro", // Using a more advanced model for complex JSON generation
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const text = response.text;
    const parsedJson = JSON.parse(text);

    // Basic validation to ensure the structure matches CareerRecommendation
    if (
      !parsedJson.careerTitle ||
      !parsedJson.learningPlan ||
      !Array.isArray(parsedJson.learningPlan) ||
      !parsedJson.crucialSkills ||
      !Array.isArray(parsedJson.crucialSkills) ||
      !parsedJson.dayInTheLife ||
      !parsedJson.futureOutlook
    ) {
      throw new Error("Invalid JSON structure received from API.");
    }

    return parsedJson as CareerRecommendation;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Rethrow a more user-friendly error or a generic one
    throw new Error("Failed to generate career plan from AI service.");
  }
};