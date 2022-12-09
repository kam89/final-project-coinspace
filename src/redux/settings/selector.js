import { createSelector } from '@reduxjs/toolkit';

export const getCurrency = createSelector(
  (state) => state.settings.currency,
  (currency) => currency
);
