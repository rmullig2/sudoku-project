import { updateScore } from '../actions.js';

export function LikeScore(id) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_REQUEST' });
    return fetch('http://localhost:3001/api/v1/update_score', {
      //mode: 'no-cors',
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
    .then(score => dispatch(updateScore(score)));
  }
}
