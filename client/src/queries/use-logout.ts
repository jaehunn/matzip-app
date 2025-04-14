import {useMutation, useQueryClient} from '@tanstack/react-query';
import {logout} from '@/apis/logout';
import {UseMutationCustomOptions} from '@/libs/react-query/types';
import {deleteHttpHeaders, HTTP_HEADERS} from '@/utils/http-headers';
import {resetKeychain, STORAGE_KEYS} from '@/utils/storage';
import {QUERY_KEYS} from './querykeys';

export function useLogout(options?: UseMutationCustomOptions) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      deleteHttpHeaders(HTTP_HEADERS.AUTHORIZATION);
      resetKeychain(STORAGE_KEYS.REFRESH_TOKEN);
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.AUTH]});
    },
    ...options,
  });
}
