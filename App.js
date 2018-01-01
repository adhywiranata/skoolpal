/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { GradientViewAtom, TextAtom } from './src/components/atoms';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <GradientViewAtom style={styles.container}>
        <TextAtom style={{ marginTop: 100, fontWeight: '200', fontSize: 48, color: 'white' }}>
          Skoolpal
        </TextAtom>
      </GradientViewAtom>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250,
  },
});
