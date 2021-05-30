import axios from 'axios';

export const API_BASE_ADDRESS = 'https://jsonplaceholder.typicode.com';

export const client = axios.create({
  baseURL: API_BASE_ADDRESS,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = url => client.get(url);
export const post = (url, data) => client.post(url, data);
