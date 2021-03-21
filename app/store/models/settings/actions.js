/* eslint-disable import/prefer-default-export */

import {SWITCH_THEME} from './actionTypes';

export const switchTheme = (BaseTheme) => (dispatch) => {
  dispatch({
    type: SWITCH_THEME,
    baseTheme: BaseTheme,
  });
};
