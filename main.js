// when button clicked 
 //computer picks a move
 // compare player move and computer move
 // update the score
 // display the result



const score = {
  wins: 0,
  loses: 0,
  ties: 0
}   


const pickComputerMove = () => {  
  let randomNumber = Math.random()
  let system = '';

  if(randomNumber >= 0 && randomNumber < 1/3) system = 'Rock';
  else if (randomNumber >= 1/3 && randomNumber < 2/3) system = 'Paper';
  else system = 'Scissors';

  return system;
}

const playGame = (playerMove) => {
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.'
    } else if (computerMove === 'Paper') {
      result = 'You lose.'
    } else {
      result = 'You win.'
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Paper') {
      result = 'Tie.'
    } else if (computerMove === 'Rock') {
      result = 'You win.'
    } else {
      result = 'You lose.'
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Scissors') {
      result = 'Tie.'
    } else if (computerMove === 'Rock') {
      result = 'You lose.'
    } else {
      result  = 'You win.'
    }
  }

  if (result === 'You win.') {
    score.wins += 1
  } else if (result === 'You lose.') {
    score.loses += 1
  } else {
    score.ties += 1
  }
  
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
  Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`)
}
