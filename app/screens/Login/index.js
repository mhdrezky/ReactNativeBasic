/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {FilledButton, Input, LinearBackground, Loading} from '../../components';
import styles from './styles';
import {authActions} from '../../actions';
import {globalStyles, imgLogoWhite} from '../../assets';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function validate(mail) {
    // eslint-disable-next-line no-useless-escape
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(mail) === false) {
      return false;
    }
    return true;
  }
  useEffect(() => {
    if (authState.token !== null) {
      navigation.replace('Home');
    }
  }, [authState]);
  function doLoginUser() {
    if (validate(email) === false) {
      showMessage({
        message: 'Error email format!',
        description: 'Please insert correct email.',
        type: 'danger',
      });
    } else {
      dispatch(authActions.loginUser({email, password}));
    }
  }
  return (
    <LinearBackground>
      <SafeAreaView style={globalStyles.safeArea}>
        <MaterialIcon size={25} name="menu" color="white" />
        <View style={styles.logoContainer}>
          <Image
            source={imgLogoWhite}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text
            style={[globalStyles.sectionTitleBarlow, {color: Colors.white}]}>
            Login Form
          </Text>
        </View>
        <View style={styles.container}>
          <View style={globalStyles.sectionContainer}>
            <Input
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <FilledButton
              title="Login"
              style={styles.loginButton}
              onPress={doLoginUser}
            />
            <Loading loading={authState.isLoading} />
          </View>
        </View>
        <FlashMessage statusBarHeight={30} />
      </SafeAreaView>
    </LinearBackground>
  );
};

Login.propTypes = {
  navigation: PropTypes.any.isRequired,
};
export default Login;
