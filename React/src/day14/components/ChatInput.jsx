import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

export default function ChatInput() {
  return (
    <div className="p-4 border-t flex items-center gap-2">
      <MdAttachFile className="text-gray-400 text-xl" />
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <IoSend className="text-blue-500 text-2xl cursor-pointer" />
    </div>
  );
}
