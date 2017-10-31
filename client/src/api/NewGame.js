import { getScore } from '../actions.js';

export function NewGame() {
  return (dispatch) => {
    dispatch({ type: 'GET_NEW_BOARD' });
    return fetch('http://localhost:3001/api/v1/game')
      .then(response => response.json())
      .then({start,solution} => dispatch(newGame(start, solution)));
  };
}
