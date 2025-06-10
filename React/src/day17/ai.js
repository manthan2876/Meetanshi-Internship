import {
  GoogleGenAI,
  createPartFromUri,
} from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a PDF resume file.
Extract the following details and return them as a JSON object with these properties:
{
  "name": "",
  "email": "",
  "phone": "",
  "education": [
    {
      "degree": "",
      "university": "",
      "graduation_year": "",
      "score":"",
    }
  ],
  "experience": [
    {
      "title": "",
      "company": "",
      "start_date": "",
      "end_date": "",
      "responsibilities": []
    }
  ],
  "skills": [],
  "projects": [
    {
      "title": "",
      "description": "",
      "link": ""
    }
  ],
  "summary": ""
}
Only return valid JSON. Do not include any explanations, markdown, or code blocks.
`;

const apiKey = "AIzaSyBzAKZsi1fU98yV0IWtnZmmlqJbl9N7T8c";

const ai = new GoogleGenAI({ apiKey });

export async function processResume(file) {
  try {
    const myfile = await ai.files.upload({
      file,
      config: { mimeType: file.type || "application/pdf" },
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            createPartFromUri(myfile.uri, myfile.mimeType),
            {
              text: `${SYSTEM_PROMPT}\n\nPlease extract the details from this resume and return only the JSON object as specified above.`,
            }
          ]
        }
      ],
    });
    console.log(response.text);
    return response.text;
  } catch (err) {
    console.error("Error:", err.message);
    throw err;
  }
}
