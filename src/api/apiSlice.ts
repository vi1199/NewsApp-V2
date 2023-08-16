import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {API_KEY, BASE_URL} from './constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (header, {getState}) => {
    header.set('X-Api-Key', API_KEY);
    return header;
  },
});

const baseQueryAsync: BaseQueryFn<
  string, // Args
  unknown, // Result
  {reason: string}, // Error
  {shout?: boolean}, // DefinitionExtraOptions
  {timestamp: number} // Meta
> = async (args, api, extraOptions) => {
  const meta = {timestamp: Date.now()};
  console.info('API CALL :: ', args, '\n');
  let result = await baseQuery(args, api, extraOptions);
  console.info('API RESPONSE :: ', result, '\n');
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryAsync,
  endpoints: builder => ({}),
});
