/* eslint-disable react/forbid-prop-types */
import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {globalStyles, imgLogo} from '../../assets';
import {ImageBackground} from '../../components';
import styles from './styles';
import {setClientToken} from '../../services/APIKit';

const Splash = ({navigation}) => {
  const authState = useSelector((state) => state.auth);
  useEffect(async () => {
    function checkLogedIn() {
      console.log('+++ checkLogedIn authState', authState);
      if (authState.token !== null) {
        setClientToken(authState.token);
        console.log('+++ goto home');
        return true;
      }
      console.log('+++ goto login');
      return false;
    }
    const isLoged = await checkLogedIn();
    const nextScreen = isLoged ? 'Home' : 'Login';
    setTimeout(() => {
      navigation.replace(nextScreen);
    }, 3000);
  }, [authState, navigation]);
  return (
    <ImageBackground>
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={globalStyles.container}>
          <View style={styles.logoContainer}>
            <Image source={imgLogo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.tagline}>React Native Basic.</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
Splash.propTypes = {
  navigation: PropTypes.any.isRequired,
};
export default Splash;
