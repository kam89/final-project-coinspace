import axios from 'axios';

//REACT_APP_API_URL=https://api.coinstats.app/public/v1/

export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'succeeded',
  FAIL: 'failed',
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});
