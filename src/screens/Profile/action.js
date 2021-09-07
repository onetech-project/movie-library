export const fetchLogoutRequest = () => ({
  type: 'LOGOUT',
});

export const logout = () => async (dispatch) => dispatch(fetchLogoutRequest());
