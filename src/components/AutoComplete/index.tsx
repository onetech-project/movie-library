import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Input, { InputProps } from '../Input';
import Loading from '../Loading';
import { Colors, GlobalStyles } from '../../utils';
import { connect } from 'react-redux';
import styles from './styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends InputProps {
  onPressItem?: (item: {}) => {},
  titleProperty: string,
  textProperty: string,
  apiUrl: string,
  login?: any,
  getSelected?: (selected: any[]) => []
}

const renderItems = ({ index, item, onPress, titleProperty, textProperty, onPressDeleteItem }) => (
  <TouchableOpacity
    key={index?.toString()}
    style={[styles.AutoCompleteResultItem, onPressDeleteItem ? styles.selectedList : null]}
    onPress={() => onPress(item)}
    activeOpacity={onPressDeleteItem ? 1 : 0.2}
  >
    <View style={{ flex: 11 }}>
      <Text style={styles.titleText}>{item[titleProperty]}</Text>
      <Text style={styles.text}>{item[textProperty]}</Text>
    </View>
    {onPressDeleteItem && (
      <Icon style={{ flex: 1, alignSelf: 'center' }} name="ios-close-circle" size={18} color={Colors.red} onPress={() => onPressDeleteItem(index)} />
    )}
  </TouchableOpacity>
);

const renderLoading = () => (
  <Loading size="large" />
)

const AutoComplete: React.FC<Props> = (props) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (input) {
        try {
          setLoading(true);
          const result = await axios.get(props.apiUrl);
          setData(result.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setData([]);
          setLoading(false);
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn)
  }, [input, props.apiUrl])

  useEffect(() => {
    props.getSelected(selected)
  }, [selected])

  return (
    <View style={GlobalStyles.fullWidth}>
      <Input
        iconName="ios-search"
        placeholder={props.placeholder}
        value={input}
        onChangeText={(text) => {
          setInput(text);
          props.onChangeText?.(text);
        }}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        placeholderTextColor={Colors.grayNearWhite}
      />
      {loading && (
        <View style={styles.loading}>
          {renderLoading()}
        </View>
      )}
      {data && data.length > 0 && (
        <FlatList
          style={styles.list}
          data={data}
          contentContainerStyle={styles.AutoCompleteResultList}
          renderItem={({ item, index }) => renderItems({
            index,
            item,
            onPress: (item: {}) => {
              props.onPressItem?.(item);
              setSelected([...selected, item])
              setInput('');
              setData([]);
            },
            titleProperty: props.titleProperty,
            textProperty: props.textProperty,
            onPressDeleteItem: null,
          })}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled
        />
      )}
      {selected.map((item, index) => renderItems({
        index,
        item,
        onPress: () => { },
        titleProperty: props.titleProperty,
        textProperty: props.textProperty,
        onPressDeleteItem: (index: any) => setSelected(selected.filter((x, i) => i !== index))
      }))}
    </View>
  )
};

AutoComplete.defaultProps = {
  placeholder: 'Search',
  returnKeyType: 'done',
  keyboardType: 'default',
  getSelected: () => []
};

const mapStateToProps = (state: any) => ({
  login: state.login,
})

export default connect(mapStateToProps, null)(AutoComplete);