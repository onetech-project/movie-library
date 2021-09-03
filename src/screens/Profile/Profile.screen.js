import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Profile.style';

const Home = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
    <SafeAreaView style={styles.SafeAreaView1} />
    <SafeAreaView style={styles.SafeAreaView2}>
      <View style={styles.outerWrapper}>
        <Icon name="ios-settings" size={100} color="green" />
        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('this is Profile Screen')}
            style={styles.buttonStyle}
          >
            <Text style={styles.text}>
              this is{' '}
              <Text style={styles.profile}>
                {' '}
                PROFILE{' '}
              </Text>{' '}
              screen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={styles.author}
      >
        <Text style={styles.authorText}>by Handi.dev</Text>
      </View>
    </SafeAreaView>
  </>
);

export default Home;
