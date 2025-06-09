import { MdDeleteForever, MdClose, MdCheck } from "react-icons/md";

export function StudentList({ crtData, handleDeletebtn }) {
    return (
        <tr className={`border-b border-gray-200 ${crtData.isPresent ? "bg-green-100" : "bg-red-100"}`}>
            <td className="py-3 px-6 text-center whitespace-nowrap">{crtData.studentId}</td>
            <td className="py-3 px-6 text-center">{crtData.name}</td>
            <td className="py-3 px-6 text-center">{crtData.branch}</td>
            <td className={`py-3 px-6 text-center text-xl flex items-center justify-center ${crtData.isPresent ? "text-green-500" : "text-red-500"}`}>
                {crtData.isPresent ? <MdCheck /> : <MdClose />}
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                    <button
                        className="text-xl mr-2 transform hover:scale-110 text-red-500"
                        onClick={() => handleDeletebtn(crtData)}
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            </td>
        </tr>
    );
}
