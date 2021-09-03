import { getUser } from '../../api/fakeApiUser';

export const fetchUserRequest = () => ({
  type: 'FETCH_USER_REQUEST',
});

export const fetchUserSuccess = (users) => ({
  type: 'FETCH_USER_SUCCESS',
  payload: users,
});

export const fetchUserFail = () => ({
  type: 'FETCH_USER_FAILED',
});

export const fetchDataUser = () => async (dispatch) => {
  try {
    dispatch(fetchUserRequest());
    const { data } = await getUser();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserFail());
  }
};
