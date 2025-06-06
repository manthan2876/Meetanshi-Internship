import { MdCheckCircle, MdDeleteForever } from "react-icons/md";

export function StudentList({ crtData, handlePresentBtn, handleDeletebtn }) {

  return (
    <div
      className={`flex justify-between items-center my-4 px-6 py-4 rounded-[.5rem] shadow transition-colors duration-300 ${crtData.isPresent ? "bg-green-100" : "bg-red-100"
        }`}
    >
      <div className="flex flex-col">
        <span className="font-semibold text-gray-700">ID: <span className="font-normal">{crtData.studentId}</span></span>
        <span className="font-semibold text-gray-700">Name: <span className="font-normal">{crtData.name}</span></span>
        <span className="font-semibold text-gray-700">Branch: <span className="font-normal">{crtData.branch}</span></span>
      </div>
      <div className="flex items-center">
        <button
          aria-label={crtData.isPresent ? "Mark as absent" : "Mark as present"}
          className={`ml-4 text-3xl transition-colors duration-200 ${crtData.isPresent ? "text-green-400" : "text-red-400"
            } ${crtData.isPresent ? "hover:text-green-700" : "hover:text-red-700"} focus:outline-none`}
          onClick={() => handlePresentBtn(crtData.studentId)}
        >
          <MdCheckCircle />
        </button>
        <button
          className="text-red-500 text-2xl hover:text-red-700"
          onClick={(e) => handleDeletebtn(e, crtData)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}
