import { createSelector } from '@reduxjs/toolkit';

export const getCoins = createSelector(
  (state) => state.coins.coins,
  (coins) => coins
);

export const getCoinsStatus = createSelector(
  (state) => state.coins.status,
  (status) => status
);
