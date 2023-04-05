



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

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`)
}
