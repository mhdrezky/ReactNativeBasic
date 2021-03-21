import {combineReducers} from 'redux';
import authReducer from './auth/reducers';
import settingsReducer from './settings/reducers';

const reducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

export default reducer;
