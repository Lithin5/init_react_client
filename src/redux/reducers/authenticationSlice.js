import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {    
    currentUser: null,
    permissions: []
  },
  reducers: {
    setCurrentUser:(state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {      
      state.currentUser = null;      
    },
  },
});

export const { logoutUser, setCurrentUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;