import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Input, { InputProps } from '../Input';
import Loading from '../Loading';
import { Colors } from '../../utils';
import { connect } from 'react-redux';
import styles from './styles';

interface Props extends InputProps {
  onPressItem?: (item: {}) => {},
  titleProperty: string,
  textProperty: string,
  apiUrl: string,
  login?: any,
}

const renderItems = ({ item, onPress, titleProperty, textProperty }) => (
  <TouchableOpacity style={styles.AutoCompleteResultItem} onPress={() => onPress(item)}>
    <Text style={styles.titleText}>{item[titleProperty]}</Text>
    <Text style={styles.text}>{item[textProperty]}</Text>
  </TouchableOpacity>
);

const renderLoading = () => (
  <Loading size="large" />
)

const AutoComplete: React.FC<Props> = (props) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (input) {
        try {
          setLoading(true);
          const result = await fetch(props.apiUrl).then(response => response.json());
          setData(result.slice(0, 10));
          setLoading(false);
        } catch (error) {
          console.log(error);
          setData([]);
          setLoading(false);
        }
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn)
  }, [input])

  return (
    <View>
      <Input
        iconName='ios-search'
        placeholder={props.placeholder}
        value={input}
        onChangeText={setInput}
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

AutoComplete.defaultProps = {
  placeholder: 'Search',
  returnKeyType: 'done',
  keyboardType: 'default'
};

const mapStateToProps = (state: any) => ({
  login: state.login,
})

export default connect(mapStateToProps, null)(AutoComplete);