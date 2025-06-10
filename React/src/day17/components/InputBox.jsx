// InputBox.jsx
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { LuImagePlus } from "react-icons/lu";
import CircularProgress from '@mui/material/CircularProgress';

export default function InputBox({ handleUploadBtn, loading }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
            handleUploadBtn(selectedFile);
        } else {
            alert("Please select a file before uploading.");
        }
    };

    return (
        <div className="my-8 p-8 bg-white rounded-xl shadow-lg border border-gray-200 w-1/4 min-w-80">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Resume</h2>
                <p className="text-gray-600 text-sm">Upload your resume to extract information automatically</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                    <label htmlFor="resume" className="block text-gray-700 text-sm font-semibold mb-3">
                        Choose File:
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200 flex flex-col items-center">
                        <LuImagePlus className="h-12 w-12 text-gray-400 mb-2" />
                        <input
                            type="file"
                            name="resume"
                            id="resume"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer mb-4"
                        />
                        <p className="text-gray-600 font-medium mb-1">Click to upload or drag and drop</p>
                        <p className="text-gray-400 text-xs mb-2">PDF</p>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-md"
                >
                    <span className="flex items-center justify-center">
                        <FiUploadCloud className="w-5 h-5 mr-2" />
                        Upload Resume
                    </span>
                </button>

                {loading && (
                    <div className="text-center text-xl text-blue-500 font-medium mt-2 flex justify-center items-center gap-[.5rem]">
                        Loading...      <CircularProgress className="text-sm"/>
                    </div>
                )}
            </form>
        </div>
    );
}
