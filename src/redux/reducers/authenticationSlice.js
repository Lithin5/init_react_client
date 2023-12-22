import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {    
    token: null,
    currentUser: null,
    permissions: []
  },
  reducers: {
    setCurrentUser:(state, action) => {
      state.currentUser = action.payload;
    },
    setToken:(state, action) => {
      state.token = action.payload;
    },
    logoutUser: (state) => {      
      state.currentUser = null;      
    },
  },
});

export const { logoutUser, setCurrentUser, setToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;