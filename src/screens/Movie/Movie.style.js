import { StyleSheet } from 'react-native';
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
  },
  text: { fontSize: 18, color: Colors.gray83, fontWeight: 'bold' },
  users: {
    borderBottomWidth: 1,
    borderColor: Colors.ee,
    padding: 1,
    marginTop: 10,
  },
  usersText: { fontSize: 15 },
});
