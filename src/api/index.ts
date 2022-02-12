import axios from 'axios';

const api = axios;

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

export const fetchNews = (page = 1) => api.get(`${config.baseUrl}/news/${page}.json`);

export const fetchAsks = (page = 1) => api.get(`${config.baseUrl}/ask/${page}.json`);

export const fetchJobs = (page = 1) => api.get(`${config.baseUrl}/jobs/${page}.json`);
