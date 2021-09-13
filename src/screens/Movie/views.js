import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import {
  BaseContainer, AutoComplete, DatePicker, Picker, Upload, Accordion,
} from '../../components';

const Movie = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <>
      <BaseContainer>
        <View style={styles.outerWrapper}>
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
            <Accordion title="Accordion Empty" />
            <Accordion>
              {[...new Array(10)].map(() => (
                <View>
                  <Text>TEST</Text>
                </View>
              ))}
            </Accordion>
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
