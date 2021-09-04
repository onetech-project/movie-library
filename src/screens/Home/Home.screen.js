import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './Home.style';
import { Colors } from '../../utils';
import { BaseContainer } from '../../components';
import { fetchDataUser } from '../../stores/actions/user.action';

const ListUser = ({ users }) => users.map((data) => (
  <View
    key={data.id}
    style={styles.users}
  >
    <Text style={styles.usersText}>
      {data.id}. {data.name}
    </Text>
  </View>
));

const Home = ({ users }) => {
  const dispatch = useDispatch();
  return (
    <>
      <BaseContainer>
        <View style={styles.outerWrapper}>
          <Icon name="ios-home" size={100} color={Colors.purplePastel} />
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataUser())}
            >
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser users={users} />
          </View>
        </View>
      </BaseContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

export default connect(mapStateToProps, null)(Home);
