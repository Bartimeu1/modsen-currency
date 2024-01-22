import { combineReducers } from '@reduxjs/toolkit';

import { currencyApi } from './features/currency/currencyApi';
import themeReducer from './features/theme/themeSlice';

const rootReducer = combineReducers({
  [currencyApi.reducerPath]: currencyApi.reducer,
  theme: themeReducer,
});

export default rootReducer;
