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
import styles from './Movie.style';
import { fetchDataMovie } from '../../stores/actions/movie.action';
import { Colors } from '../../utils';
import { Loading } from '../../components';

const Movie = ({ movie }) => {
  const { isLoading, movies } = movie;
  const dispatch = useDispatch();

  const ListMovie = () => movies.map((data) => (
    <View
      key={data.id}
      style={styles.users}
    >
      <Text style={styles.usersText}>
        {data.id}. {data.title}
      </Text>
    </View>
  ));

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.whiteSmoke} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name="logo-youtube" size={100} color={Colors.red} />
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => (isLoading ? {} : dispatch(fetchDataMovie()))}
            >
              {!isLoading ?
                <Text style={styles.text}>Click here to show Movie data:</Text>
                : <Loading size="large" />}
            </TouchableOpacity>
            <ListMovie />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.users,
  movie: state.movieReducer,
});

export default connect(mapStateToProps, null)(Movie);
