/* eslint-disable no-console */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
});

const TextButton = ({title, style, styleTitle, onPress}) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={[styles.text, styleTitle]}>{title}</Text>
  </TouchableOpacity>
);

TextButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  styleTitle: PropTypes.object,
  onPress: PropTypes.func,
};
TextButton.defaultProps = {
  title: 'Submit',
  style: {},
  styleTitle: {},
  onPress: () => {
    console.log('Clicked!');
  },
};
export default TextButton;
