import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from './constants';
import Config from 'react-native-config';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (header, {getState}) => {
    header.set('X-Api-Key', Config.API_KEY);
    return header;
  },
});

const baseQueryAsync = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log('--result--', result);

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryAsync,
  endpoints: builder => ({}),
});
