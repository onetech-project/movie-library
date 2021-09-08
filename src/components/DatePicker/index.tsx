import React, { useState } from 'react';
import {
  View,
  Platform,
  Pressable
} from 'react-native';
import Input, { InputProps } from '../Input';
import DateTimePicker, {
  BaseProps,
  IOSNativeProps,
  AndroidNativeProps,
  DatePickerOptions,
  TimePickerOptions,
  WindowsNativeProps,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import { GlobalStyles } from '../../utils';

interface Props { }

const DatePicker: React.FC<
  Props
  & BaseProps
  & IOSNativeProps
  & AndroidNativeProps
  & DatePickerOptions
  & TimePickerOptions
  & WindowsNativeProps
  & InputProps> = (props) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      props?.onChange?.(selectedDate);
    };

    return (
      <View style={GlobalStyles.fullWidth}>
        <Pressable onPress={() => setShow(true)}>
          <Input
            iconName="ios-calendar"
            placeholder="Select Date"
            editable={false}
            value={moment(date).format('DD MMMM YYYY')}
          />
        </Pressable>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display={Platform.OS === 'ios' ? "default" : "calendar"}
            onChange={onChange}
            {...props}
          />
        )}
      </View>
    );
  };

export default DatePicker;