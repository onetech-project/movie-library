import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  fullWidth: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
  },
  fullHeight: {
    height: Dimensions.get('window').height,
    paddingVertical: 10,
  },
});
