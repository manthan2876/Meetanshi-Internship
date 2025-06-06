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
    return (
        <div className="mb-[2rem] flex flex-col gap-[.5rem] justify-center">
            <div>
                <label htmlFor="studentId" className="text-white">Student Id: </label>
                <input
                    type="text"
                    name="studentId"
                    id="studentId"
                    className="border-solid border-white border-[.01rem] m-l-[1rem] h-[2rem] rounded-[.5rem] px-[.3rem]"
                    onChange={(e) => handleStudent(e)}
                />
            </div>
            <div>
                <label htmlFor="name" className="text-white">Student Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="border-solid border-white border-[.01rem] m-l-[1rem] h-[2rem] rounded-[.5rem] px-[.3rem]"
                    onChange={(e) => handleStudent(e)}
                />
            </div>
            <div>
                <label htmlFor="branch" className="text-white">Branch: </label>
                <input
                    type="text"
                    name="branch"
                    id="branch"
                    className="border-solid border-white border-[.01rem] m-l-[1rem] h-[2rem] rounded-[.5rem] px-[.3rem]"
                    onChange={(e) => handleStudent(e)}
                />
            </div>
            <button
                className="bg-yellow-500 w-[4rem] h-[2rem] rounded-[.3rem]"
                onClick={(e) => handleInputStudent(e, student)}
            >
                Add
            </button>
        </div>
    );
}
