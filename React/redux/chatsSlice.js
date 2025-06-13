import { createSlice } from '@reduxjs/toolkit';
import chatData from '../src/day18/data/chatData';

const initialState = {
  chats: chatData,
  selectedChat: null,
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    updateChat: (state, action) => {
      const { id, ...updates } = action.payload;
      const chatIndex = state.chats.findIndex(chat => chat.id === id);
      if (chatIndex !== -1) {
        state.chats[chatIndex] = { ...state.chats[chatIndex], ...updates };
      }
    },
    markChatAsRead: (state, action) => {
      const chatIndex = state.chats.findIndex(chat => chat.id === action.payload);
      if (chatIndex !== -1) {
        state.chats[chatIndex].unread = false;
      }
    },
    markChatAsUnread: (state, action) => {
      const chatIndex = state.chats.findIndex(chat => chat.id === action.payload);
      if (chatIndex !== -1) {
        state.chats[chatIndex].unread = true;
      }
    },
    removeChat: (state, action) => {
      state.chats = state.chats.filter(chat => chat.id !== action.payload);
      if (state.selectedChat && state.selectedChat.id === action.payload) {
        state.selectedChat = null;
      }
    },
    toggleChatMute: (state, action) => {
      const chatIndex = state.chats.findIndex(chat => chat.id === action.payload);
      if (chatIndex !== -1) {
        state.chats[chatIndex].muted = !state.chats[chatIndex].muted;
      }
    },
    pinChat: (state, action) => {
      const chatIndex = state.chats.findIndex(chat => chat.id === action.payload);
      if (chatIndex !== -1) {
        state.chats[chatIndex].pinned = true;
      }
    },
    unpinChat: (state, action) => {
      const chatIndex = state.chats.findIndex(chat => chat.id === action.payload);
      if (chatIndex !== -1) {
        state.chats[chatIndex].pinned = false;
      }
    },
    toggleChatFavorite: (state, action) => {
      const chatIndex = state.chats.findIndex(chat => chat.id === action.payload);
      if (chatIndex !== -1) {
        state.chats[chatIndex].favorite = !state.chats[chatIndex].favorite;
      }
    },
    addChat: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const {
  setSelectedChat,
  updateChat,
  markChatAsRead,
  markChatAsUnread,
  removeChat,
  toggleChatMute,
  pinChat,
  unpinChat,
  toggleChatFavorite,
  addChat,
} = chatsSlice.actions;

export default chatsSlice.reducer;