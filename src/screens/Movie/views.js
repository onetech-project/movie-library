import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { Colors } from '../../utils';
import {
  BaseContainer, Loading, AutoComplete, DatePicker, Picker,
} from '../../components';
import { fetchDataMovie } from './action';

const ListMovie = ({ movies }) => movies.map((data) => (
  <View
    key={data.id}
    style={styles.users}
  >
    <Text style={styles.usersText}>
      {data.id}. {data.title}
    </Text>
  </View>
));

const ListUsers = ({ users }) => users.map((data) => (
  <View
    key={data.id}
    style={styles.users}
  >
    <Text style={styles.usersText}>
      {data.id}. {data.login}
    </Text>
  </View>
));

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const { isLoading, movies } = movie;
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <>
      <BaseContainer>
        <View style={styles.outerWrapper}>
          <Icon name="logo-youtube" size={100} color={Colors.red} />
          <View>
            <AutoComplete
              apiUrl="https://api.github.com/users"
              titleProperty="login"
              textProperty="url"
              // onPressItem={(item) => {
              //   setUsers([...users, item]);
              // }}
              getSelected={(seleted) => setUsers(seleted)}
            />
            <DatePicker />
            <Picker
              data={users}
              onPressItem={setSelectedUser}
              titleProperty="login"
              textProperty="url"
              placeholder="Select"
              value={selectedUser.login}
            />
            {Array.from(Array(1).keys()).map((x) => (
              <TouchableOpacity
                key={x.toString()}
                style={styles.buttonStyle}
                onPress={() => (isLoading ? {} : dispatch(fetchDataMovie()))}
              >
                {!isLoading ?
                  <Text style={styles.text}>Click here to show Movie data:</Text>
                  : <Loading size="large" />}
              </TouchableOpacity>

            ))}
            <ListUsers users={users} />
            <ListMovie movies={movies} />
          </View>
        </View>
      </BaseContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movieReducer,
});

export default connect(mapStateToProps, null)(Movie);
