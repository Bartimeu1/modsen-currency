import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { currencyUrl, currencyApiKey } from '@root/config';
import { ICurrencyResponse } from '@root/types/api';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: currencyUrl,
    prepareHeaders: (headers) => {
      headers.set('apikey', currencyApiKey);
    },
  }),
  endpoints: (builder) => ({
    getCurrencyRates: builder.query<
      ICurrencyResponse,
      { currencies: string; base_currency: string }
    >({
      query: (credentials) => ({
        url: '/latest',
        method: 'GET',
        params: { ...credentials },
      }),
    }),
  }),
});

export const { useGetCurrencyRatesQuery } = currencyApi;
