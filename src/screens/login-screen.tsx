import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>login-screen</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
