import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {INewsContents} from '@src/types/news';

interface AppState {
  pinnedItems: INewsContents;
}

const initialState: AppState = {
  pinnedItems: {},
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addPinnedItems: (state, action) => {
      state.pinnedItems = action.payload;
    },
  },
});

export const {addPinnedItems} = appSlice.actions;

export default appSlice.reducer;
