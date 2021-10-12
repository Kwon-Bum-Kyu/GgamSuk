import { Dimensions } from 'react-native';

export default {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  ratioW: Dimensions.get('window').width / 375,
  ratioH: Dimensions.get('window').height / 667,
};
