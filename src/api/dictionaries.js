import { get } from '../utils/request';

export const getTestDataApi = () => get(`/posts`).then(response => response.data);
