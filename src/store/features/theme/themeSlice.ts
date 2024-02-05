import { createSlice } from '@reduxjs/toolkit';
import { IThemeSliceState } from '@root/types/theme';

import { DARK_THEME, LIGHT_THEME } from '@constants/theme';

const initialState: IThemeSliceState = {
  currentTheme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
