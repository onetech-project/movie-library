import api from '../../api';

export const fetchLoginRequest = () => ({
  type: 'FETCH_LOGIN_REQUEST',
});

export const fetchLoginSuccess = (auth) => ({
  type: 'FETCH_LOGIN_SUCCESS',
  payload: auth,
});

export const fetchLoginFail = (error) => ({
  type: 'FETCH_LOGIN_FAILED',
  payload: error,
});

export const fetchDataLogin = ({ username, password }) => async (dispatch) => {
  try {
    dispatch(fetchLoginRequest());
    const { data } = await api.login({ email: username, password });
    dispatch(fetchLoginSuccess(data.data));
  } catch (error) {
    let message = error?.response?.data?.message;
    if (message === 'ValidationError') message = error?.response?.data?.errors.map((x) => x.message).join('\n');
    dispatch(fetchLoginFail(message || 'Unknown Error'));
  }
};
