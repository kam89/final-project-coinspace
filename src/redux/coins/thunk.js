import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';

export const getCoinsWithGlobalAveragePrice = createAsyncThunk(
  'getCoinsWithGlobalAveragePrice',
  async (coins, { rejectWithValue }) => {
    const response = await api.get(
      `coins?skip=0&limit=5&currency=${coins.currency}`
    );
    if (response.status === 200) return response.data;
  }
);
