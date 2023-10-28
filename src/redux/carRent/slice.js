import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts, fetchFiltered, loadMore } from './operations';
import { FilterFavorites } from 'helpers/FilterFavorites';

const initialState = {
  cars: [],
  favorites: [],
  loading: false,
  error: null,
  filter: {
    make: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  isFiltered: false,
  filtered: [],
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
    filterFavorites: (state, { payload }) => {
      state.filtered = FilterFavorites(state.favorites, payload);
      state.isFiltered = true;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.loading = false;
        state.isFiltered = false;
      })
      .addCase(loadMore.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.loading = false;
      })
      .addCase(fetchFiltered.fulfilled, (state, { payload }) => {
        payload && 'filteredArr' in payload
          ? (state.cars = payload.filteredArr)
          : (state.cars = []);
        if (payload && 'filterObj' in payload) {
          state.filter = payload.filterObj;
        }
        state.isFiltered = true;
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(fetchAdverts.pending, loadMore.pending, fetchFiltered.pending),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAdverts.rejected,
          loadMore.rejected,
          fetchFiltered.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      ),
});

export const { addToFavorite, removeFromFavorite, filterFavorites } =
  slice.actions;
export default slice.reducer;
