import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILED,
  LOGOUT,
} from '../types';

const initialState = {
  auth: null,
  isLoading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...initialState,
        isLoading: true,
      };

    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        auth: payload,
        isLoading: false,
      };
    case FETCH_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
