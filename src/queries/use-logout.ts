import {useMutation} from '@tanstack/react-query';
import {logout} from '../apis/logout';

export function useLogout() {
  return useMutation({
    mutationFn: logout,
  });
}
