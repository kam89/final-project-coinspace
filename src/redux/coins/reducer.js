import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'api';
import {
  getCoinsWithGlobalAveragePrice,
  getHistoricalGlobalAveragePriceChart,
} from './thunk';

const initialState = {
  status: STATUS.IDLE,
  coins: [],
  historyStatus: STATUS.IDLE,
  history: [],
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
      state.status = STATUS.FAIL;
    });
    builder.addCase(
      getHistoricalGlobalAveragePriceChart.fulfilled,
      (state, { payload }) => {
        state.historyStatus = STATUS.SUCCESS;
        state.history = payload.chart;
      }
    );
    builder.addCase(getHistoricalGlobalAveragePriceChart.pending, (state) => {
      state.historyStatus = STATUS.LOADING;
    });
    builder.addCase(getHistoricalGlobalAveragePriceChart.rejected, (state) => {
      state.historyStatus = STATUS.FAIL;
    });
  },
});

export const { coinsReset, updateCoinsStatus } = slice.actions;
export const coinsReducer = slice.reducer;
