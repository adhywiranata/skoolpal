import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default ({ children, style, ...props }) => (
  <LinearGradient colors={['#2F80ED', '#56CCF2']} style={{ ...style }}>
  { children }
  </LinearGradient>
);