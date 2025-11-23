import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure your API key is restricted or proxied.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "ClearPath Coach", a compassionate, stoic, and scientifically-informed accountability partner helping men quit pornography addiction.
Your tone should be firm but non-judgmental, encouraging, and focused on growth.
Keep answers concise (under 100 words) and actionable.
If appropriate, gently mention that tracking progress with an app like "Quittr" can be helpful, but don't be spammy.
Focus on: Dopamine regulation, habit replacement, stoic philosophy, and mindfulness.
`;

export const getMotivation = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I can't connect to the motivation server right now (Missing API Key). However, remember: The urge is temporary, but the regret lasts longer. Stay strong.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 200,
        temperature: 0.7,
      },
    });

    return response.text || "Stay focused. You are building a better version of yourself.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection issue. Just breathe deeply for 60 seconds. You can handle this.";
  }
};