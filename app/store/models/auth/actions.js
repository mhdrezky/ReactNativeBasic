/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import {showMessage} from 'react-native-flash-message';
import APIKit from '../../../services/APIKit';
import * as ActionType from './actionTypes';

// eslint-disable-next-line no-unused-vars
export const loginUser = (payload) => (dispatch, getState) => {
  const {email, password} = payload;
  dispatch({type: ActionType.AUTH_SIGN_IN});
  APIKit.post('/auth/login', {
    email,
    password,
  })
    .then((response) => {
      // console.log('=== response', response);
      dispatch({
        type: ActionType.AUTH_SIGN_IN_SUCCESS,
        payload: {token: response.data.access_token, message: 'Success'},
      });
    })
    .catch((error) => {
      // console.log('=== error', error);
      showMessage({
        message: 'Something wrong',
        description: error.message,
        type: 'danger',
      });
      dispatch({
        type: ActionType.AUTH_SIGN_IN_FAILURE,
        payload: {
          message: error.message,
        },
      });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: ActionType.AUTH_SIGN_OUT,
    payload: {
      message: 'Signed out',
    },
  });
};
