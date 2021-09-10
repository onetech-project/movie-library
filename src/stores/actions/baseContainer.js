import { CHANGE_STATUS_BAR_COLOR } from '../types';

export const changeStatusBarColor = (color) => (dispatch) => dispatch({ type: CHANGE_STATUS_BAR_COLOR, payload: color });
