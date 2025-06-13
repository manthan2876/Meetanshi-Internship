import { useState, useRef, useEffect } from 'react';
import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import AttachmentDialog from './Attachment';

export default function ChatInput({ sendMessage, onTyping, chatId }) {
  const [message, setMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const typingTimeoutRef = useRef(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    
    if (!typingTimeoutRef.current) {
      onTyping(chatId, true);
    }
    
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      onTyping(chatId, false);
      typingTimeoutRef.current = null;
    }, 1000); // Send typing=false after 1 second of no typing
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(chatId, message);
      setMessage('');
      clearTimeout(typingTimeoutRef.current);
      onTyping(chatId, false); // Ensure typing indicator is off after sending
      typingTimeoutRef.current = null;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleAttachClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    return () => {
      // Clean up timeout on component unmount
      clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  return (
    <div className="p-4 border-t flex items-center gap-2 relative">
      <MdAttachFile 
        className="text-gray-400 text-xl cursor-pointer hover:text-gray-600" 
        onClick={handleAttachClick} 
      />
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <IoSend 
        className={`text-2xl cursor-pointer ${message.trim() ? 'text-blue-500 hover:text-blue-600' : 'text-gray-400'}`}
        onClick={handleSendMessage}
      />
      {showDialog && <AttachmentDialog onClose={handleCloseDialog} />}
    </div>
  );
}
