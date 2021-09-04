import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../utils';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  SafeAreaView1: { backgroundColor: Colors.white, flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: Colors.white },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: Colors.black,
  },
});
