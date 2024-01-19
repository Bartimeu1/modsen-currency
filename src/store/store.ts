import { configureStore } from '@reduxjs/toolkit';

import { currencyApi } from './features/currency/currencyApi';
import themeReducer from './features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const allMiddlewares = [currencyApi.middleware];
    return getDefaultMiddleware().concat(...allMiddlewares);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
