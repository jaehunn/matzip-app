import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text>signup-screen</Text>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
