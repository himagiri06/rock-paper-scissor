const validChoices = ['rock', 'paper', 'scissors'];
const userWinningCase = ['rockscissors', 'scissorspaper', 'paperrock'];

const generateRandomNumber = (minRange, maxRange) => {
  if (minRange > maxRange)
    throw new Error('maxRange value should be greater than minRange value');
  return Math.trunc(minRange + Math.random() * maxRange);
};

function getUserChoice(roundNo) {
  const choice = prompt(
    `ROUND NO #${roundNo} \nEnter your choice: \n 1. Rock \n 2. Paper \n 3. Scissors`
  )?.toLowerCase();
  if (!validChoices.includes(choice)) getUserChoice();
  return choice;
}

function getComptuerChoice() {
  return validChoices.at(generateRandomNumber(0, 3));
}

function playRound(roundNo) {
  const userChoice = getUserChoice(roundNo);
  const computerChoice = getComptuerChoice();

  if (userChoice === computerChoice) {
    console.log(`It's a tie. Both selected ${userChoice}`);
    return 'none';
  }
  if (userWinningCase.includes(`${userChoice}${computerChoice}`)) {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
    return 'user';
  }
  console.log(`You lose! ${computerChoice} beats ${userChoice}`);
  return 'computer';
}

function playGame(rounds) {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < rounds; i++) {
    const winner = playRound(i + 1);
    switch (winner) {
      case 'user':
        userScore += 10;
        break;
      case 'computer':
        computerScore += 10;
        break;
    }
  }

  console.log('GAME OVER');
  console.log(`Your Score: ${userScore}`);
  console.log(`Computer's Score: ${computerScore}`);
}

playGame(5);
