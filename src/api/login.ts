import http from './http';

const loginApi = {
  login: (data: Record<string, any>) => http.post('/api/login', data, { showLoading: true }),
};

export const { login } = loginApi;
