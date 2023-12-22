import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config";
import axios from 'axios';

export const register = createAsyncThunk(
    'authentication/register',
    async (input, thunkAPI) => {
        try {
            const response = await axios.post(config.apiEndPoint + '/api/auth/register', input);                  
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const login = createAsyncThunk(
    'authentication/login',
    async (input, thunkAPI) => {
        try {
            const response = await axios.post(config.apiEndPoint + '/api/auth/login', input);                  
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)