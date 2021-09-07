import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Input, { InputProps } from '../Input';
import { Colors } from '../../utils';
import styles from './styles';

interface Props extends InputProps {
  onPressItem?: (item: {}) => {},
  titleProperty: string,
  textProperty: string,
  data: [],
}

const renderItems = ({ item, onPress, titleProperty, textProperty }) => (
  <TouchableOpacity style={styles.PickerItem} onPress={() => onPress(item)}>
    <Text style={styles.titleText}>{item[titleProperty]}</Text>
    <Text style={styles.text}>{item[textProperty]}</Text>
  </TouchableOpacity>
);

const Picker: React.FC<Props> = (props) => {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {

  }, [])

  return (
    <View>
      <Pressable onPress={() => setShow(true)}>
        <Input
          iconName="ios-caret-down"
          placeholder={props.placeholder}
          value={input}
          editable={false}
          placeholderTextColor={Colors.grayNearWhite}
        />
      </Pressable>
      {show && (
        <FlatList
          style={styles.list}
          data={props.data}
          contentContainerStyle={styles.PickerList}
          renderItem={({ item }) => renderItems({
            item,
            onPress: (item: {}) => {
              props.onPressItem(item);
              setInput(item[props.titleProperty]);
              setShow(false);
            },
            titleProperty: props.titleProperty,
            textProperty: props.textProperty
          })}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled
        />
      )}
    </View>
  )
};

Picker.defaultProps = {
  placeholder: 'Search',
  returnKeyType: 'done',
  keyboardType: 'default',
  data: []
};

export default Picker;