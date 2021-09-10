import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { baseContainerReducer } from './baseContainer';
// insert another reducers here to be combined

const reducers = combineReducers({
  authReducer,
  baseContainerReducer,
});

export default reducers;
