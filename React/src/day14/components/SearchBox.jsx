import React from 'react';
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  return (
    <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 mx-2">
      <IoSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none text-gray-800"
      />
    </div>
  );
}
