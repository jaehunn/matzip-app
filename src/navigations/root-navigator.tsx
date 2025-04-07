import AuthStackNavigator from './auth-stack-navigator';
import MainDrawerNavigator from './main-drawer-nativator';
import {useAuth} from '../hooks/useAuth';

function RootNavigator() {
  const {isAuthenticated} = useAuth();

  if (!isAuthenticated) {
    return <AuthStackNavigator />;
  }

  return <MainDrawerNavigator />;
}

export default RootNavigator;
