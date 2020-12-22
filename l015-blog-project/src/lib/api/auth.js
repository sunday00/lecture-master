import client from './client';

export const login = ({ username, password }) =>
  client.post('/api/auths/login', { username, password });

export const register = ({ username, password }) =>
  client.post('/api/auths/register', { username, password });

export const logout = () => client.post('/api/auths/logout');

export const check = () => client.get('/api/auths/check');
