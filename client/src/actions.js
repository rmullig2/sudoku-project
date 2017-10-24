import { NEW_GAME, ENTER_VALUE, SOLUTION_CHECK, GET_SCORE, ENTER_HIGH_SCORE } from './actionTypes'

export const newGame = () => {
  return {
    type: NEW_GAME, board, start, solution, time, solved
  }
}

export const enterValue = (array_index, value) => {
  return {
    type: ENTER_VALUE, board, value
  }
}

export const solutionCheck = (board, solution) => {
  return {
    type: SOLUTION_CHECK, solved
  }
}

export const getScore = (moves) => {
  return {
    type: GET_SCORE, score
  }
}

export const enterHighScore = (name, score) => {
  return {
    type: ENTER_HIGH_SCORE, name, score
  }
}