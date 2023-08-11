import {apiSlice} from '@src/api/apiSlice';
import {END_POINT} from '@src/api/constants';

export const getEverythingNews = apiSlice.injectEndpoints({
  endpoints: build => ({
    getEverything: build.query({
      query: () => ({
        url: END_POINT.everything,
        params: {country: 'in'},
      }),
    }),
  }),
});

export const {useGetEverythingQuery, useLazyGetEverythingQuery} =
  getEverythingNews;
