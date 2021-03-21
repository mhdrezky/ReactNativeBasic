import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {imgBackground} from '../../assets';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const Background = (props) => {
  const {children} = props;
  return (
    <ImageBackground
      source={imgBackground}
      resizeMode="cover"
      style={styles.root}>
      {children}
    </ImageBackground>
  );
};

export default Background;
