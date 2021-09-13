import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import {
  BaseContainer,
  AutoComplete,
  DatePicker,
  Picker,
  Upload,
  Accordion,
  Input,
} from '../../components';
import { GlobalStyles } from '../../utils';

const Movie = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <BaseContainer>
      <View style={styles.outerWrapper}>
        <AutoComplete
          apiUrl="https://api.github.com/users"
          titleProperty="login"
          textProperty="url"
          getSelected={(seleted) => setUsers(seleted)}
        />
        <View style={GlobalStyles.fullWidth}>
          <Input placeholder="Type Here" iconName="ios-pencil" />
        </View>
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
          {[...new Array(10)].map((x) => (
            <View key={x}>
              <Text>TEST</Text>
            </View>
          ))}
        </Accordion>
      </View>
    </BaseContainer>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movieReducer,
});

export default connect(mapStateToProps, null)(Movie);
