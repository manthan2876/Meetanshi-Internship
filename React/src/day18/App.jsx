import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';
import NoChatSelected from './components/shared/NoChatSelected';
import { addMessage, deleteChatMessages } from '../../redux/messagesSlice';
import {
  updateChat,
  setSelectedChat,
  markChatAsRead,
  removeChat,
  toggleChatMute,
  pinChat,
  toggleChatFavorite,
  unpinChat,
  addChat,
  markChatAsUnread
} from '../../redux/chatsSlice';
import { setCurrentUser } from '../../redux/usersSlice';

export default function App() {
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const chats = useSelector((state) => state.chats.chats);
  const messages = useSelector((state) => state.messages.messages);
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);

  const handleSelectChat = useCallback((chat) => {
    dispatch(setSelectedChat(chat));
    dispatch(markChatAsRead(chat.id));
  }, [dispatch]);

  const sendMessage = useCallback((chatId, messageContent) => {
    const newMessage = {
      id: Date.now(),
      chatId,
      sender: currentUser.id,
      content: messageContent,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      doubleTickBlue: false,
      unread: false,
      oneTick: true,
      oneTickBlue: false,
    };

    dispatch(addMessage({ chatId, message: newMessage }));
    dispatch(updateChat({
      id: chatId,
      message: messageContent,
      time: newMessage.time,
      typing: false,
      typingName: ''
    }));
  }, [currentUser.id, dispatch]);

  const handleTyping = useCallback((chatId, isTyping) => {
    dispatch(updateChat({
      id: chatId,
      typing: isTyping,
      typingName: isTyping ? currentUser.name : '',
      message: isTyping ? `${currentUser.name} is typing...` : chats.find(chat => chat.id === chatId)?.message
    }));
  }, [currentUser.name, chats, dispatch]);

  const addNewChat = useCallback((user) => {
    const existingChat = chats.find(chat => chat.type === 'personal' && chat.name === user.name);

    if (!existingChat) {
      const newChat = {
        id: Date.now(),
        name: user.name,
        image: user.image,
        typing: false,
        active: false,
        typingName: "",
        type: "personal",
        message: "",
        time: "",
        pinned: false,
        doubleTickBlue: false,
        unread: false,
        oneTick: false,
        oneTickBlue: false,
      };
      dispatch(addChat(newChat));
      dispatch(setSelectedChat(newChat));
    } else {
      dispatch(setSelectedChat(existingChat));
    }
  }, [chats, dispatch]);

  const handleArchive = useCallback((chatId) => {
    dispatch(removeChat(chatId));
    dispatch(deleteChatMessages(chatId));
  }, [dispatch]);

  const handleMute = useCallback((chatId) => {
    dispatch(toggleChatMute(chatId));
  }, [dispatch]);

  const handlePin = useCallback((chatId) => {
    dispatch(pinChat(chatId));
  }, [dispatch]);

  const handleMarkAsRead = useCallback((chatId) => {
    dispatch(markChatAsRead(chatId));
  }, [dispatch]);

  const handleMarkAsUnread = useCallback((chatId) => {
    dispatch(markChatAsUnread(chatId));
  }, [dispatch]);

  const handleAddToFavorites = useCallback((chatId) => {
    dispatch(toggleChatFavorite(chatId));
  }, [dispatch]);

  const handleExitGroup = useCallback((chatId) => {
    dispatch(removeChat(chatId));
    dispatch(deleteChatMessages(chatId));
  }, [dispatch]);

  const handleBlock = useCallback((chatId) => {
    dispatch(removeChat(chatId));
    dispatch(deleteChatMessages(chatId));
  }, [dispatch]);

  const handleDeleteChat = useCallback((chatId) => {
    dispatch(removeChat(chatId));
    dispatch(deleteChatMessages(chatId));
  }, [dispatch]);

  const handleUnpin = useCallback((chatId) => {
    dispatch(unpinChat(chatId));
  }, [dispatch]);

  const handleSelectUser = useCallback((user) => {
    dispatch(setCurrentUser(user));
  }, [dispatch]);

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
        users={users}
        currentUser={currentUser}
        onSelectUser={handleSelectUser}
      />
      {selectedChat ? (
        <div className="flex-1 flex flex-col bg-white rounded-xl shadow overflow-hidden">
          <Header
            selectedChat={selectedChat}
            typing={selectedChat?.typing}
            typingName={selectedChat?.typingName}
            active={selectedChat?.active}
          />
          <Content
            selectedChat={selectedChat}
            messages={messages[selectedChat.id] || []}
            sendMessage={sendMessage}
            onTyping={handleTyping}
            currentUser={currentUser}
          />
        </div>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
}