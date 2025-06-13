import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import NoChatSelected from './components/NoChatSelected';

const initialChats = [
  { name: "Harry Maguire", image: "https://i.pravatar.cc/41", typing: false, active: true, typingName: "", type: "personal" },
  { name: "United Family 🔰", image: "https://i.pravatar.cc/42", typing: true, active: true, typingName: "Rashford", type: "group" },
  { name: "Rasmus Højlund", image: "https://i.pravatar.cc/43", typing: false, active: false, typingName: "", type: "personal" },
  { name: "Andre Onana", image: "https://i.pravatar.cc/44", typing: false, active: true, typingName: "", type: "personal" },
  { name: "Reguilon", image: "https://i.pravatar.cc/45", typing: false, active: false, typingName: "", type: "personal" },
  { name: "Bruno Fernandes", image: "https://i.pravatar.cc/46", typing: false, active: true, typingName: "", type: "personal" },
  { name: "Ram", image: "https://i.pravatar.cc/47", typing: false, active: true, typingName: "", type: "personal" },
  { name: "Alex", image: "https://i.pravatar.cc/48", typing: false, active: false, typingName: "", type: "personal" },
  { name: "Chandubhai bvn", image: "https://i.pravatar.cc/49", typing: false, active: true, typingName: "", type: "personal" },
];

export default function App() {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("reactChatData");
    return savedChats ? JSON.parse(savedChats) : initialChats;
  });
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    localStorage.setItem("reactChatData", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    newSocket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = (msg) => {
    if (socket) {
      socket.emit('chat message', msg);
    }
  };

  const handleSelectChat = (chatName) => {
    const chat = chats.find(chat => chat.name === chatName);
    setSelectedChat(chat);
  };

  const addNewChat = (newChat) => {
    setChats(prevChats => [...prevChats, newChat]);
  };

  const handleArchive = (chatName) => {
    console.log(`Archive chat: ${chatName}`);
  };

  const handleMute = (chatName) => {
    console.log(`Mute notifications for: ${chatName}`);
  };

  const handlePin = (chatName) => {
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.name === chatName ? { ...chat, pinned: true } : chat
      )
    );
  };

  const handleUnpin = (chatName) => {
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.name === chatName ? { ...chat, pinned: false } : chat
      )
    );
  };

  const handleMarkAsRead = (chatName) => {
    console.log(`Mark as read: ${chatName}`);
  };

  const handleMarkAsUnread = (chatName) => {
    console.log(`Mark as unread: ${chatName}`);
  };

  const handleAddToFavorites = (chatName) => {
    console.log(`Add to favorites: ${chatName}`);
  };

  const handleExitGroup = (chatName) => {
    console.log(`Exit group: ${chatName}`);
  };

  const handleBlock = (chatName) => {
    console.log(`Block chat: ${chatName}`);
  };

  const handleDeleteChat = (chatName) => {
    setChats(prevChats => prevChats.filter(chat => chat.name !== chatName));
    setSelectedChat(null);
  };


  return (
    <div className="min-h-screen flex bg-gray-100 gap-4 p-4">
      <Sidebar
        chats={chats}
        onSelectChat={handleSelectChat}
        onAddChat={addNewChat}
        onArchive={handleArchive}
        onMute={handleMute}
        onPin={handlePin}
        onMarkAsRead={handleMarkAsRead}
        onMarkAsUnread={handleMarkAsUnread}
        onAddToFavorites={handleAddToFavorites}
        onExitGroup={handleExitGroup}
        onBlock={handleBlock}
        onDeleteChat={handleDeleteChat}
        onUnpin={handleUnpin}
      />
      {selectedChat ? (
        <div className="flex-1 flex flex-col bg-white rounded-xl shadow overflow-hidden">
          <Header selectedChat={selectedChat?.name} image={selectedChat?.image} name={selectedChat?.typingName} active={selectedChat?.active} typing={selectedChat?.typing} />
          <Content selectedChat={selectedChat?.name} messages={messages} sendMessage={sendMessage} />
        </div>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}
