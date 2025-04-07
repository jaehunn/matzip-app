import {useSignup} from '@/queries/use-signup';
import {useLogin} from '@/queries/use-login';
import {useGetProfile} from '@/queries/use-get-profile';
import {useLogout} from '@/queries/use-logout';
import {useSetupAuthTokens} from '@/queries/use-setup-auth-token';

export function useAuth() {
  const signupMutation = useSignup();
  const loginMutation = useLogin();
  const logoutMutation = useLogout();

  const accessTokenQuery = useSetupAuthTokens();

  const isAuthenticated = accessTokenQuery.isSuccess;

  const getProfileQuery = useGetProfile({
    enabled: isAuthenticated,
  });

  return {
    signupMutation,
    loginMutation,
    logoutMutation,
    getProfileQuery,
    isAuthenticated,
  };
}
