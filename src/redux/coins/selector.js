import { createSelector } from '@reduxjs/toolkit';

export const getCoins = createSelector(
  (state) => state.coins.coins,
  (coins) => coins
);

export const getCoinsStatus = createSelector(
  (state) => state.coins.status,
  (status) => status
);

export const getHistoryStatus = createSelector(
  (state) => state.coins.historyStatus,
  (status) => status
);

export const getSelectedCoin = createSelector(
  (state) => state.coins.selectedCoin,
  (selectedCoin) => selectedCoin
);

export const getMarket = createSelector(
  (state) => state.coins.market,
  (market) => market
);

export const getNewsById = (id) =>
  createSelector(
    (state) => state.coins.news,
    (news) => news.filter((item) => item.relatedCoins.includes(id))
  );

export const getOverallNews = createSelector(
  (state) => state.coins.news,
  (news) => news.filter((item) => item.relatedCoins.length === 0)
);

export const getNewsStatus = createSelector(
  (state) => state.coins.newStatus,
  (status) => status
);
