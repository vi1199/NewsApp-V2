import {apiSlice} from '@src/api/apiSlice';
import {END_POINT} from '@src/api/constants';

export const getEverythingNews = apiSlice.injectEndpoints({
  endpoints: build => ({
    getEverything: build.query({
      query: () => ({
        url: END_POINT.everything,
        params: {category: 'business', pageSize: 100},
      }),
      // providesTags: ['Everything']
    }),
  }),
});

export const {useGetEverythingQuery, useLazyGetEverythingQuery} =
  getEverythingNews;
