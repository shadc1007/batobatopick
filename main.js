// computer pick its move
// compare computer and user move
// update the score and display the result
// save the game data 
// add reset button 
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
}
document.getElementById('score').innerText = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`

const pickOfComputer = () => {
  let computer = ''
  let randomNumber = Math.random()
  // 0 - 0.3 {1/3} 0.3 - 0.6 {2/3} 0.6 - 1 {3/3}
  if(randomNumber >= 0 && randomNumber < 1/3) {
      computer = 'Rock'
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computer = 'Paper'
  } else {
      computer = 'Scissor'
  }

  return computer
}

const playGame = (user) => {
  const computer = pickOfComputer()
  let result = ''

  if(user === 'Rock') {
      if(computer === 'Rock') {
        result = 'Tie.'
      } else if (computer === 'Paper') {
         result = 'You lose.'
      } else {
         result = 'You win.'
      }
  } else if(user === 'Paper') {
      if(computer === 'Paper') {
        result = 'Tie.'
      } else if(computer === 'Rock') {
        result = 'You win.'
      } else {
         result = 'You lose.'
      }
  } else {
      if(computer === 'Scissor') {
        result = 'Tie.'
      } else if(computer === 'Rock') {
        result = 'You lose.'
      } else {
         result = 'You win.'
      }
  }   

  if(result === 'You win.') {
      score.wins += 1
  } else if (result === 'You lose.') {
      score.loses += 1
  } else {
      score.ties += 1
  }

  document.getElementById('result').innerText = result
  document.getElementById('pick').innerText = `You picked ${user} -- Computer picked ${computer}.`
  document.getElementById('score').innerText = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`
  saveTheGame()
}


const saveTheGame = () => {
  localStorage.setItem('score', JSON.stringify(score))
}

const reset = () => {
  score.wins = 0
  score.loses = 0
  score.ties = 0
  localStorage.removeItem('score')
  document.getElementById('result').innerText = ''
  document.getElementById('pick').innerText = ''
  document.getElementById('score').innerText = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`
}