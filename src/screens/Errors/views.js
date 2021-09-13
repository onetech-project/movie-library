import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { View, Text } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Analytics from 'appcenter-analytics';
import { Colors } from '../../utils';
import styles from './styles';

const errorHandler = (error, info) => {
  Analytics.trackEvent('Error', { message: error.message, stack: info.componentStack });
};

const ErrorFallback = ({ error }) => (
  <View style={styles.container}>
    <Icons name="ios-close-circle" size={50} color={Colors.red} />
    <Text style={styles.title}>Something Went Wrong.</Text>
    <Text style={styles.message}>{error.message}</Text>
  </View>
);

const ErrorHandler = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
    {children}
  </ErrorBoundary>
);

export default ErrorHandler;
