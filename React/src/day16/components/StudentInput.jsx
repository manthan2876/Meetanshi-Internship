import { useState } from "react";

export function StudentInput({ handleInputStudent }) {
    const [student, setStudent] = useState({
        studentId: "",
        name: "",
        branch: "",
        isPresent: false,
    });

    const [errors, setErrors] = useState({});

    function handleStudent(e) {
        const { name, value } = e.target;
        setStudent(student => ({
            ...student,
            [name]: name === 'isPresent' ? value === 'true' : value,
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    }

    function validateStudent(student) {
        const newErrors = {};
        if (!student.studentId.trim()) newErrors.studentId = "Student ID is required";
        if (!student.name.trim()) newErrors.name = "Name is required";
        if (!student.branch.trim()) newErrors.branch = "Branch is required";
        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const validationErrors = validateStudent(student);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const success = handleInputStudent(e, student);
        if (success) {
            // Reset form after successful submission
            setStudent({
                studentId: "",
                name: "",
                branch: "",
                isPresent: false,
            });
            setErrors({});
        }
    }

    return (
        <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-sm">
            <div className="mb-4">
                <label htmlFor="studentId" className="block text-gray-700 text-sm font-bold mb-2">Student ID:</label>
                <input
                    type="text"
                    name="studentId"
                    id="studentId"
                    value={student.studentId}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.studentId ? 'border-red-500' : ''}`}
                    onChange={(e) => handleStudent(e)}
                />
                {errors.studentId && <p className="text-red-500 text-xs italic mt-1">{errors.studentId}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Student Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={student.name}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                    onChange={(e) => handleStudent(e)}
                />
                {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
            </div>
            <div className="mb-6">
                <label htmlFor="branch" className="block text-gray-700 text-sm font-bold mb-2">Branch:</label>
                <input
                    type="text"
                    name="branch"
                    id="branch"
                    value={student.branch}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.branch ? 'border-red-500' : ''}`}
                    onChange={(e) => handleStudent(e)}
                />
                {errors.branch && <p className="text-red-500 text-xs italic mt-1">{errors.branch}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="isPresent" className="block text-gray-700 text-sm font-bold mb-2">Present:</label>
                <select
                    name="isPresent"
                    id="isPresent"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleStudent(e)}
                    value={student.isPresent.toString()}
                >
                    <option value="true">Present</option>
                    <option value="false">Absent</option>
                </select>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}
                >
                    Add Student
                </button>
            </div>
        </div>
    );
}
