import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps
} from 'react-native';
import { Colors } from '../utils';

export interface InputProps extends TextInputProps { }

const Input: React.FC<InputProps> = (props) => (<TextInput style={styles.input} placeholderTextColor={Colors.grayNearWhite} {...props} />)

const styles = StyleSheet.create({
  input: {
    padding: 10,
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
    borderColor: Colors.whiteSmoke,
    borderWidth: 1,
    borderRadius: 3,
    elevation: 1,
    margin: 10,
    color: Colors.black,
  },
});

export default Input;