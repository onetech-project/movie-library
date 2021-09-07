import { StyleSheet } from 'react-native';
import { Colors } from '../../utils';

export default StyleSheet.create({
  banner: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.red,
    backgroundColor: Colors.white,
    elevation: 1,
    marginHorizontal: 5,
    borderRadius: 20,
    marginTop: 10,
    padding: 100,
  },
  widgetNewsWrapper: {
    flexGrow: 1,
    marginBottom: 20,
  },
  widgetInfoWrapper: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  widgetInfo: {
    borderColor: Colors.red,
    margin: 5,
    padding: 37.5,
  },
  widgetNews: {
    borderColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
