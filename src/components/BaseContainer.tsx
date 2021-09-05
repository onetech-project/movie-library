import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  StatusBarProps,
  ScrollView,
} from 'react-native';
import { Colors } from '../utils';

interface Props extends StatusBarProps { }

const BaseContainer: React.FC<Props> = (props) => (
  <>
    <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.white} {...props} />
    <SafeAreaView style={styles.SafeAreaView1} />
    <SafeAreaView style={styles.SafeAreaView2}>
      <ScrollView
        nestedScrollEnabled={true}
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        {props.children}
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  SafeAreaView1: { backgroundColor: Colors.white, flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: Colors.white },
  container: { flex: 1, backgroundColor: Colors.white, top: 30, borderWidth: 1 }
});

export default BaseContainer;
