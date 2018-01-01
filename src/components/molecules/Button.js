import React from 'react';
import {
  TextAtom,
  TouchableAtom,
} from '../atoms';

const defaultButtonStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  padding: 20,
  margin: 10,
}

const defaultTextStyle = {
  fontSize: 18,
  textAlign: 'center',
  fontWeight: '600',
};

export default ({ children, style, textStyle, ...props }) => (
  <TouchableAtom {...props} style={{ ...defaultButtonStyle, ...style }}>
    {typeof children === 'string' && (
      <TextAtom style={{ ...defaultTextStyle, ...textStyle }}>{children}</TextAtom>
    )}
    {typeof children !== 'string' && children}
  </TouchableAtom>
);