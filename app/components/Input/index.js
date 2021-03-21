/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    color: 'black',
  },
});

const Input = ({style, ...props}) => (
  <TextInput
    {...props}
    style={[styles.input, style]}
    placeholderTextColor="darkgray"
  />
);

Input.propTypes = {
  style: PropTypes.object,
};
Input.defaultProps = {
  style: {},
};

export default Input;
