import {
  StyleSheet
} from 'react-native';
import { Colors } from '../../utils';

export default StyleSheet.create({
  input: {
    flex: 8,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.whiteSmoke,
    elevation: 1,
    color: Colors.black,
  },
  inputWithIcon: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.white,
  },
  icon: {
    flex: 1,
    paddingTop: 15,
    marginBottom: 10,
    paddingLeft: 0,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRadius: 3,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: Colors.whiteSmoke,
    elevation: 1,
  }
});