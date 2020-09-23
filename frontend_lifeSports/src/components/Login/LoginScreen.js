import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import palette from '../../styles/palette';
import LoginForm from './LoginForm';

const LoginScreen = ({ navigation }) => {
  return(
    <View style={ styles.container }>
      <LoginForm
        navigation={ navigation }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray[1],
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleArea: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: 10,
    fontSize: 30,
  }
});

export default LoginScreen;