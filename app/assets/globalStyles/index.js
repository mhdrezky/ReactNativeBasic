import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  safeAreaWhiteBg: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 24,
  },
  sectionTitleBarlow: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: 'Barlow-Regular',
  },
  sectionTitleRaleway: {
    fontSize: 24,
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Raleway-Regular',
  },
  sectionDescriptionBarlow: {
    marginTop: 8,
    fontSize: 18,
    color: Colors.dark,
    fontFamily: 'Barlow-Regular',
  },
  sectionDescriptionRaleway: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '300',
    color: Colors.dark,
    fontFamily: 'Raleway-Regular',
  },
});

export default globalStyles;
