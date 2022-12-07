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
