import { createSelector } from "@reduxjs/toolkit";

export const getCoins = createSelector(
  (state) => state.coins.coins,
  coins => coins
);