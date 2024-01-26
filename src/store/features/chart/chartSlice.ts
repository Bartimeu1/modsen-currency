import { chartDataCurrenciesList } from '@constants/chart';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IChartState } from '@root/types/chart';
import { generateChartDataObjects } from '@utils/helpers';

const initialState: IChartState = {
  chartData: chartDataCurrenciesList,
  currentCurrency: 'USD',
};

export type ChartData = {
  x: number;
  y: string[];
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setCurrentCurrency(state, action: PayloadAction<string>) {
      state.currentCurrency = action.payload;
    },
    generateData(state) {
      state.chartData[state.currentCurrency] = {
        data: generateChartDataObjects(),
        lastUpdateAt: Date.now(),
      };
    },
    resetData(state) {
      state.chartData[state.currentCurrency] = {
        data: [],
        lastUpdateAt: Date.now(),
      };
    },
    deleteDataByDay(state, action: PayloadAction<number>) {
      const currency = state.currentCurrency;
      state.chartData[currency].data = state.chartData[currency].data.filter(
        (item: ChartData) => item.x !== action.payload,
      );
    },
    modifyChartData(state, action: PayloadAction<{ x: number; y: string[] }>) {
      const currentData = state.chartData[state.currentCurrency].data;
      const indexOfCurrentObj = currentData.findIndex(
        (item) => item.x === action.payload.x,
      );

      if (indexOfCurrentObj !== -1) {
        currentData[indexOfCurrentObj] = action.payload;
      } else {
        state.chartData[state.currentCurrency].data.push(action.payload);
      }
      state.chartData[state.currentCurrency].lastUpdateAt = Date.now();
    },
  },
});

export const {
  generateData,
  modifyChartData,
  setCurrentCurrency,
  resetData,
  deleteDataByDay,
} = chartSlice.actions;
export default chartSlice.reducer;
