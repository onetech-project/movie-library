import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils';
import styles from './styles';

interface Props {
  title: string
}

const Accordion: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const [caret, setCaret] = useState('forward');

  const handlePress = () => {
    setShow(!show);
    setCaret(show ? 'forward' : 'down');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.header} onPress={handlePress}>
        <Text style={styles.title}>{props.title}</Text>
        <Icon name={`ios-caret-${caret}`} size={25} color={Colors.red} />
      </TouchableOpacity>
      {show && (
        <>
          <View style={[styles.itemContainer, !props.children ? styles.contentEmpty : null, styles.list]}>
            {props.children || (
              <Icon size={25} name="ios-close-circle" color={Colors.gray70} />
            )}
          </View>
        </>
      )}
    </View>
  )
}

Accordion.defaultProps = {
  title: 'Accordion',
};

export default Accordion;