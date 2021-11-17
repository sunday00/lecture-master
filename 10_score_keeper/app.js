const scores = {
  p1Score : 0,
  p2Score : 0,
  winningScore : document.querySelector('#set-score').value,
  changeSetting() {
    this.winningScore = document.querySelector('#set-score').value
    this.resetScore()
  },
  addScore (target) {
    let player = target.dataset.player;
    
    let score = `p${player}Score`;
    this[score]++

    const playerElement = document.querySelector(`#p${player}-display`);
    
    const oppositePlayer = parseInt(player) === 1 ? 2 : 1;
    const oppositeElement = document.querySelector(`#p${oppositePlayer}-display`);
    
    playerElement.textContent = this[score];
    if( this[score] >= this.winningScore ) {
      playerElement.classList.add('winner')
      oppositeElement.classList.add('loser')

      document.querySelectorAll('.player-btn').forEach(b => b.disabled = true)
    }

  },
  resetScore (){
    this.p1Score = 0;
    this.p2Score = 0;
    document.querySelectorAll('h1 span').forEach(s => {
      s.textContent = 0
      s.classList.remove(...s.classList)
    });
    document.querySelectorAll('.player-btn').forEach(b => b.disabled = false)
  }
}

function isGameOver() {
  return scores.p1Score >= scores.winningScore || scores.p2Score >= scores.winningScore;
}

document.querySelector('#set-score').addEventListener('change', () => {
  scores.changeSetting()
})

document.querySelector('.controls').addEventListener('click', (e) => {
  if( e.target.id === 'reset' ) return scores.resetScore();
  
  if( isGameOver() && e.target.id !== 'reset' ) return;
  
  if(e.target.classList.contains('player-btn')) scores.addScore(e.target);
});