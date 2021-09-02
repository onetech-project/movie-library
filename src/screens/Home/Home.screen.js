import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect, useDispatch } from 'react-redux';
import styles from './Home.style';
import { fetchDataUser } from '../../stores/actions/user.action';

const Home = (params) => {
  const dispatch = useDispatch();

  function ListUser() {
    return params.user.map((data) => (
      <View
        key={data.id}
        style={styles.users}
      >
        <Text style={styles.usersText}>
          {data.id}. {data.name}
        </Text>
      </View>
    ));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name="ios-home" size={100} color="purple" />
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataUser())}
            >
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.users,
});

export default connect(mapStateToProps, null)(Home);
