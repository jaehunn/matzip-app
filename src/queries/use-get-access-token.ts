import {useQuery} from '@tanstack/react-query';
import {getAccessToken} from '../apis/get-access-token';

export function useGetAccessToken() {
  return useQuery({
    queryKey: ['accessToken'],
    queryFn: getAccessToken,
  });
}
