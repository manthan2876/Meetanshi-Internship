import React from 'react';

export default function MessageOptionsDialog() {
  return (
    <div className="absolute top-0 right-0 mt-2 mr-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg p-2 border border-gray-200 z-50">
      <ul>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Message info</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Reply</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">React</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Forward</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Pin</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Star</li>
        <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">Delete</li>
      </ul>
    </div>
  );
}
