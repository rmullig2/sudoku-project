export function PostScore(name, score) {
  return (dispatch) => {
    dispatch({ type: 'POSTING_SCORE' });
    return fetch('http://localhost:3001/api/v1/high_scores', {
      method: 'post',
      name: name,
      time: score
    })
      .then(response => response.json());
  };
}
