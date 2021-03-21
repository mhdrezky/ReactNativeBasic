/* eslint-disable no-console */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

const FilledButton = ({title, style, onPress}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor: colors.primary}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
FilledButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};
FilledButton.defaultProps = {
  title: 'Submit',
  style: {},
  onPress: () => {
    console.log('Clicked!');
  },
};
export default FilledButton;
