import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
