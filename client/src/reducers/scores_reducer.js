import { GET_SCORE, UPDATE_SCORE } from '../actionTypes'

export default function scoresReducer(state = [], action) {
  switch (action.type) {
    case GET_SCORE: {
      const { type, scores } = action
      return [ ...state, ...scores ]
    }
    
    case UPDATE_SCORE: {
      const { type, score } = action
      let newState = state.map(record => {
        if (!(record.id == score.id)) {
          return record
        }
        else {
          return score
        }
      })
      newState.sort(function(a, b) {
        return b.likes - a.likes;
      });
      //debugger
      return newState
    }
    
    default:
      return state
  }
}