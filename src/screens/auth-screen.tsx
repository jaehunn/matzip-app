import {Button, Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AUTH_NAVIGATIONS, AuthStackParamList} from '@/navigations/auth-stack-navigator';
import {CustomButton} from '@/components/custom-button';

interface AuthScreenProps extends StackScreenProps<AuthStackParamList, typeof AUTH_NAVIGATIONS.AUTH_SCREEN> {
  // ...
}

function AuthScreen({navigation}: AuthScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {/* @see {Image} https://reactnative.dev/docs/images */}
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={require('@/assets/matzip.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton label="로그인하기" onPress={() => navigation.navigate(AUTH_NAVIGATIONS.LOGIN_SCREEN)} />
        <CustomButton label="회원가입하기" onPress={() => navigation.navigate(AUTH_NAVIGATIONS.SIGNUP_SCREEN)} />
      </View>
    </SafeAreaView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },

  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
});
