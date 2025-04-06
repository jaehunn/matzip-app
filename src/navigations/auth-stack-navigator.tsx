import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthScreen from '../screens/auth-screen';
import LoginScreen from '../screens/login-screen';

export const AUTH_NAVIGATIONS = {
  AUTH_SCREEN: 'AuthScreen',
  LOGIN_SCREEN: 'LoginScreen',
} as const;

export type AuthStackParamList = {
  [AUTH_NAVIGATIONS.AUTH_SCREEN]: undefined;
  [AUTH_NAVIGATIONS.LOGIN_SCREEN]: undefined;
};

/** @see {stack-navigator} https://reactnavigation.org/docs/custom-navigators/#built-in-navigators */
function AuthStackNavigator() {
  const Stack = createStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AUTH_NAVIGATIONS.AUTH_SCREEN}
        component={AuthScreen}
      />
      <Stack.Screen
        name={AUTH_NAVIGATIONS.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;

const styles = StyleSheet.create({});
