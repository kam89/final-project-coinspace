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
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCoinsWithGlobalAveragePrice.fulfilled,
      (state, { payload }) => {
        state.coins = payload.coins;
      }
    );
    builder.addCase(getCoinsWithGlobalAveragePrice.pending, (state) => {
      state.status = STATUS.pending;
    });
    builder.addCase(getCoinsWithGlobalAveragePrice.rejected, (state) => {
      state.status = STATUS.SUCCESS;
    });
  },
});

export const { coinsReset } = slice.actions;
export const coinsReducer = slice.reducer;
