import http from './http';

const loginApi = {
  completion: (data: Record<string, any>) => http.post('/completion', data, { showLoading: true }),
};

export const { completion } = loginApi;
