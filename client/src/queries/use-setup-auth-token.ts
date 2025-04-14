import {deleteHttpHeaders, HTTP_HEADERS, setHttpHeaders} from '@/utils/http-headers';
import {useEffect} from 'react';
import {resetKeychain, setKeychain, STORAGE_KEYS} from '@/utils/storage';
import {useGetAccessToken} from './use-get-access-token';

export function useSetupAuthTokens() {
  const {data, isSuccess, isError} = useGetAccessToken();

  useEffect(() => {
    if (data?.data != null) {
      setHttpHeaders(HTTP_HEADERS.AUTHORIZATION, `Bearer ${data.data.accessToken}`);
      setKeychain(STORAGE_KEYS.REFRESH_TOKEN, data.data.refreshToken);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isError) {
      deleteHttpHeaders(HTTP_HEADERS.AUTHORIZATION);
      resetKeychain(STORAGE_KEYS.REFRESH_TOKEN);
    }
  }, [isError]);

  return {
    isSuccess,
    isError,
  };
}
