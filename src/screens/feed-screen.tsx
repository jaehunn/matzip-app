import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Feed Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
