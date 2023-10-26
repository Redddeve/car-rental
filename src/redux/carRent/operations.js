import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const adverts = axios.create({
  baseURL: 'https://6513d27f8e505cebc2ea3434.mockapi.io/',
});

export const fetchAdverts = createAsyncThunk(
  'fetchAdverts',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await adverts.get('/adverts', {
        params: {
          p: page,
          l: 12,
        },
      });
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
