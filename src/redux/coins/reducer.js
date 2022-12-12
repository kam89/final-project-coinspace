import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { STATUS } from 'api';
import {
  getCoinsWithGlobalAveragePrice,
  getHistoricalGlobalAveragePriceChart,
  getMarkets,
  getNewsWithDate,
  getNewsWithFilter,
} from './thunk';

const initialState = {
  status: STATUS.IDLE,
  coins: [],
  historyStatus: STATUS.IDLE,
  history: [],
  selectedCoin: {},
  market: [],
  newStatus: STATUS.IDLE,
  news: [],
};

const slice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    coinsReset: (_) => initialState,
    updateCoinsStatus: (state, { payload }) => {
      state.status = payload;
    },
    updateSelectedCoin: (state, { payload }) => {
      state.selectedCoin = payload;
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
    builder.addCase(getMarkets.fulfilled, (state, { payload }) => {
      state.status = STATUS.SUCCESS;
      state.market = payload;
    });
    builder.addCase(getMarkets.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(getMarkets.rejected, (state) => {
      state.status = STATUS.FAIL;
    });
    builder.addMatcher(
      isAnyOf(getNewsWithDate.fulfilled, getNewsWithFilter.fulfilled),
      (state, { payload }) => {
        state.newStatus = STATUS.SUCCESS;
        state.news = payload.news;
      }
    );
    builder.addMatcher(
      isAnyOf(getNewsWithDate.pending, getNewsWithFilter.pending),
      (state) => {
        state.newStatus = STATUS.LOADING;
      }
    );
    builder.addMatcher(
      isAnyOf(getNewsWithDate.rejected, getNewsWithFilter.rejected),
      (state) => {
        state.newStatus = STATUS.FAIL;
      }
    );
  },
});

export const { coinsReset, updateCoinsStatus, updateSelectedCoin } =
  slice.actions;
export const coinsReducer = slice.reducer;
