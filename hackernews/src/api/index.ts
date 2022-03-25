import axios from 'axios';

const api = axios;

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

export const fetchList = (viewName: string, page = 1) => api.get(`${config.baseUrl}/${viewName}/${page}.json`);

export const fetchUser = (name: string) => api.get(`${config.baseUrl}/user/${name}.json`);

export const fetchItem = (id: number) => api.get(`${config.baseUrl}/item/${id}.json`);
