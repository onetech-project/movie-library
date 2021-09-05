import React from 'react';
import {
  ActivityIndicator, View, ActivityIndicatorProps
} from 'react-native';
import { Colors } from '../utils';

interface Props extends ActivityIndicatorProps { }

const Loading: React.FC<Props> = (props) => (
  <View>
    <ActivityIndicator size={'small'} color={Colors.red} {...props} />
  </View>
);

export default Loading;
