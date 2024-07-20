'use client';

import axios from 'axios';

import { API_URL, TOKEN } from './constants';

export const $http = axios.create({
  baseURL: API_URL,
  headers: {
    'Token-Key': TOKEN,
  },
});

$http.interceptors.request.use(
  config => {
    if (!config.headers['Token-Key']) {
      config.headers['Token-Key'] = TOKEN;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
