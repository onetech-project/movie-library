import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  text: { fontSize: 18, color: Colors.gray83, fontWeight: 'bold' },
  buttonStyle: {
    backgroundColor: Colors.white,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: Colors.red,
    elevation: 1,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    minWidth: Dimensions.get('window').width - 50,
    maxWidth: Dimensions.get('window').width - 20,
  },
});
