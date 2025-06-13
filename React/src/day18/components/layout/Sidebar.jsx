import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlinePushPin } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import ChatPreview from "../chat/ChatPreview";
import AddChatDialog from '../dialog/AddChatDialog';

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
    onUnpin,
    users,
    currentUser,
    onSelectUser,
}) {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [showAddChatDialog, setShowAddChatDialog] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        setSearchQuery('');
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterClick = (type) => {
        setFilterType(type);
    };

    const handleAddChatClick = () => {
        setShowAddChatDialog(true);
    };

    const handleCloseAddChatDialog = () => {
        setShowAddChatDialog(false);
    };

    // Fixed user selection handler
    const handleUserChange = (e) => {
        const selectedUserId = e.target.value;
        const selectedUser = users.find(user => user.id === selectedUserId);
        if (selectedUser) {
            onSelectUser(selectedUser); // Pass the user object, not just the ID
        }
    };

    const filteredChats = chats.filter(chat => {
        const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterType === 'all' || chat.type === filterType;
        return matchesSearch && matchesFilter;
    });

    const pinnedChats = filteredChats.filter(chat => chat.pinned);
    const regularChats = filteredChats.filter(chat => !chat.pinned);

    return (
        <aside className="w-[25%] bg-white rounded-xl shadow py-4 px-2 flex flex-col gap-3 overflow-scroll">
            <div className="flex items-center justify-between mx-1">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <img className="h-12 w-12 rounded-full mr-[1rem]" src={currentUser.image} alt="User" />
                    </div>
                    <div className="flex flex-col">
                        <select
                            className="text-lg font-bold text-gray-800 bg-transparent border-none focus:outline-none cursor-pointer"
                            value={currentUser.id}
                            onChange={handleUserChange}
                        >
                            {users.map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))}
                        </select>
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
            
            {pinnedChats.length > 0 && (
                <div>
                    <div className="flex justify-between items-center mx-[1rem]">
                        <p className="text-sm text-gray-500 font-semibold mb-2">Pinned Message</p>
                        <MdOutlinePushPin className="text-gray-500 font-semibold" />
                    </div>
                    <div className="space-y-3">
                        {pinnedChats.map(chat => (
                            <ChatPreview
                                key={chat.id}
                                chat={chat}
                                onClick={() => onSelectChat(chat)}
                                onArchive={onArchive}
                                onMute={onMute}
                                onPin={onPin}
                                onMarkAsRead={onMarkAsRead}
                                onMarkAsUnread={onMarkAsUnread}
                                onAddToFavorites={onAddToFavorites}
                                onExitGroup={onExitGroup}
                                onBlock={onBlock}
                                onDeleteChat={onDeleteChat}
                                onUnpin={onUnpin}
                            />
                        ))}
                    </div>
                </div>
            )}
            
            <div>
                <div className="flex justify-between items-center mx-[1rem]">
                    <p className="text-sm text-gray-500 font-semibold mb-2">Messages</p>
                    <BiMessageRounded className="text-gray-500 font-semibold" />
                </div>
                <div className="space-y-3">
                    {regularChats.map(chat => (
                        <ChatPreview
                            key={chat.id}
                            chat={chat}
                            onClick={() => onSelectChat(chat)}
                            onArchive={onArchive}
                            onMute={onMute}
                            onPin={onPin}
                            onMarkAsRead={onMarkAsRead}
                            onMarkAsUnread={onMarkAsUnread}
                            onAddToFavorites={onAddToFavorites}
                            onExitGroup={onExitGroup}
                            onBlock={onBlock}
                            onDeleteChat={onDeleteChat}
                            onUnpin={onUnpin}
                        />
                    ))}
                </div>
            </div>
            
            {showAddChatDialog && (
                <AddChatDialog 
                    onClose={handleCloseAddChatDialog} 
                    onAddChat={onAddChat} 
                    users={users.filter(user => user.id !== currentUser.id)} // Don't show current user in add chat dialog
                />
            )}
        </aside>
    );
}