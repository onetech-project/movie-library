const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'FETCH_MOVIE_REQUEST':
      return {
        ...state,
        isLoading: true,
        movies: [],
      };

    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        movies: payload,
        isLoading: false,
      };
    case 'FETCH_MOVIE_FAILED':
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
