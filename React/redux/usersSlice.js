import { createSlice } from '@reduxjs/toolkit';

const users = [
  {
    id: 'user1',
    name: 'Marcus Rashford',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'user2',
    name: 'Jadon Sancho',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'user3',
    name: 'Mason Mount',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'user4',
    name: 'Casemiro',
    image: 'https://i.pravatar.cc/150?img=4',
  },
];

const initialState = {
  users,
  currentUser: users[0], // Default to first user
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = usersSlice.actions;
export default usersSlice.reducer;