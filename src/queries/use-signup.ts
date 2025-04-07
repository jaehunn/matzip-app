import {useMutation} from '@tanstack/react-query';
import {signup} from '../apis/signup';
import {UseMutationCustomOptions} from '../libs/react-query/types';

export function useSignup(options?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: signup,
    ...options,
  });
}
