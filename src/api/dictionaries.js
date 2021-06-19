import { get } from '../utils/request';

export const getMenuDataApi = () => get(`/servers`).then(response => response.data);
