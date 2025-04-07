import {useMutation, useQueryClient} from '@tanstack/react-query';
import {login} from '../apis/login';
import {UseMutationCustomOptions} from '../libs/react-query/types';
import {setKeychain, STORAGE_KEYS} from '../utils/storage';
import {HTTP_HEADERS, setHttpHeaders} from '../utils/http-headers';

export function useLogin(options?: UseMutationCustomOptions) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: ({data}) => {
      setKeychain(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
      setHttpHeaders(HTTP_HEADERS.AUTHORIZATION, `Bearer ${data.accessToken}`);
    },
    onSettled: () => {
      queryClient.refetchQueries({queryKey: ['access-token']});
      queryClient.invalidateQueries({queryKey: ['profile']});
    },
    ...options,
  });
}
