import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

export default function ChatMessage({ name, time, text, me = false, images = [], image }) {
    return (
        <div>
            {me ? (
                <div className="flex gap-[.5rem] justify-end items-center mb-[.5rem]">
                    <p className="text-sm font-semibold">You</p>
                    <div className="ml-[.2rem] h-1 w-1 rounded-full bg-black"></div>
                    <p className="text-xs text-gray-400 ml-1 font-bold">{time}</p>
                    <IoCheckmarkDoneOutline className="text-blue-500 font-bold text-xl" />
                </div>
            ) : (
                <div className="flex gap-[.5rem] items-center relative mb-[.5rem]">
                    <img className="h-9 w-9 rounded-full absolute bottom-[-20px]" src={image} alt="User" />
                    <p className="text-sm font-semibold ml-[3rem]">{name}</p>
                    <div className="ml-[.2rem] h-1 w-1 rounded-full bg-black"></div>
                    <p className="text-xs text-gray-400 ml-1 font-bold">{time}</p>
                </div>
            )}
            <div className={`flex flex-col justify-center ${me ? 'items-end' : 'items-start'}  ml-[3rem]`}>
                <div className={`max-w-md p-4 rounded-2xl relative ${me ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 text-gray-800'}`}>
                    <p className="text-sm whitespace-pre-line font-semibold">{text}</p>
                    <HiDotsVertical className={`text-xl text-gray-400 ml-[.5rem] absolute ${ me? "bottom-[40%] left-[-35px]" : "bottom-[30%] right-[-30px]"}`}/>
                </div>
                <div>
                    {images.length > 0 && (
                        <div className="mt-3 grid grid-cols-2 gap-3 w-[28rem]">
                            {images.map((img, i) => (
                                <img key={i} src={img} className="w-full rounded-lg" alt="Visual" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}