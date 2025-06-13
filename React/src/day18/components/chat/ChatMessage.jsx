import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

export default function ChatMessage({ message, currentUser }) {
    const isCurrentUser = message.sender === currentUser.id;

    const renderTicks = () => {
        if (message.doubleTickBlue) {
            return <IoCheckmarkDoneOutline className="text-blue-500 font-bold text-xl" />;
        } else if (message.oneTickBlue) {
            return <IoCheckmarkOutline className="text-blue-500 font-bold text-xl" />;
        } else if (message.oneTick) {
            return <IoCheckmarkOutline className="text-gray-500 font-bold text-xl" />;
        }
        return null;
    };

    return (
        <div className={`relative flex flex-col mb-4 ${isCurrentUser ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-md p-3 rounded-2xl relative ${
                isCurrentUser
                    ? 'bg-green-500 text-white'
                    : 'bg-white border border-gray-200 text-gray-800'
            }`}>
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <div className={`flex items-center justify-end mt-1 gap-1 ${
                    isCurrentUser ? 'text-green-100' : 'text-gray-500'
                }`}>
                    <span className="text-xs">{message.time}</span>
                    {renderTicks()}
                </div>
            </div>
        </div>
    );
}
