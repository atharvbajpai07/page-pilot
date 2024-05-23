import { createSlice } from '@reduxjs/toolkit';

const landingPageSlice = createSlice({
  name: 'landingPages',
  initialState: {
    pages: [],
  },
  reducers: {
    addLandingPage: (state, action) => {
      state.pages.push(action.payload);
    },
    updateLandingPage: (state, action) => {
      const index = state.pages.findIndex(page => page.id === action.payload.id);
      if (index !== -1) {
        state.pages[index] = action.payload;
      }
    },
    deleteLandingPage: (state, action) => {
      state.pages = state.pages.filter(page => page.id !== action.payload);
    },
  },
});

export const { addLandingPage, updateLandingPage, deleteLandingPage } = landingPageSlice.actions;
export default landingPageSlice.reducer;
