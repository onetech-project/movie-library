import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Input, { InputProps } from './Input';
import { Colors } from '../utils';
import { connect } from 'react-redux'

interface Props extends InputProps {
  onPressItem?: (item: {}) => {},
  titleProperty: string,
  textProperty: string,
  apiUrl: string,
  login: any,
}

const renderItems = ({ item, onPress, titleProperty, textProperty }) => (
  <TouchableOpacity style={styles.AutoCompleteResultItem} onPress={() => onPress(item)}>
    <Text style={styles.titleText}>{item[titleProperty]}</Text>
    <Text style={styles.text}>{item[textProperty]}</Text>
  </TouchableOpacity>
);

const AutoComplete: React.FC<Props> = (props) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (input) {
        try {
          const result = await fetch(props.apiUrl).then(response => response.json());
          setData(result.slice(0, 10));
        } catch (error) {
          console.log(error);
          setData([]);
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn)
  }, [input])

  return (
    <View>
      <Input
        placeholder={props.placeholder}
        value={input}
        onChangeText={setInput}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        placeholderTextColor={Colors.grayNearWhite}
      />
      {data && data.length > 0 && (
        <FlatList
          style={styles.list}
          data={data}
          contentContainerStyle={styles.AutoCompleteResultList}
          renderItem={({ item }) => renderItems({
            item,
            onPress: (item: {}) => {
              props.onPressItem(item);
              setInput('');
              setData([]);
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

const styles = StyleSheet.create({
  list: {
    zIndex: 1,
    position: 'absolute',
    marginTop: 65,
    width: '100%',
    maxHeight: 250,
  },
  AutoCompleteResultList: {
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.whiteSmoke,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1
  },
  AutoCompleteResultItem: {
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.whiteSmoke,
  },
  titleText: {
    fontWeight: '600',
    color: Colors.f3f,
    marginTop: 5,
    marginBottom: 3,
    fontSize: 16
  },
  text: {
    marginLeft: 2,
    color: Colors.gray97
  }
});

AutoComplete.defaultProps = {
  placeholder: 'Search',
  returnKeyType: 'done',
  keyboardType: 'default'
};

const mapStateToProps = (state: any) => ({
  login: state.login,
})

export default connect(mapStateToProps, null)(AutoComplete);