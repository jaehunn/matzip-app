import {StyleSheet} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import AuthScreen from '../screens/auth-screen';
import LoginScreen from '../screens/login-screen';
import SignupScreen from '../screens/signup-screen';

export const AUTH_NAVIGATIONS = {
  AUTH_SCREEN: 'AuthScreen',
  LOGIN_SCREEN: 'LoginScreen',
  SIGNUP_SCREEN: 'SignupScreen',
} as const;

export type AuthStackParamList = {
  [AUTH_NAVIGATIONS.AUTH_SCREEN]: undefined;
  [AUTH_NAVIGATIONS.LOGIN_SCREEN]: undefined;
  [AUTH_NAVIGATIONS.SIGNUP_SCREEN]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const stackNavigationOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: 'white',
  },
  headerStyle: {
    backgroundColor: 'white',
    shadowColor: 'gray',
  },
  headerTitleStyle: {
    fontSize: 15,
  },
  headerTintColor: 'black',
};

type AuthNavigationKeys = keyof typeof AUTH_NAVIGATIONS;

const screensOptions: Record<
  (typeof AUTH_NAVIGATIONS)[AuthNavigationKeys],
  StackNavigationOptions
> = {
  [AUTH_NAVIGATIONS.AUTH_SCREEN]: {
    headerShown: false,
  },
  [AUTH_NAVIGATIONS.LOGIN_SCREEN]: {
    headerTitle: '로그인',
  },
  [AUTH_NAVIGATIONS.SIGNUP_SCREEN]: {
    // ...
  },
};

/** @see {stack-navigator} https://reactnavigation.org/docs/custom-navigators/#built-in-navigators */
function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name={AUTH_NAVIGATIONS.AUTH_SCREEN}
        component={AuthScreen}
        options={screensOptions[AUTH_NAVIGATIONS.AUTH_SCREEN]}
      />
      <Stack.Screen
        name={AUTH_NAVIGATIONS.LOGIN_SCREEN}
        component={LoginScreen}
        options={screensOptions[AUTH_NAVIGATIONS.LOGIN_SCREEN]}
      />
      <Stack.Screen
        name={AUTH_NAVIGATIONS.SIGNUP_SCREEN}
        component={SignupScreen}
        options={screensOptions[AUTH_NAVIGATIONS.SIGNUP_SCREEN]}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;

const styles = StyleSheet.create({});
