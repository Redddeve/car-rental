import { configureStore } from '@reduxjs/toolkit';
import carRentReducer from './carRent/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  version: 1,
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, carRentReducer);

export const store = configureStore({
  reducer: { carRent: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
