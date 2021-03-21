import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const WINDOWS_WIDTH = Dimensions.get('window').width;
const WINDOWS_HEIGHT = Dimensions.get('window').height;
const year = new Date().getFullYear();

export default {
  APP_NAME: 'App Name',
  COPYRIGHT: `Copyright ${year} | ~_~ `,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WINDOWS_WIDTH,
  WINDOWS_HEIGHT,
};
