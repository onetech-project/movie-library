import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform
} from 'react-native';
import Input, { InputProps } from '../Input';
import Loading from '../Loading';
import { Colors } from '../../utils';
import { connect } from 'react-redux';
import styles from './styles';
import DateTimePicker, {
  BaseProps,
  IOSNativeProps,
  AndroidNativeProps,
  DatePickerOptions,
  TimePickerOptions,
  WindowsNativeProps,
} from '@react-native-community/datetimepicker';
import { Button } from 'react-native-vector-icons/Ionicons';

interface Props { }

const DatePicker: React.FC<
  Props
  & BaseProps
  & IOSNativeProps
  & AndroidNativeProps
  & DatePickerOptions
  & TimePickerOptions
  & WindowsNativeProps> = (props) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };

    return (
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  };

export default DatePicker;