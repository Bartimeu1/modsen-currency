import { createSlice } from '@reduxjs/toolkit';

interface ThemeSliceState {
  currentTheme: 'dark' | 'light';
}

const initialState: ThemeSliceState = {
  currentTheme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
