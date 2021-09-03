import { combineReducers } from 'redux';
import { movieReducer } from './movie.reducer';
import { userReducer } from './user.reducer';
// insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  movieReducer,
});

export default reducers;
