// MainContent.jsx
import { useState } from 'react';
import Details from "./Details";
import InputBox from "./InputBox";
import { processResume } from '../ai.js';

export default function MainContent() {
  const [resumeDetails, setResumeDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    setLoading(true);
    try {
      const data = await processResume(file);
      const match = data.match(/{[\s\S]*}/);
      if (match) {
        const parsed = JSON.parse(match[0]);
        setResumeDetails(parsed);
      } else {
        throw new Error("No JSON object found in AI response");
      }
    } catch (error) {
      console.error("Error processing resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex gap-[1rem] px-[1rem]">
      <InputBox handleUploadBtn={handleUpload} loading={loading} />
      <Details details={resumeDetails} />
    </main>
  );
}
