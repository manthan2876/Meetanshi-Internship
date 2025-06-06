import { useState, useEffect } from "react";
import { StudentInput } from "./StudentInput";
import { StudentList } from "./StudentList";

export function MainContent() {
    const [students, setStudents] = useState(() => {
        const data = localStorage.getItem("reactStudentForm");
        return data ? JSON.parse(data) : [];
    });

    function handleStudents(e, student) {
        if (student.studentId !== "" && student.name !== "" && student.branch !== "") {
            const stusentList = students.filter((crtStudent) => crtStudent.studentId === student.studentId);
            if(stusentList.length === 0){
                setStudents([...students,student]);
            }
        }
    }
    function handleDelete(e, data) {
        setStudents(students.filter((crtStudent) => crtStudent.studentId !== data.studentId));
    }
    useEffect(() => {
        localStorage.setItem("reactStudentForm", JSON.stringify(students));
    }, [students]);
    return (
        <>
            <h1 className="text-[2rem] font-semibold mt-[5rem] text-center mb-8">Student List</h1>
            <main className="flex flex-col items-center">
                <StudentInput handleInputStudent={handleStudents} />
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
                            {students.map((crtStudent, index) => {
                                return (
                                    <StudentList key={index} crtData={crtStudent} handleDeletebtn={handleDelete} />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
