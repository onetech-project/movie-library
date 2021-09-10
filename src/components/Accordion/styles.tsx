import { StyleSheet } from 'react-native';
import { Colors, GlobalStyles } from '../../utils';

export default StyleSheet.create({
  container: { ...GlobalStyles.fullWidth, marginTop: 10 },
  header: {
    flexDirection: 'row',
    borderColor: Colors.red,
    borderWidth: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 1
  },
  list: {
    borderColor: Colors.red,
    borderWidth: 1,
    borderTopWidth: 0
  },
  title: { alignSelf: 'center', flex: 7, fontSize: 15 },
  itemContainer: {
    padding: 20,
    backgroundColor: Colors.white
  },
  fileIcon: { flex: 1, alignSelf: 'center' },
  fileIconSuccess: { color: Colors.lightGreen },
  fileIconFailed: { color: Colors.gray70 },
  fileInfo: { flex: 5, alignItems: 'flex-start', marginBottom: 5 },
  fileName: { fontSize: 15, flex: 1 },
  progressBar: { width: '100%', flex: 1 },
  action: { flex: 2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' },
  errorMessage: { fontSize: 10 },
  contentEmpty: { alignItems: 'center' }
})