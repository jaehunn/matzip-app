import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function CalendarScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Calendar Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
