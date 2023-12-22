import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config";
import axios from 'axios';

export const createBook = createAsyncThunk(
    'books/create',
    async (input, thunkAPI) => {
        try {
            console.log("input", input);            
            const currentState = thunkAPI.getState();            
            const token = currentState.authentication.token            
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            const response = await axios.post(config.apiEndPoint + '/api/createbook', input, { headers: headers } );                  
            return response.data;            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)