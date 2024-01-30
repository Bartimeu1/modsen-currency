import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '@root/config';
import { IMapsItem } from '@root/types/maps';

export const mapsApi = createApi({
  reducerPath: 'mapsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.mapsUrl,
  }),
  endpoints: (builder) => ({
    getBanksLocation: builder.query<IMapsItem[], object>({
      query: () => ({
        url: '/places',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetBanksLocationQuery } = mapsApi;
