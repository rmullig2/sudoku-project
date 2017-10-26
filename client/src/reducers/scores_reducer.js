import { GET_SCORE, ENTER_HIGH_SCORE } from '../actionTypes'

export default function scoresReducer(state = {}, action) {
  switch (action.type) {
    case GET_SCORE: {
      const { type, ...scores } = action
      return [ ...state, ...scores ]
    }
    
    case ENTER_HIGH_SCORE: {
      return ...
    }
    
    default:
      return state
  }