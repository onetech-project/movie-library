import {
  StyleSheet
} from 'react-native';
import { Colors } from '../../utils';

export default StyleSheet.create({
  list: {
    zIndex: 99,
    position: 'absolute',
    marginTop: 52,
    width: '100%',
    maxHeight: 250,
    borderBottomWidth: 1,
    borderColor: Colors.whiteSmoke,
    elevation: 2,
    marginLeft: 10
  },
  PickerList: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.whiteSmoke,
    elevation: 2,
  },
  PickerItem: {
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.whiteSmoke,
  },
  titleText: {
    fontWeight: '600',
    color: Colors.f3f,
    marginTop: 5,
    marginBottom: 3,
    fontSize: 16
  },
  text: {
    marginLeft: 2,
    color: Colors.gray97
  }
});