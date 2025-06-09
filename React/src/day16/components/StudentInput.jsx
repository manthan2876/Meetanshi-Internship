import { useState, useEffect } from "react";

export function StudentInput({
    handleInputStudent,
    editMode = false,
    initialStudent = null,
    onEditConfirm,
    onEditCancel
}) {
    const [student, setStudent] = useState(
        initialStudent || { studentId: "", name: "", branch: "", isPresent: false }
    );
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editMode && initialStudent) {
            setStudent(initialStudent);
        }
    }, [editMode, initialStudent]);

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
        if (editMode) {
            onEditConfirm(student);
        } else {
            const success = handleInputStudent(e, student);
            if (success) {
                setStudent({ studentId: "", name: "", branch: "", isPresent: false });
                setErrors({});
            }
        }
    }

    return (
        <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-sm">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="studentId" className="block text-gray-700 text-sm font-bold mb-2">Student ID:</label>
                    <input
                        type="text"
                        name="studentId"
                        id="studentId"
                        value={student.studentId}
                        disabled={editMode}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.studentId ? 'border-red-500' : ''}`}
                        onChange={handleStudent}
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
                        onChange={handleStudent}
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
                        onChange={handleStudent}
                    />
                    {errors.branch && <p className="text-red-500 text-xs italic mt-1">{errors.branch}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="isPresent" className="block text-gray-700 text-sm font-bold mb-2">Present:</label>
                    <select
                        name="isPresent"
                        id="isPresent"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleStudent}
                        value={student.isPresent.toString()}
                    >
                        <option value="true">Present</option>
                        <option value="false">Absent</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className={`bg-${editMode ? "green" : "blue"}-500 hover:bg-${editMode ? "green" : "blue"}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                        type="submit"
                    >
                        {editMode ? "Update Student" : "Add Student"}
                    </button>
                    {editMode && (
                        <button
                            className="ml-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={onEditCancel}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
