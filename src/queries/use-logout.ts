import {useMutation} from '@tanstack/react-query';
import {logout} from '../apis/logout';
import {UseMutationCustomOptions} from '../libs/react-query/types';

export function useLogout(options?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: logout,
    ...options,
  });
}
