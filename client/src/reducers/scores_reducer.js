import { GET_SCORE, UPDATE_SCORE } from '../actionTypes'

export default function scoresReducer(state = [], action) {
  switch (action.type) {
    case GET_SCORE: {
      const { type, scores } = action
      return [ ...state, ...scores ]
    }
    
    case UPDATE_SCORE: {
      const { type, score } = action
      return [ ...state, ...score ]
    }
    
    default:
      return state
  }
}