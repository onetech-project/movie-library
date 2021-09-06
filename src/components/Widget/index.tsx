import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {

}

const Widget: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.Widget, props.style]}>
      {props.children}
    </TouchableOpacity>
  )
}

export default Widget;