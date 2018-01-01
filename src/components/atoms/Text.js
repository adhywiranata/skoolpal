import React from 'react';
import { Text } from 'react-native';
import { pure } from 'recompose';

const defaultStyle = {
  backgroundColor: 'transparent',
};

export default pure(({ children, style, ...props }) => (
  <Text {...props} style={{ ...defaultStyle, ...style }}>
    {children}
  </Text>
));