import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePushPin } from "react-icons/md";

export default function ChatPreview({ name, message, time, unread, typing, image, pinned, oneTickBlue, doubleTickblue, active, oneTick, onClick }) {
    return (
        <div className={`p-3 rounded-md cursor-pointer flex items-start transition-all hover:bg-gray-100`} onClick={onClick}>
            <div className="relative">
                <img className="h-12 w-12 rounded-full mr-[1rem]" src={image} alt="User" />
                {active && <div className="ml-[.2rem] h-3 w-3 rounded-full border-[3px] border-white bg-green-500 absolute bottom-0 right-4"></div>}
            </div>
            <div className={`w-[9rem] ${pinned ? "mr-[2rem]" : "mr-[3.5rem]"}`}>
                <p className="text-sm font-bold text-gray-800">{name}</p>
                <p className={`text-xs text-gray-500 font-semibold ${typing ? "text-green-500" : ""}`}>{message}</p>
            </div>
            <div className="flex flex-col items-end justify-self-end gap-1">
                <div className="flex">
                    {pinned && <MdOutlinePushPin className="text-gray-500 font-semibold mr-[.5rem] font-bold" />}
                    <span className="text-xs text-gray-500 font-semibold">{time}</span>
                </div>
                {oneTickBlue && <IoCheckmarkOutline className="text-blue-500 font-bold text-xl" />}
                {oneTick && <IoCheckmarkOutline className="text-gray-500 font-bold text-xl" />}
                {doubleTickblue && <IoCheckmarkDoneOutline className="text-blue-500 font-bold text-xl" />}
                {unread && (
                    <div className="flex items-center justify-center">
                        <p className="h-[1.15rem] w-[1.15rem] bg-red-500 rounded-full text-xs text-center text-white">2</p>
                    </div>
                )}
            </div>
        </div>
    );
}
