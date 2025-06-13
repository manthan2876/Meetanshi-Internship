import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlinePushPin } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import ChatPreview from "./ChatPreview";
import AddChatDialog from './AddChatDialog'; // Import the new dialog component

export default function Sidebar({
    chats,
    onSelectChat,
    onAddChat,
    onArchive,
    onMute,
    onPin,
    onMarkAsRead,
    onMarkAsUnread,
    onAddToFavorites,
    onExitGroup,
    onBlock,
    onDeleteChat,
    onUnpin, // Accept onUnpin prop
}) {
    const [showSearch, setShowSearch] = useState(false);
    const [filterType, setFilterType] = useState("all");
    const [showAddChatDialog, setShowAddChatDialog] = useState(false); // State for dialog visibility
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        setSearchQuery(''); // Clear search query when hiding search
    };

    const handleFilterClick = (type) => {
        setFilterType(type);
    };

    const handleAddChatClick = () => {
        setShowAddChatDialog(true); // Show the dialog
    };

    const handleCloseAddChatDialog = () => {
        setShowAddChatDialog(false); // Hide the dialog
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredChats = chats.filter(chat => {
        const typeMatch = filterType === "all" || chat.type === filterType;
        const searchMatch = chat.name.toLowerCase().includes(searchQuery.toLowerCase());
        return typeMatch && searchMatch;
    });

    const pinnedChats = filteredChats.filter(chat => chat.pinned);
    const regularChats = filteredChats.filter(chat => !chat.pinned);

    return (
        <aside className="w-[25%] bg-white rounded-xl shadow py-4 px-2 flex flex-col gap-3 overflow-scroll">
            <div className="flex items-center justify-between mx-1">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <img className="h-12 w-12 rounded-full mr-[1rem]" src="https://i.pravatar.cc/40" alt="User" />
                        <div className="ml-[.2rem] h-3 w-3 rounded-full border-[3px] border-white bg-green-500 absolute bottom-0 right-4"></div>
                    </div>                    <div>
                        <p className="text-lg font-bold text-gray-800">Erik Ten Hag</p>
                        <p className="text-sm text-gray-500">Info account</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mx-1">
                    <IoSearch className="text-2xl text-gray-400 cursor-pointer" onClick={handleSearchClick} />
                    <FiPlus className="text-2xl text-gray-400 cursor-pointer" onClick={handleAddChatClick} />
                </div>
            </div>
            {showSearch && (
                <input
                    type="text"
                    placeholder="Search chats..."
                    className="mx-2 p-2 border rounded-md"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            )}
            <div className="bg-gray-200 flex justify-between p-2 rounded-full mx-2">
                <span
                    className={`font-semibold py-1 px-4 rounded-full w-fit text-center cursor-pointer ${filterType === "all" ? "bg-white text-blue-400" : "text-gray-500"}`}
                    onClick={() => handleFilterClick("all")}
                >
                    All
                </span>
                <span
                    className={`font-semibold py-1 px-4 rounded-full w-fit text-center cursor-pointer ${filterType === "personal" ? "bg-white text-blue-400" : "text-gray-500"}`}
                    onClick={() => handleFilterClick("personal")}
                >
                    Personal
                </span>
                <span
                    className={`font-semibold py-1 px-4 rounded-full w-fit text-center cursor-pointer ${filterType === "group" ? "bg-white text-blue-400" : "text-gray-500"}`}
                    onClick={() => handleFilterClick("group")}
                >
                    Groups
                </span>
            </div>
            <div>
                <div className="flex justify-between items-center mx-[1rem]">
                    <p className="text-sm text-gray-500 font-semibold mb-2">Pinned Message</p>
                    <MdOutlinePushPin className="text-gray-500 font-semibold" />
                </div>
                <div className="space-y-3">
                    {pinnedChats.map(chat => (
                        <ChatPreview
                            key={chat.name}
                            chat={chat}
                            onClick={() => onSelectChat(chat.name)}
                            onArchive={onArchive}
                            onMute={onMute}
                            onPin={onPin}
                            onMarkAsRead={onMarkAsRead}
                            onMarkAsUnread={onMarkAsUnread}
                            onAddToFavorites={onAddToFavorites}
                            onExitGroup={onExitGroup}
                            onBlock={onBlock}
                            onDeleteChat={onDeleteChat}
                            onUnpin={onUnpin} // Pass onUnpin prop
                        />
                    ))}
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center mx-[1rem]">
                    <p className="text-sm text-gray-500 font-semibold mb-2">Messages</p>
                    <BiMessageRounded className="text-gray-500 font-semibold" />
                </div>
                <div className="space-y-3">
                    {regularChats.map(chat => (
                        <ChatPreview
                            key={chat.name}
                            chat={chat}
                            onClick={() => onSelectChat(chat.name)}
                            onArchive={onArchive}
                            onMute={onMute}
                            onPin={onPin}
                            onMarkAsRead={onMarkAsRead}
                            onMarkAsUnread={onMarkAsUnread}
                            onAddToFavorites={onAddToFavorites}
                            onExitGroup={onExitGroup}
                            onBlock={onBlock}
                            onDeleteChat={onDeleteChat}
                            onUnpin={onUnpin} // Pass onUnpin prop
                        />
                    ))}
                </div>
            </div>
            {showAddChatDialog && <AddChatDialog onClose={handleCloseAddChatDialog} onAddChat={onAddChat} />} {/* Render the add chat dialog */}
        </aside>
    );
}
