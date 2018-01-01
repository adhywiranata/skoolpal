/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ViewAtom, GradientViewAtom, TextAtom } from './src/components/atoms';
import { ButtonMolecule } from './src/components/molecules';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

export default class App extends Component<{}> {
  render() {
    return (
      <GradientViewAtom style={styles.container}>
        <ViewAtom />
        <TextAtom style={{ textAlign: 'center', marginTop: 30, fontWeight: '200', fontSize: 48, color: 'white' }}>
          Skoolpal
        </TextAtom>
        <ButtonMolecule>Sign In</ButtonMolecule>
      </GradientViewAtom>
    );
  }
}
