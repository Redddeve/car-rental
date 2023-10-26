import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  cars: [],
  favorites: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'carRent',
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      if (state.favorites.find(item => item.id === payload.id)) {
        return;
      }
      state.favorites.push(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(item => item.id !== payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.loading = false;
      })
      .addCase(fetchAdverts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export const { addToFavorite, removeFromFavorite } = slice.actions;
export default slice.reducer;
