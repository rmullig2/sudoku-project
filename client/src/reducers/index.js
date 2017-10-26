import { combineReducers } from 'redux';
import scoresReducer from './scores_reducer'
import { reducer as FormReducer } from 'redux-form';

var rootReducer = combineReducers({
  scores: scoresReducer,
  form: FormReducer
});

export default rootReducer