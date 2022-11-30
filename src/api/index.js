import axios from "axios";

console.log(1, process.env.REACT_APP_API_URL, process.env);


export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});