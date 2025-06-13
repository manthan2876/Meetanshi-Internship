import React, { useEffect, useRef } from 'react';

export default function ChatMenu({ chat, handleOptionClick, handleCloseContextMenu }) {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                handleCloseContextMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleCloseContextMenu]);

    const isGroupChat = chat.type === 'group';

    return (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10" ref={menuRef}>
            <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Archive')}>Archive chat</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Mute')}>Mute notifications</li>
                {chat.pinned ? (
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Unpin')}>Unpin chat</li>
                ) : (
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Pin')}>Pin chat</li>
                )}
                {isGroupChat ? (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Mark as Read')}>Mark as read</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('AddToFavorites')}>Add to favourites</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Exit Group')}>Exit group</li>
                    </>
                ) : (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Mark as Unread')}>Mark as unread</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('AddToFavorites')}>Add to favourites</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Block')}>Block</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600" onClick={() => handleOptionClick('Delete Chat')}>Delete chat</li>
                    </>
                )}
            </ul>
        </div>
    );
}
