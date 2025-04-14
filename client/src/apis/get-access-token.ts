import {UserCredentials} from 'react-native-keychain';
import {http} from './http';
import {getKeychain, STORAGE_KEYS} from '@/utils/storage';

export async function getAccessToken() {
  const credentials = (await getKeychain(STORAGE_KEYS.REFRESH_TOKEN)) as UserCredentials;

  return http.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${credentials?.password}`,
    },
  });
}
