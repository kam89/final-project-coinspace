import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';

export const getFiats = createAsyncThunk(
  'getFiats',
  async ({ currency }, { rejectWithValue }) => {
    const response = await api.get(`fiats`);
    if (response.status === 200) return response.data;
    return rejectWithValue(response.status);
  }
);
