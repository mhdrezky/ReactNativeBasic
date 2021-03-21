import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // opacity: 0.5,
  },
});

const LinearBackground = (props) => {
  const {children} = props;
  return (
    <LinearGradient
      colors={['#043D87', '#18DECE']}
      start={{x: 0.7, y: 0}}
      style={styles.root}>
      {children}
    </LinearGradient>
  );
};

export default LinearBackground;
