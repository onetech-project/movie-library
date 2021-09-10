import { CHANGE_STATUS_BAR_COLOR } from '../types';
import { Colors } from '../../utils';

const initialState = {
  color: Colors.white,
};

export const baseContainerReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_STATUS_BAR_COLOR:
      return {
        ...state,
        color: payload,
      };

    default:
      return state;
  }
};
