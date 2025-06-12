import { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import AttachmentDialog from './Attachment';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAttachClick = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="p-4 border-t flex items-center gap-2 relative">
      <MdAttachFile className="text-gray-400 text-xl cursor-pointer" onClick={handleAttachClick} />
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={message}
        onChange={handleInputChange}
      />
      <IoSend className="text-blue-500 text-2xl cursor-pointer" />
      {showDialog && <AttachmentDialog />}
    </div>
  );
}
