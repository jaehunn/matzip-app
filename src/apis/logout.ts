import {http} from './http';

export async function logout() {
  return http.post('/auth/logout');
}
