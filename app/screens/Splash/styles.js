import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  logoContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  tagline: {
    color: Colors.black,
    fontStyle: 'italic',
    fontFamily: 'Barlow-Regular',
  },
});

export default styles;
