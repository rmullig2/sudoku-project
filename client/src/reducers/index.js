import { combineReducers } from 'redux';
import authReducer from './auth_reducer'

var rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer