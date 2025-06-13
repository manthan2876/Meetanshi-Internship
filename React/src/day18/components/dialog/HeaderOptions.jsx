import React, { useEffect, useRef } from 'react';

export default function HeaderOptionsDialog({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div 
      ref={dialogRef}
      className="absolute top-[3rem] right-2 mt-2 mr-2 w-48 bg-white text-gray-800 text-sm rounded-lg shadow-lg p-2 border border-gray-200 z-50"
    >
      <ul>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Contact info</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Select messages</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Disappearing messages</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Close chat</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Clear chat</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Delete chat</li>
      </ul>
    </div>
  );
}