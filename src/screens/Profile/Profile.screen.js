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
import { Colors } from '../../utils';
import styles from './Profile.style';

const Profile = ({ navigation }) => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor={Colors.whiteSmoke} />
    <SafeAreaView style={styles.SafeAreaView1} />
    <SafeAreaView style={styles.SafeAreaView2}>
      <View style={styles.outerWrapper}>
        <Icon name="ios-settings" size={100} color={Colors.green} />
        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('', 'This is Profile Page', [{ text: 'OK', onPress: () => navigation.navigate('Home') }])}
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

export default Profile;
