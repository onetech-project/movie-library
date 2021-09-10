/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import SuperApp from './src/App';
import { name as appName } from './app.json';
import { Fonts } from './src/utils';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
const baseStyle = Text.defaultProps?.style || {};
Text.defaultProps.style = { ...baseStyle, fontFamily: Fonts.frutiger };
Text.defaultProps.lineBreakMode = 'clip';
Text.defaultProps.numberOfLines = 1;

AppRegistry.registerComponent(appName, () => SuperApp);
