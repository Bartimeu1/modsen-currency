import { combineReducers } from '@reduxjs/toolkit';

import chartReducer from './features/chart/chartSlice';
import { currencyApi } from './features/currency/currencyApi';
import themeReducer from './features/theme/themeSlice';

const rootReducer = combineReducers({
  [currencyApi.reducerPath]: currencyApi.reducer,
  theme: themeReducer,
  chart: chartReducer,
});

export default rootReducer;
