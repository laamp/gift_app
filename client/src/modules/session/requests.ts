import axios from 'axios';

export const loginRequest = (email: string, password: string) =>
  axios.post('/api/auth/login', { login: { email, password } });
