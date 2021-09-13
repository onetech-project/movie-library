import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { BaseContainer, Widget } from '../../components';

const Home = () => (
  <>
    <BaseContainer>
      <TouchableOpacity style={styles.banner}>
        <Text>Image</Text>
      </TouchableOpacity>
      <View style={styles.widgetInfoWrapper}>
        {Array.from(Array(8).keys()).map((x) => (
          <Widget key={x.toString()} style={styles.widgetInfo}>
            <Text>{x}</Text>
          </Widget>
        ))}
      </View>
      <View style={styles.widgetNewsWrapper}>
        {Array.from(Array(8).keys()).map((x) => (
          <Widget key={x.toString()} style={styles.widgetNews}>
            <Text>{x}</Text>
          </Widget>
        ))}
      </View>
    </BaseContainer>
  </>
);

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps, null)(Home);
