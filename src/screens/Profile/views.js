import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch } from 'react-redux';
import { Colors } from '../../utils';
import styles from './styles';
import { BaseContainer } from '../../components';
import { logout } from './action';

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <>
      <BaseContainer>
        <View style={styles.outerWrapper}>
          <Icon name="ios-settings" size={100} color={Colors.green} />
          <View>
            <TouchableOpacity
              onPress={() => dispatch(logout())}
              style={styles.buttonStyle}
            >
              <Text style={styles.text}>
                press to
                <Text style={styles.profile}>
                  {' '}
                  LOGOUT{' '}
                </Text>{' '}
                !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={styles.author}
        >
          <Text style={styles.authorText}>by Handi.dev</Text>
        </View>
      </BaseContainer>
    </>
  );
};

export default Profile;
