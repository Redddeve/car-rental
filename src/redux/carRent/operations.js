import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const adverts = axios.create({
  baseURL: 'https://6513d27f8e505cebc2ea3434.mockapi.io/',
});

export const fetchAdverts = createAsyncThunk(
  'fetchAdverts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await adverts.get('/adverts', {
        params: {
          p: 1,
          l: 12,
        },
      });
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const loadMore = createAsyncThunk(
  'loadMore',
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
