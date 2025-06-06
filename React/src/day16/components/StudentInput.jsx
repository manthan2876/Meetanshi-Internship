import { useState } from "react";

export function StudentInput({ handleInputStudent }) {
    const [student, setStudent] = useState({
        studentId: "",
        name: "",
        branch: "",
        isPresent: false,
    });
    function handleStudent(e) {
        setStudent(student => ({
            ...student,
            [e.target.name]: e.target.value,
        }));
    }
    function handleStudentPresence(e) {
        setStudent(student => ({
            ...student,
            [e.target.name]: e.target.checked,
        }))
    }
    return (
        <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-sm">
            <div className="mb-4">
                <label htmlFor="studentId" className="block text-gray-700 text-sm font-bold mb-2">Student ID:</label>
                <input
                    type="text"
                    name="studentId"
                    id="studentId"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleStudent(e)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Student Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleStudent(e)}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="branch" className="block text-gray-700 text-sm font-bold mb-2">Branch:</label>
                <input
                    type="text"
                    name="branch"
                    id="branch"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleStudent(e)}
                />
            </div>
            <div className="mb-6 flex gap-[.5rem] text-center items-center">
                <label htmlFor="isPresent" className="block text-gray-700 text-sm font-bold mb-2">Present:</label>
                <input
                    type="checkbox"
                    name="isPresent"
                    id="isPresent"
                    onChange={(e) => handleStudentPresence(e)}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={(e) => handleInputStudent(e, student)}
                >
                    Add Student
                </button>
            </div>
        </div>
    );
}
