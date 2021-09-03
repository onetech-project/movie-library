import { getMovie } from '../../api/fakeApiMovie';

export const fetchMovieRequest = () => ({
  type: 'FETCH_MOVIE_REQUEST',
});

export const fetchMovieSuccess = (movies) => ({
  type: 'FETCH_MOVIE_SUCCESS',
  payload: movies,
});

export const fetchMovieFail = (error) => ({
  type: 'FETCH_MOVIE_FAILED',
  payload: error,
});

export const fetchDataMovie = () => async (dispatch) => {
  try {
    dispatch(fetchMovieRequest());
    const { data } = await getMovie();
    dispatch(fetchMovieSuccess(data));
  } catch (error) {
    dispatch(fetchMovieFail(error));
  }
};
