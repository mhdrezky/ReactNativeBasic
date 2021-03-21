import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Loading = ({loading}) => {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color="black" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};
Loading.propTypes = {
  loading: PropTypes.bool,
};
Loading.defaultProps = {
  loading: false,
};

export default Loading;
