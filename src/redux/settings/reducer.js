import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'api';
import { currencies } from 'components/templates/home/data';
import { getFiats } from './thunk';

const initialState = {
  currency: currencies.USD,
  allCurrencies: [],
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsReset: (_) => initialState,
    updateCurrency: (state, { payload }) => {
      state.currency = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFiats.fulfilled, (state, { payload }) => {
      state.status = STATUS.SUCCESS;
      state.allCurrencies = payload;
    });
    builder.addCase(getFiats.pending, (state, { payload }) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(getFiats.rejected, (state, { payload }) => {
      state.status = STATUS.FAIL;
    });
  },
});

export const { settingsReset, updateCurrency } = slice.actions;
export const settingsReducer = slice.reducer;
