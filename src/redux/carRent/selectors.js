import { createSelector } from '@reduxjs/toolkit';

export const selectCars = createSelector(
  [state => state.carRent.cars],
  items => items
);
export const selectFavorites = createSelector(
  [state => state.carRent.favorites],
  items => items
);

export const selectLoading = state => state.carRent.loading;
export const selectError = state => state.carRent.error;

export const selectIsFiltered = state => state.carRent.isFiltered;
export const selectFilter = state => state.carRent.filter;
export const selectFilteredArr = createSelector(
  [state => state.carRent.filtered],
  items => items
);
