/** @see {react-native-keychain} https://oblador.github.io/react-native-keychain/docs/usage */

import * as Keychain from 'react-native-keychain';

async function setKeychain(key: string, value: string) {
  return Keychain.setGenericPassword(key, value);
}

async function getKeychain(key: string) {
  return Keychain.getGenericPassword({service: key});
}

async function resetKeychain(key: string) {
  if (await getKeychain(key)) {
    return Keychain.resetGenericPassword({service: key});
  }
}

export {setKeychain, getKeychain, resetKeychain};
