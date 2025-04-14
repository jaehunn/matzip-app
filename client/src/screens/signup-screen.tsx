import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {InputText} from '@/components/input-text';
import {useForm} from '@/hooks/useForm';
import {CustomButton} from '@/components/custom-button';
import {useAuth} from '@/hooks/useAuth';
import {AUTH_NAVIGATIONS} from '@/navigations/auth-stack-navigator';
import {useNavigation} from '@react-navigation/native';

type UserInfomation = {
  email: string;
  password: string;
  passwordConfirm: string;
};

function validateSignup(values: UserInfomation) {
  const errors = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }
  if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요.';
  }

  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = '비밀번호가 일치하지않습니다.';
  }

  return errors;
}

function SignupScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  const {signupMutation, loginMutation} = useAuth();

  const handleSubmit = () => {
    signupMutation.mutate(signup.values, {
      onSuccess: () => {
        // omit passwordConfirm
        const payload = {
          email: signup.values.email,
          password: signup.values.password,
        };

        loginMutation.mutate(payload);
      },
      onError: err => {
        console.log(err);
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputText
          autoFocus
          placeholder="이메일"
          error={signup.errors.email}
          touched={signup.touched.email}
          inputMode="email"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputText
          ref={passwordRef}
          placeholder="비밀번호"
          textContentType="oneTimeCode" // remove strong code
          error={signup.errors.password}
          touched={signup.touched.password}
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signup.getTextInputProps('password')}
        />
        <InputText
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" onPress={handleSubmit} />
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

export default SignupScreen;
