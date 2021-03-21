import * as ActionType from './actionTypes';

const initialState = {
  token: null,
  isLoading: false,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_SIGN_IN:
      return {...state, isLoading: true};

    case ActionType.AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        isLoading: false,
      };

    case ActionType.AUTH_SIGN_IN_FAILURE:
      return {
        ...state,
        token: null,
        message: action.payload.message,
        isLoading: false,
      };
    case ActionType.AUTH_SIGN_OUT:
      return {
        ...state,
        token: null,
        message: action.payload.message,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
