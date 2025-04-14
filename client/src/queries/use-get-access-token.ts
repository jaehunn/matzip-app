import {useQuery} from '@tanstack/react-query';
import {getAccessToken} from '@/apis/get-access-token';
import {QUERY_KEYS} from './querykeys';

const ACCESS_TOKEN_EXPIRE_TIME = 30 * 60 * 1000; // 30 minutes
const THREE_MINUTES = 3 * 60 * 1000;

const ACCESS_TOKEN_STALE_TIME = ACCESS_TOKEN_EXPIRE_TIME - THREE_MINUTES; // 27 minutes

/**
 * access token 만료 전,
 * refresh token 을 이용해 access token 을 갱신하는 쿼리
 **/
export function useGetAccessToken() {
  return useQuery({
    queryKey: [QUERY_KEYS.AUTH, 'access-token'],
    queryFn: getAccessToken,
    staleTime: ACCESS_TOKEN_STALE_TIME,
    refetchInterval: ACCESS_TOKEN_STALE_TIME,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });
}
