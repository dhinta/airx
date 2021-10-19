import { create } from 'axios';

const api = create({
  baseURL: 'http://localhost:7777',
  timeout: 5000,
});

export default api;
