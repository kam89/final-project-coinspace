import axios from "axios";

export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'succeeded',
  FAIL: 'failed',
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});