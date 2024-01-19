import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '@root/config';
import { ICurrencyResponse } from '@root/types/api';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.currencyUrl,
    prepareHeaders: (headers) => {
      headers.set('apikey', config.currencyApiKey);
    },
  }),
  endpoints: (builder) => ({
    getCurrencyRates: builder.query<ICurrencyResponse, { currencies: string }>({
      query: (credentials) => ({
        url: '/latest',
        method: 'GET',
        params: { ...credentials },
      }),
    }),
  }),
});

export const { useGetCurrencyRatesQuery } = currencyApi;
