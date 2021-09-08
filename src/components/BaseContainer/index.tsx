import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  ScrollView,
} from 'react-native';
import { Colors } from '../../utils';
import styles from './styles';

interface Props extends StatusBarProps {
  isLoading: boolean
}

const BaseContainer: React.FC<Props> = (props) => (
  <>
    <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.white} {...props} />
    <SafeAreaView style={styles.SafeAreaView1} />
    <SafeAreaView style={styles.SafeAreaView2}>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {props.children}
      </ScrollView>
    </SafeAreaView>
  </>
);

BaseContainer.defaultProps = {
  isLoading: true
}

export default BaseContainer;
