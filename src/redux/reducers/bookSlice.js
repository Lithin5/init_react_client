import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {    
    books: null,    
  },
  reducers: {
    setBooks:(state, action) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = authenticationSlice.actions;

export default bookSlice.reducer;