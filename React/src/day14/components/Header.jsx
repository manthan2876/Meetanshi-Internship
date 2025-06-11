import { IoCallOutline } from "react-icons/io5";
import { TbVideoPlus } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";

export default function Header({name, active}) {
  return (
    <header className="px-6 py-4 border-b flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/42" alt="User" />
        <div>
          <p className="text-xl font-bold text-gray-800">United Family 🔰</p>
<p className="text-sm text-green-500 font-semibold">{active ? `${name} is typing...` : '...'}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-2xl text-gray-500">
        <TbVideoPlus />
        <IoCallOutline />
        <HiDotsVertical />
      </div>
    </header>
  );
}