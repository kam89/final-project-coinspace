import { createSlice } from '@reduxjs/toolkit';
import { currencies } from 'components/templates/home/data';

const initialState = {
  currency: currencies.EUR,
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsReset: (_) => initialState,
    updateSettingsObject: (state, { payload }) => {
      for (const key in payload) {
        state[key] = payload[key];
      }
    },
  },
});

export const { settingsReset, updateSettingsObject } = slice.actions;
export const settingsReducer = slice.reducer;
