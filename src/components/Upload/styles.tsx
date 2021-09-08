import { StyleSheet } from 'react-native';
import { Colors, GlobalStyles } from '../../utils';

export default StyleSheet.create({
  container: { ...GlobalStyles.fullWidth },
  header: { flexDirection: 'row', backgroundColor: Colors.barGray, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 },
  title: { alignSelf: 'center', flex: 7, fontSize: 15 },
  uploadIcon: { alignSelf: 'center', flex: 1 },
  itemContainer: { flexDirection: 'row', backgroundColor: Colors.barGray, padding: 20, borderRadius: 20, marginTop: 5 },
  fileIcon: { flex: 1, alignSelf: 'center' },
  fileInfo: { flex: 5, alignItems: 'flex-start', marginBottom: 5 },
  fileName: { fontSize: 15, flex: 1 },
  progressBar: { width: '100%', flex: 1 },
  action: { flex: 2, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }
})