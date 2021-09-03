import { Platform } from 'react-native';

export default {
  frutiger: 'Frutiger',
  frutigerLinotype: Platform.OS === 'ios' ? 'Frutiger Linotype' : 'Frutiger_Linotype_Bold',
  garamond: Platform.OS === 'ios' ? 'Adobe Garamond Pro' : 'AGaramondPro-Italic',
};
