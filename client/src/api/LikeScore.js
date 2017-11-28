export function LikeScore(id) {
    fetch('http://localhost:3001/api/v1/high_scores', {
      method: 'patch',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      })
    })
}
