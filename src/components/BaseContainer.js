import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Colors } from '../utils';

const BaseContainer = ({ children }) => (
  <>
    <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.white} />
    <SafeAreaView style={styles.SafeAreaView1} />
    <SafeAreaView style={styles.SafeAreaView2}>
      {children}
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  SafeAreaView1: { backgroundColor: Colors.white, flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: Colors.white },
});

export default BaseContainer;
