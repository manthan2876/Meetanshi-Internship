// Updated ai.js
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients [...] 
Format your response in markdown to make it easier to render to a web page
`;

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getRecipeFromMistral(ingredients) {
  const ingredientsString = ingredients.join(",");
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [
          { 
            text: `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}. ` +
                  "Please give me a recipe you'd recommend I make!"
          }
        ]
      }
    ],
    generationConfig: {
      maxOutputTokens: 1024
    }
  });
  return response.text;
}
