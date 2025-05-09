import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {InputText} from '@/components/input-text';
import {CustomButton} from '@/components/custom-button';
import {useForm} from '@/hooks/useForm';
import {useAuth} from '@/hooks/useAuth';

type UserInfomation = {
  email: string;
  password: string;
};

function validateLogin(values: UserInfomation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }
  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요.';
  }

  return errors;
}

function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const login = useForm<UserInfomation>({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  const {loginMutation} = useAuth();

  const handleSubmit = () => {
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputText
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputText
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry
          returnKeyType="done"
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton label="로그인" variant="filled" size="large" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
