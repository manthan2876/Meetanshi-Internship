import { useState, useEffect } from "react";
import { StudentInput } from "./StudentInput";
import { StudentList } from "./StudentList";
import { DeleteBox } from "./DeleteBox";

export function MainContent() {
    const [students, setStudents] = useState(() => {
        const data = localStorage.getItem("reactStudentForm");
        return data ? JSON.parse(data) : [];
    });
    const [showDeleteBox, setShowDeleteBox] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);

    const handleDeleteClick = ((student) => {
        setStudentToDelete(student);
        setShowDeleteBox(true);
    }, []);

    const handleConfirmDelete = (() => {
        setStudents(prevStudents => 
            prevStudents.filter((crtStudent) => crtStudent.studentId !== studentToDelete.studentId)
        );
        setShowDeleteBox(false);
        setStudentToDelete(null);
    }, [studentToDelete]);

    const handleCancelDelete = (() => {
        setShowDeleteBox(false);
        setStudentToDelete(null);
    }, []);

    const handleStudents = ((e, student) => {
        if (student.studentId !== "" && student.name !== "" && student.branch !== "") {
            const studentList = students.filter((crtStudent) => crtStudent.studentId === student.studentId);
            if (studentList.length === 0) {
                setStudents(prevStudents => [...prevStudents, student]);
                return true;
            } else {
                alert("Student with this ID already exists!");
                return false;
            }
        }
        return false;
    }, [students]);

    useEffect(() => {
        localStorage.setItem("reactStudentForm", JSON.stringify(students));
    }, [students]);

    return (
        <>
            <h1 className="text-[2rem] font-semibold mt-[3.5rem] text-center mb-8">Student List</h1>
            <main className="flex flex-col items-center">
                <StudentInput handleInputStudent={handleStudents} />
                {showDeleteBox && (
                    <DeleteBox
                        student={studentToDelete}
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                    />
                )}
                <div className="w-full max-w-3xl mt-8 bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                                <th className="py-3 px-6 text-center">Student ID</th>
                                <th className="py-3 px-6 text-center">Name</th>
                                <th className="py-3 px-6 text-center">Branch</th>
                                <th className="py-3 px-6 text-center">Present</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {students.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="py-8 text-center text-gray-500">
                                        No students added yet
                                    </td>
                                </tr>
                            ) : (
                                students.map((crtStudent) => (
                                    <StudentList
                                        key={crtStudent.studentId}
                                        crtData={crtStudent}
                                        handleDeletebtn={handleDeleteClick}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
