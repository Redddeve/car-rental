import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts, loadMore } from './operations';
// import { toast } from 'react-toastify';

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
        // toast.info('This car is already in favorites!');
      }
      state.favorites.push(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorites.filter(item => item.id !== payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.loading = false;
      })
      .addCase(loadMore.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.loading = false;
      })
      .addMatcher(isAnyOf(fetchAdverts.pending, loadMore.pending), state => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchAdverts.rejected, loadMore.rejected),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      ),
});

export default slice.reducer;
