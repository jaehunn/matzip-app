import {SafeAreaView, StyleSheet} from 'react-native';
import WebView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React from 'react';

function HomeScreen() {
  return (
    <SafeAreaView>
      <WebView
        style={styles.webView}
        provider={PROVIDER_GOOGLE}
        // showsUserLocation 해줘야 심사에서 reject 되지 않음.
        showsUserLocation
        followsUserLocation
        showsMyLocationButton
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
