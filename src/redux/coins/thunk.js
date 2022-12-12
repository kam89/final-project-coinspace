import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';

export const getCoinsWithGlobalAveragePrice = createAsyncThunk(
  'getCoinsWithGlobalAveragePrice',
  async ({ currency }, { rejectWithValue }) => {
    const response = await api.get(`coins?skip=0&limit=5&currency=${currency}`);
    if (response.status === 200) return response.data;
    return rejectWithValue(response.status);
  }
);

export const getHistoricalGlobalAveragePriceChart = createAsyncThunk(
  'getHistoricalGlobalAveragePriceChart',
  async ({ id, period }, { rejectWithValue }) => {
    const response = await api.get(`charts?period=${period}&coinId=${id}`);
    if (response.status === 200) return response.data;
    return rejectWithValue(response.status);
  }
);

export const getMarkets = createAsyncThunk(
  'getMarkets',
  async ({ id }, { rejectWithValue }) => {
    const response = await api.get(`/markets?coinId=${id}`);
    if (response.status === 200) return response.data;
    return rejectWithValue(response.status);
  }
);

export const getNewsWithDate = createAsyncThunk(
  'getNewsWithDate',
  async ({ fromDate, toDate }, { rejectWithValue }) => {
    const response = await api.get(`news?skip=0&limit=20`);
    if (response.status === 200) return response.data;
    return rejectWithValue(response.status);
  }
);

export const getNewsWithFilter = createAsyncThunk(
  'getNewsWithFilter',
  async ({ filter }, { rejectWithValue }) => {
    const response = await api.get(`news/${filter}?skip=0&limit=20`);
    if (response.status === 200) return response.data;
    return rejectWithValue(response.status);
  }
);
