import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import { BaseContainer, Widget } from '../../components';

const Home = () => (
  <>
    <BaseContainer>
      <TouchableOpacity style={styles.banner}>
        <Text>Image</Text>
      </TouchableOpacity>
      <View style={styles.widgetInfoWrapper}>
        <FlatList
          data={Array.from(Array(8).keys())}
          numColumns={4}
          renderItem={({ item }) => (
            <Widget style={styles.widgetInfo}>
              <Text>{item}</Text>
            </Widget>
          )}
        />
      </View>
      <View style={styles.widgetNewsWrapper}>
        <FlatList
          data={Array.from(Array(4).keys())}
          renderItem={({ item }) => (
            <Widget style={styles.widgetNews}>
              <Text>{item}</Text>
            </Widget>
          )}
        />
      </View>
    </BaseContainer>
  </>
);

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps, null)(Home);
