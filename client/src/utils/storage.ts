/** @see {react-native-keychain} https://oblador.github.io/react-native-keychain/docs/usage */

import * as Keychain from 'react-native-keychain';

export const STORAGE_KEYS = {
  REFRESH_TOKEN: 'refreshToken',
} as const;

type StorageKeys = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

export async function setKeychain(key: StorageKeys, value: string) {
  return Keychain.setGenericPassword(key, value);
}

export async function getKeychain(key: StorageKeys) {
  return Keychain.getGenericPassword({service: key});
}

export async function resetKeychain(key: StorageKeys) {
  if (await getKeychain(key)) {
    return Keychain.resetGenericPassword({service: key});
  }
}
