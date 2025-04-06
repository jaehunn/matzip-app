import {Fragment} from 'react';
import AuthStackNavigator from './auth-stack-navigator';
import MainDrawerNavigator from './main-drawer-nativator';

function RootNavigator() {
  // TODO: Authenticationw
  let isAuthenticated = false;

  if (!isAuthenticated) {
    return <AuthStackNavigator />;
  }

  return <MainDrawerNavigator />;
}

export default RootNavigator;
