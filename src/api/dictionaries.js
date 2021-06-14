import { get } from '../utils/request';

export const getSexes = () => get(`/posts`).then(response => response.data);
