import {configureStore} from '@reduxjs/toolkit';
import logger from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import {rootReducer} from '../reducers';
import {apiSlice} from '@src/api/apiSlice';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
  //enhancers: [monitorReducerEnhancer],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
