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
        setShowContextMenu(!showContextMenu);
    };

    const handleCloseContextMenu = () => {
        setShowContextMenu(false);
    };

    const handleOptionClick = (action) => {
        switch (action) {
            case 'archive':
                onArchive(chat.name);
                break;
            case 'mute':
                onMute(chat.name);
                break;
            case 'pin':
                onPin(chat.name);
                break;
            case 'unpin':
                onUnpin(chat.name);
                break;
            case 'markAsRead':
                onMarkAsRead(chat.name);
                break;
            case 'markAsUnread':
                onMarkAsUnread(chat.name);
                break;
            case 'addToFavorites':
                onAddToFavorites(chat.name);
                break;
            case 'exitGroup':
                onExitGroup(chat.name);
                break;
            case 'block':
                onBlock(chat.name);
                break;
            case 'deleteChat':
                onDeleteChat(chat.name);
                break;
            default:
                break;
        }
        handleCloseContextMenu();
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
                {chat.oneTick && <IoCheckmarkOutline className="text-gray-500 font-bold text-xl" />}
                {chat.doubleTickblue && <IoCheckmarkDoneOutline className="text-blue-500 font-bold text-xl" />}
                {chat.unread && (
                    <div className="flex items-center justify-center">
                        <p className="h-[1.15rem] w-[1.15rem] bg-red-500 rounded-full text-xs text-center text-white">2</p>
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
