import React from 'react';
import {
  TextInput,
  TextInputProps,
  View
} from 'react-native';
import { Colors } from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export interface InputProps extends TextInputProps {
  iconName?: string,
  onIconPress?: () => {}
}

const Input: React.FC<InputProps> = (props) => (
  <View style={styles.wrapper}>
    <TextInput
      style={props.iconName ? { ...styles.input, ...styles.inputWithIcon } : styles.input}
      placeholderTextColor={props.placeholderTextColor}
      {...props}
    />
    {props.iconName !== '' && (
      <Icon
        name={props.iconName}
        style={styles.icon}
        size={20}
        color={Colors.grayNearWhite}
        onPress={props.onIconPress} />
    )}
  </View>
)

Input.defaultProps = {
  iconName: '',
  placeholderTextColor: Colors.grayNearWhite
}

export default Input;