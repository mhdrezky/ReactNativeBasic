/* eslint-disable no-console */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {authActions} from '../../actions';
import {globalStyles} from '../../assets';
import {TextButton} from '../../components';

const Registration = ({navigation}) => {
  console.log('+++ Home Screen');
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={globalStyles.root}>
      <View style={globalStyles.sectionContainer}>
        <Text style={globalStyles.sectionTitleBarlow}>
          Welcome to React Native Home Screen!
        </Text>
        <Text style={globalStyles.sectionDescriptionBarlow}>
          This section using font Barlow
        </Text>
      </View>
      <View style={globalStyles.sectionContainer}>
        <Text style={globalStyles.sectionTitleRaleway}>
          Welcome to React Native Home Screen!
        </Text>
        <Text style={globalStyles.sectionDescriptionRaleway}>
          This section using font Raleway
        </Text>
      </View>
      <View style={globalStyles.sectionContainer}>
        <TextButton
          title="=== Logout ==="
          onPress={() => {
            dispatch(authActions.logoutUser());
            navigation.replace('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Registration;
