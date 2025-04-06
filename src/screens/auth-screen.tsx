import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  AUTH_NAVIGATIONS,
  AuthStackParamList,
} from '../navigations/auth-stack-navigator';

interface AuthScreenProps
  extends StackScreenProps<
    AuthStackParamList,
    typeof AUTH_NAVIGATIONS.AUTH_SCREEN
  > {
  // ...
}

function AuthScreen({navigation}: AuthScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Login"
          onPress={() => navigation.navigate(AUTH_NAVIGATIONS.AUTH_SCREEN)}
        />
      </View>
    </SafeAreaView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
