import {useMutation} from '@tanstack/react-query';
import {login} from '../apis/login';
import {UseMutationCustomOptions} from '../libs/react-query/types';

export function useLogin(options?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: login,
    ...options,
  });
}
