/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import axios from 'axios';
import {SERVER_API} from '.';

// change it for your address and port that is running on your server
const APIKit = axios.create({
  baseURL: SERVER_API,
});
// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token) => {
  console.log('+++ setClientToken', token);
  APIKit.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
export default APIKit;
