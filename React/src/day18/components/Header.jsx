import { useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { TbVideoPlus } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import HeaderOptionsDialog from './HeaderOptions';

export default function Header({ selectedChat, image, name, active, typing }) {
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const handleDotsClick = () => {
    setShowHeaderOptions(!showHeaderOptions);
  };

  return (
    <header className="px-6 py-4 border-b flex items-center justify-between relative">
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 rounded-full" src={image || "https://i.pravatar.cc/42"} alt="User" />
        <div>
          <p className="text-xl font-bold text-gray-800">{selectedChat || 'Select a chat'}</p>
          <p className="text-sm text-green-500 font-semibold">
            {active ? (typing ? `${name} is typing...` : 'online') : '...'}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-2xl text-gray-500">
        <TbVideoPlus />
        <IoCallOutline />
        <HiDotsVertical className="cursor-pointer" onClick={handleDotsClick} />
        {showHeaderOptions && <HeaderOptionsDialog onClose={() => setShowHeaderOptions(false)} />}
      </div>
    </header>
  );
}
