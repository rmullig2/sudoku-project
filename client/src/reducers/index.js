import { combineReducers } from 'redux';
import authReducer from './auth_reducer'
import { reducer as FormReducer } from 'redux-form';

var rootReducer = combineReducers({
  auth: authReducer,
  form: FormReducer
});

export default rootReducer