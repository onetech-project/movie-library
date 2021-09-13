import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch, connect } from 'react-redux';
import { Colors } from '../../utils';
import styles from './styles';
import { BaseContainer } from '../../components';
import { logout } from '../../stores/actions';

const Profile = ({ auth }) => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const kebabHandler = () => {
    setShowLogout(!showLogout);
  };

  return (
    <BaseContainer>
      <View style={styles.container}>
        <Icon
          onPress={kebabHandler}
          style={styles.kebabIcon}
          name="ellipsis-vertical-circle"
          size={40}
          color={Colors.black}
        />
        {showLogout && (
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => dispatch(logout())}
          >
            <Text style={styles.menuText}>Logout</Text>
            <Icon name="ios-log-out" color={Colors.black} size={20} />
          </TouchableOpacity>
        )}
        <Image
          source={{ uri: auth?.user.avatar.url.normal }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{auth?.user.fullname}</Text>
        <Text style={styles.email}>{auth?.user.email}</Text>
      </View>
      <View style={styles.menu}>
        {Array.from(Array(5).keys()).map((x) => (
          <TouchableOpacity
            key={x.toString()}
            style={styles.menuButton}
          >
            <Text style={styles.menuText}>{`MENU ${x + 1}`}</Text>
            <Icon name="ios-caret-forward" color={Colors.red} size={20} />
          </TouchableOpacity>
        ))}
      </View>
    </BaseContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps, null)(Profile);
