import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import { Colors } from '../utils';

// eslint-disable-next-line react/jsx-props-no-spreading
const Input = (props) => (<TextInput style={styles.input} placeholderTextColor={Colors.grayNearWhite} {...props} />);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: Colors.black,
  },
});

export default Input;
