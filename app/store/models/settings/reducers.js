import {darkTheme} from '../../../assets';
import {SWITCH_THEME} from './actionTypes';

const initialState = {
  theme: {...darkTheme},
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: {...state.theme, ...action.baseTheme},
      };
    default:
      return state;
  }
};

export default settingsReducer;
