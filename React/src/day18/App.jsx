import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const chats = [
  { name: "Harry Maguire", image: "https://i.pravatar.cc/41", typing: false, active: true, typingName: "" },
  { name: "United Family 🔰", image: "https://i.pravatar.cc/42", typing: true, active: true, typingName: "Rashford" },
  { name: "Rasmus Højlund", image: "https://i.pravatar.cc/43", typing: false, active: false, typingName: "" },
  { name: "Andre Onana", image: "https://i.pravatar.cc/44", typing: false, active: true, typingName: "" },
  { name: "Reguilon", image: "https://i.pravatar.cc/45", typing: false, active: false, typingName: "" },
  { name: "Bruno Fernandes", image: "https://i.pravatar.cc/46", typing: false, active: true, typingName: "" },
  { name: "Ram", image: "https://i.pravatar.cc/47", typing: false, active: true, typingName: "" },
  { name: "Alex", image: "https://i.pravatar.cc/48", typing: false, active: false, typingName: "" },
  { name: "Chandubhai bvn", image: "https://i.pravatar.cc/49", typing: false, active: true, typingName: "" },
];

export default function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chatName) => {
    const chat = chats.find(chat => chat.name === chatName);
    setSelectedChat(chat);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 gap-4 p-4">
      <Sidebar onSelectChat={handleSelectChat} />
      <div className="flex-1 flex flex-col bg-white rounded-xl shadow overflow-hidden">
        <Header selectedChat={selectedChat?.name} image={selectedChat?.image} name={selectedChat?.typingName} active={selectedChat?.active} typing={selectedChat?.typing} />
        <Content selectedChat={selectedChat?.name} />
      </div>
    </div>
  );
}
