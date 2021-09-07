import { combineReducers } from 'redux';
import { Login, Home, Movie } from '../../screens';
// insert another reducers here to be combined

const reducers = combineReducers({
  movieReducer: Movie.reducer,
  loginReducer: Login.reducer,
  homeReducer: Home.reducer,
});

export default reducers;
