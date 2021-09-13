import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../utils';

export default StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: Colors.white,
  },
  buttonStyle: {
    backgroundColor: Colors.ee,
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: Colors.whiteSmoke,
    borderRadius: 10,
    width: '100%',
    minWidth: Dimensions.get('window').width - 50,
    maxWidth: Dimensions.get('window').width - 20,
  },
  text: {
    fontSize: 18, color: Colors.gray83, fontWeight: 'bold', alignSelf: 'center',
  },
  users: {
    borderBottomWidth: 1,
    borderColor: Colors.ee,
    padding: 1,
    marginTop: 10,
  },
  usersText: { fontSize: 15 },
});
