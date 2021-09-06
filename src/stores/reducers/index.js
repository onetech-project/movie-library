import { combineReducers } from 'redux';
import { movieReducer } from './movie.reducer';
import { userReducer } from './user.reducer';
import { Login } from '../../screens';
// insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  movieReducer,
  loginReducer: Login.reducer,
});

export default reducers;
