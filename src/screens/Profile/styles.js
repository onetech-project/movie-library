import { StyleSheet } from 'react-native';
import { Colors } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kebabIcon: {
    alignSelf: 'flex-end',
    marginEnd: 15,
  },
  logoutButton: {
    borderColor: Colors.black,
    borderWidth: 1,
    flexDirection: 'row',
    position: 'absolute',
    elevation: 1,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    right: 35,
    top: 45,
    width: 200,
    backgroundColor: Colors.white,
  },
  menuText: { flex: 1, paddingVertical: 20 },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: { fontSize: 25, color: Colors.black },
  email: { fontSize: 15 },
  menu: { flex: 3, paddingHorizontal: 5 },
  menuButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.red,
    marginVertical: 2,
    paddingHorizontal: 10,
  },
});
