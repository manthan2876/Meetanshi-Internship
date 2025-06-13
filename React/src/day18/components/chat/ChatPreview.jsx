import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlinePushPin } from "react-icons/md";
import ChatMenu from './ChatMenu';

export default function ChatPreview({ chat, onClick, onArchive, onMute, onPin, onMarkAsRead, onMarkAsUnread, onAddToFavorites, onExitGroup, onBlock, onDeleteChat, onUnpin }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setShowContextMenu(true);
    };

    const handleCloseContextMenu = () => {
        setShowContextMenu(false);
    };

    const handleOptionClick = (option) => {
        handleCloseContextMenu();
        switch (option) {
            case 'Archive':
                onArchive(chat.id);
                break;
            case 'Mute':
                onMute(chat.id);
                break;
            case 'Pin':
                onPin(chat.id);
                break;
            case 'Mark as Read':
                onMarkAsRead(chat.id);
                break;
            case 'Mark as Unread':
                onMarkAsUnread(chat.id);
                break;
            case 'AddToFavorites':
                onAddToFavorites(chat.id);
                break;
            case 'Exit Group':
                onExitGroup(chat.id);
                break;
            case 'Block':
                onBlock(chat.id);
                break;
            case 'Delete Chat':
                onDeleteChat(chat.id);
                break;
            case 'Unpin':
                onUnpin(chat.id);
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={`p-3 rounded-md cursor-pointer flex items-start transition-all hover:bg-gray-100 relative`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img className="h-12 w-12 rounded-full mr-[1rem]" src={chat.image} alt="User" />
                {chat.active && <div className="ml-[.2rem] h-3 w-3 rounded-full border-[3px] border-white bg-green-500 absolute bottom-0 right-4"></div>}
            </div>
            <div className={`flex-1 ${chat.pinned ? "mr-[2rem]" : "mr-[3.5rem]"}`}>
                <p className="text-sm font-bold text-gray-800">{chat.name}</p>
                <p className={`text-xs text-gray-500 font-semibold ${chat.typing ? "text-green-500" : ""}`}>{chat.message}</p>
            </div>
            <div className="flex flex-col items-end justify-self-end gap-1">
                <div className="flex">
                    {chat.pinned && <MdOutlinePushPin className="text-gray-500 font-semibold mr-[.5rem] font-bold" />}
                    <span className="text-xs text-gray-500 font-semibold">{chat.time}</span>
                </div>
                {chat.oneTickBlue && <IoCheckmarkOutline className="text-blue-500 font-bold text-xl" />}
                {chat.oneTick && !chat.oneTickBlue && <IoCheckmarkOutline className="text-gray-500 font-bold text-xl" />}
                {chat.doubleTickBlue && <IoCheckmarkDoneOutline className="text-blue-500 font-bold text-xl" />}
                {chat.unread && (
                    <div className="flex items-center justify-center">
                        <p className="h-[1.15rem] w-[1.15rem] bg-red-500 rounded-full text-xs text-center text-white flex items-center justify-center">2</p>
                    </div>
                )}
            </div>
            {isHovered && (
                <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
                    <IoIosArrowDown
                        className="text-gray-500 cursor-pointer"
                        onClick={handleMenuClick}
                    />
                </div>
            )}

            {showContextMenu && (
                <ChatMenu
                    chat={chat}
                    showContextMenu={showContextMenu}
                    handleCloseContextMenu={handleCloseContextMenu}
                    handleOptionClick={handleOptionClick}
                />
            )}
        </div>
    );
}