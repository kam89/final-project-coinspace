import { createSlice } from '@reduxjs/toolkit';
import { currencies } from 'components/templates/home/data';

const initialState = {
  currency: currencies.USD,
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
});

export const { settingsReset, updateCurrency } = slice.actions;
export const settingsReducer = slice.reducer;
