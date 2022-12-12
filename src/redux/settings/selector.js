import { createSelector } from '@reduxjs/toolkit';

export const getCurrency = createSelector(
  (state) => state.settings.currency,
  (currency) => currency
);

export const getAllCurrencies = createSelector(
  (state) => state.settings.allCurrencies,
  (allCurrencies) => allCurrencies
);

export const getCurrencyByName = (name) =>
  createSelector(
    (state) => state.settings.allCurrencies,
    (allCurrencies) => allCurrencies.find((item) => item.name === name)
  );
