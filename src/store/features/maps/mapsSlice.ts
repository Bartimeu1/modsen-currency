import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { currentCurrency: string; lastUpdateAt: number } = {
  currentCurrency: 'USD',
  lastUpdateAt: Date.now(),
};

const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setCurrentCurrency(state, action: PayloadAction<string>) {
      state.currentCurrency = action.payload;
      state.lastUpdateAt = Date.now();
    },
  },
});

export const { setCurrentCurrency } = mapsSlice.actions;
export default mapsSlice.reducer;
