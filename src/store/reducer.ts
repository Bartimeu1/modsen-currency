import { combineReducers } from '@reduxjs/toolkit';

import chartReducer from './features/chart/chartSlice';
import { currencyApi } from './features/currency/currencyApi';
import { mapsApi } from './features/maps/mapsApi';
import mapsReducer from './features/maps/mapsSlice';
import themeReducer from './features/theme/themeSlice';

const rootReducer = combineReducers({
  [currencyApi.reducerPath]: currencyApi.reducer,
  [mapsApi.reducerPath]: mapsApi.reducer,
  theme: themeReducer,
  chart: chartReducer,
  maps: mapsReducer,
});

export default rootReducer;
