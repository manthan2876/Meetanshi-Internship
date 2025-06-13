import { useState } from 'react';

export default function AddChatDialog({ onClose, onAddChat }) {
    const [newChat, setNewChat] = useState({
        name: '',
        type: 'personal',
        image: 'https://i.pravatar.cc/50',
        typing: false,
        active: false,
        typingName: '',
        message: '',
        time: '',
        pinned: false,
        doubleTickBlue: false,
        unread: false,
        oneTick: false,
        oneTickBlue: false,
    });

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setNewChat(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAddClick = () => {
        if (newChat.name.trim()) {
            onAddChat(newChat);
            onClose();
        } else {
            alert("Chat name cannot be empty.");
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
                <h2 className="text-lg font-bold mb-4">Add New Chat</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Chat Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter chat name"
                        value={newChat.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                        Chat Type
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="type"
                        value={newChat.type}
                        onChange={handleInputChange}
                    >
                        <option value="personal">Personal</option>
                        <option value="group">Group</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="text"
                        placeholder="Enter image URL"
                        value={newChat.image}
                        onChange={handleInputChange}
                    />
                </div>
                 
                <div className="flex justify-end gap-4">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleAddClick}
                    >
                        Add Chat
                    </button>
                </div>
            </div>
        </div>
    );
}
