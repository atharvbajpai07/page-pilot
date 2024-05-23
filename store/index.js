import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import landingPageReducer from './slices/landingPageSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    landingPages: landingPageReducer,
  },
});

export default store;
