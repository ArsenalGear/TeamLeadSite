// /* eslint-disable no-param-reassign */
// import axios from 'axios';
// import { getDataFromLocalStorageByKey } from './helper';
//
// export const API_BASE_ADDRESS = 'http://188.130.173.64:30080';
//
// export const client = axios.create({
//   baseURL: API_BASE_ADDRESS,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
//
// export const clientFile = axios.create({
//   baseURL: API_BASE_ADDRESS,
//   headers: {
//     'Content-Type': 'image/png',
//   },
// });
//
// client.interceptors.request.use(
//   config => {
//     if (!config.headers.Authorization) {
//       const token = getDataFromLocalStorageByKey('TOKEN_KEY');
//       if (token) config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );
//
// clientFile.interceptors.request.use(
//   config => {
//     if (!config.headers.Authorization) {
//       const token = getDataFromLocalStorageByKey('TOKEN_KEY');
//       if (token) config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );
//
// export const get = url => client.get(url);
// export const getPdf = url => client.get(url, { responseType: 'blob' });
// export const post = (url, data) => client.post(url, data);
// export const postFile = (url, data) => clientFile.post(url, data);
