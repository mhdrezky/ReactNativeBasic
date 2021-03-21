import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 16,
    fontSize: 13,
    fontWeight: '500',
  },
});

export default styles;
