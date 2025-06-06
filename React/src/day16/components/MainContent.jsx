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
    function handlePresent(id){
        setStudents(students => {
            return students.map((crtStudent) => {
                return crtStudent.studentId === id ? {...crtStudent, isPresent: !crtStudent.isPresent} : crtStudent 
            })
        })
    }
    useEffect(() => {
        localStorage.setItem("reactStudentForm", JSON.stringify(students));
    }, [students]);
    return (
        <>
            <h1 className="text-[2rem] font-semibold text-white mt-[5rem]">Student Form</h1>
            <main>
                <StudentInput handleInputStudent={handleStudents} />
                <div id="studentList">
                    {students.map((crtStudent, index) => {
                        return (
                            <StudentList key={index} crtData={crtStudent} handlePresentBtn={handlePresent} handleDeletebtn={handleDelete} />
                        );
                    })}
                </div>
            </main>
        </>
    );
}
