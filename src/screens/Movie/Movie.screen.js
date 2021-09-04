import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './Movie.style';
import { Colors } from '../../utils';
import { BaseContainer, Loading, Input } from '../../components';
import { fetchDataMovie } from '../../stores/actions/movie.action';

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

const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const { isLoading, movies } = movie;

  return (
    <>
      <BaseContainer>
        <View style={styles.outerWrapper}>
          <Icon name="logo-youtube" size={100} color={Colors.red} />
          <View>
            <Input
              style={styles.input}
              onChangeText={setNumber}
              value={number}
              placeholder="useless placeholder"
              keyboardType="numeric"
              returnKeyType="send"
            />
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => (isLoading ? {} : dispatch(fetchDataMovie()))}
            >
              {!isLoading ?
                <Text style={styles.text}>Click here to show Movie data:</Text>
                : <Loading size="large" />}
            </TouchableOpacity>
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
