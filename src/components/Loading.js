import React from 'react';
import {
  ActivityIndicator, View,
} from 'react-native';
import { Colors } from '../utils';

const Loading = ({ size, color }) => (
  <View>
    <ActivityIndicator size={size || 'small'} color={color || Colors.red} />
  </View>
);

export default Loading;
