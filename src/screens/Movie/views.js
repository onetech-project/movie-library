import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { Colors } from '../../utils';
import {
  BaseContainer, AutoComplete, DatePicker, Picker, Upload,
} from '../../components';

const Movie = () => {
  const [users, setUsers] = useState([]);
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
            <Upload />
            {/* {Array.from(Array(1).keys()).map((x) => (
              <TouchableOpacity
                key={x.toString()}
                style={styles.buttonStyle}
                onPress={() => (isLoading ? {} : dispatch(fetchDataMovie()))}
              >
                {!isLoading ?
                  <Text style={styles.text}>Click here to show Movie data:</Text>
                  : <Loading size="large" />}
              </TouchableOpacity>

            ))} */}
            {/* <ListUsers users={users} /> */}
            {/* <ListMovie movies={movies} /> */}
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
