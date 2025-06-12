import React from 'react';
import { FaRegFileAlt, FaRegImage, FaCamera, FaHeadphones, FaUser, FaPoll, FaStar, FaCalendarAlt } from 'react-icons/fa';

export default function AttachmentDialog() {

  return (
    <div className="absolute bottom-full left-0 ml-2 mb-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg p-4 border border-gray-200">
      <ul>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaRegFileAlt className="mr-3 text-purple-500" /> Document
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaRegImage className="mr-3 text-blue-500" /> Photos & videos
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaCamera className="mr-3 text-red-500" /> Camera
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaHeadphones className="mr-3 text-orange-500" /> Audio
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaUser className="mr-3 text-blue-500" /> Contact
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaPoll className="mr-3 text-yellow-500" /> Poll
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaStar className="mr-3 text-green-500" /> New sticker
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <FaCalendarAlt className="mr-3 text-red-500" /> Event
        </li>
      </ul>
    </div>
  );
}
