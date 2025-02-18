import { extendTheme } from '@chakra-ui/react';
import global from './global';
import components from './components';
import fonts from './fonts';
import colors from './colors';
import shadows from './shadows';

const theme = extendTheme({ styles: { global }, components, fonts, colors, shadows });

export default theme;
