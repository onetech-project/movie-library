import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Input, BaseContainer, Loading,
} from '../../components';
import Styles from './styles';
import { Colors } from '../../utils';
import { fetchDataLogin, logout } from '../../stores/actions';

const Login = ({ login }) => {
  const { isLoading, error } = login;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) Alert.alert('', error, [{ text: 'Ok', style: 'default' }]);
    return dispatch(logout());
  }, [error]);

  const handleLogin = () => {
    dispatch(fetchDataLogin({ username, password }));
  };

  return (
    <BaseContainer>
      <View style={Styles.container}>
        <Icon
          name="ios-home"
          size={100}
          color={Colors.blue}
        />
        <View>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            iconName="ios-person"
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            iconName={visible ? 'ios-eye' : 'ios-eye-off'}
            secureTextEntry={!visible}
            onIconPress={() => setVisible(!visible)}
          />
          <TouchableOpacity style={Styles.buttonStyle} onPress={handleLogin}>
            {!isLoading ?
              <Text style={Styles.text}>Login</Text>
              : <Loading size="large" />}
          </TouchableOpacity>
        </View>
      </View>
    </BaseContainer>
  );
};

const mapStateToProps = (state) => ({
  login: state.authReducer,
});

export default connect(mapStateToProps, null)(Login);
