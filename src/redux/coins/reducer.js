import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'api';
import { getCoinsWithGlobalAveragePrice } from './thunk';

const initialState = {
  status: STATUS.IDLE,
  coins: [],
};

const slice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    coinsReset: (_) => initialState,
    updateCoinsStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCoinsWithGlobalAveragePrice.fulfilled,
      (state, { payload }) => {
        state.status = STATUS.SUCCESS;
        state.coins = payload.coins;
      }
    );
    builder.addCase(getCoinsWithGlobalAveragePrice.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(getCoinsWithGlobalAveragePrice.rejected, (state) => {
      state.status = STATUS.SUCCESS;
    });
  },
});

export const { coinsReset, updateCoinsStatus } = slice.actions;
export const coinsReducer = slice.reducer;
