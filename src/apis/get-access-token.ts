import {http} from './http';
import {getKeychain} from '../utils/storage';

export async function getAccessToken() {
  const refreshToken = await getKeychain('refreshToken');

  return http.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
}
