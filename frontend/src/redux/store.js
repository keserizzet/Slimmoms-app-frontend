import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import loaderReducer from './loaderSlice';
import diaryReducer from './diarySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer,
    diary: diaryReducer,
  },
});
