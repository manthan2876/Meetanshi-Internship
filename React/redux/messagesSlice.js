import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: {}, // chatId -> array of messages
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      if (!state.messages[chatId]) {
        state.messages[chatId] = [];
      }
      state.messages[chatId].push(message);
    },
    deleteChatMessages: (state, action) => {
      delete state.messages[action.payload];
    },
  },
});

export const { addMessage, deleteChatMessages } = messagesSlice.actions;
export default messagesSlice.reducer;