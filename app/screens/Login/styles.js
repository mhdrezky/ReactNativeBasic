import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 10,
    width: 70,
    height: 70,
  },
  container: {
    flex: 5,
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  buttonText: {
    color: Colors.white,
  },
});

export default styles;
