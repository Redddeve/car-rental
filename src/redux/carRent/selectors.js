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
