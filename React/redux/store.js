import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './chatsSlice';
import messagesReducer from './messagesSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    messages: messagesReducer,
    users: usersReducer,
  },
});