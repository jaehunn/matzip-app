import {http} from './http';
import {getKeychain, STORAGE_KEYS} from '@/utils/storage';

export async function getAccessToken() {
  const refreshToken = await getKeychain(STORAGE_KEYS.REFRESH_TOKEN);

  return http.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
}
