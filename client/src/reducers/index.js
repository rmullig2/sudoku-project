import { combineReducers } from 'redux';
import scoresReducer from './scores_reducer'
import boardReducer from './board_reducer';

var rootReducer = combineReducers({
  scores: scoresReducer,
  board: boardReducer
});

export default rootReducer