import {useQuery} from '@tanstack/react-query';
import {getProfile} from '@/apis/get-profile';
import {UseQueryCustomOptions} from '@/libs/react-query/types';
import {QUERY_KEYS} from './querykeys';

export function useGetProfile(queryOptions?: UseQueryCustomOptions) {
  return useQuery({
    queryKey: [QUERY_KEYS.AUTH, 'profile'],
    queryFn: getProfile,
    ...queryOptions,
  });
}
