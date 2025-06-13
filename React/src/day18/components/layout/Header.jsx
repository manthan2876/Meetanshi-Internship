import { useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { TbVideoPlus } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import HeaderOptionsDialog from '../dialog/HeaderOptions';

export default function Header({ selectedChat, typing, typingName, active }) {
    const [showOptions, setShowOptions] = useState(false);
    
    // Determine status based on typing and active states
    const getStatus = () => {
        if (typing && typingName) {
            return `${typingName} is typing...`;
        }
        return active ? 'Online' : 'Last seen recently';
    };

    const status = getStatus();
    
    return (
        <header className="bg-gray-50 border-b p-4 flex items-center justify-between relative">
            <div className="flex items-center">
                <img
                    className="h-10 w-10 rounded-full mr-3"
                    src={selectedChat.image}
                    alt={selectedChat.name}
                />
                <div>
                    <h2 className="font-semibold text-gray-800">{selectedChat.name}</h2>
                    <p className={`text-sm ${typing ? 'text-green-500' : 'text-gray-500'}`}>
                        {status}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <IoCallOutline className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
                <TbVideoPlus className="text-gray-600 text-xl cursor-pointer hover:text-gray-800" />
                <HiDotsVertical
                    className="text-gray-600 text-xl cursor-pointer hover:text-gray-800"
                    onClick={() => setShowOptions(!showOptions)}
                />
            </div>
            
            {showOptions && (
                <HeaderOptionsDialog onClose={() => setShowOptions(false)} />
            )}
        </header>
    );
}