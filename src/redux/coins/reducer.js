import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "api";
import { getCoinsWithGlobalAveragePrice } from "./thunk";

const initialState = {
  status: STATUS.IDLE,
  coins: []
};

const slice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    coinsReset: _ => initialState,
  },
  extraReducers: {
    [getCoinsWithGlobalAveragePrice.fulfilled]: (state, { payload }) => {
      state.coins = payload.coins;
    },
    [getCoinsWithGlobalAveragePrice.pending]: (state) => {
      state.status = STATUS.pending;
    },
    [getCoinsWithGlobalAveragePrice.rejected]: (state) => {
      state.status = STATUS.SUCCESS;
    },
  }
});

export const { coinsReset } = slice.actions;
export const coinsReducer = slice.reducer;

