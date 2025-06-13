import React from 'react';

export default function ChatMenu({ chat, handleOptionClick }) {
    const isGroupChat = chat?.type === 'group';

    return (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('archive')}>Archive chat</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('mute')}>Mute notifications</li>
                {chat.pinned ? (
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('unpin')}>Unpin chat</li>
                ) : (
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('pin')}>Pin chat</li>
                )}
                {isGroupChat ? (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('markAsRead')}>Mark as read</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('addToFavorites')}>Add to favourites</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('exitGroup')}>Exit group</li>
                    </>
                ) : (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('markAsUnread')}>Mark as unread</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('addToFavorites')}>Add to favourites</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('block')}>Block</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600" onClick={() => handleOptionClick('deleteChat')}>Delete chat</li>
                    </>
                )}
            </ul>
        </div>
    );
}
