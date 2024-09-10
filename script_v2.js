const options = ['rock', 'paper', 'scissors'];

const summaryDefault = 'Select an option 👆';
const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const summaryEl = document.querySelector('.summary');
const roundEl = document.querySelector('.round');
const gameResultEl = document.querySelector('.game-result');
const playAgainButton = document.querySelector('.play-again');
const gameScoreEl = document.querySelector('.game-result > h3');

let userScore;
let computerScore;
let round;

const MAX_ROUNDS = 5;

function initGame() {
  gameResultEl.classList.add('hidden');
  roundEl.textContent = '';
  summaryEl.textContent = '';
  resultEl.textContent = '';
  summaryEl.textContent = summaryDefault;
  userScore = computerScore = round = 0;
  optionsEl.addEventListener('click', handleOptionClick);
}

initGame();

playAgainButton.addEventListener('click', initGame);

function handleOptionClick(e) {
  const userChoice = e.target.dataset?.option?.toLowerCase();
  if (!userChoice) {
    return;
  }
  const computerChoice = options[generateRandomNumber(0, 3)].toLowerCase();

  playRound(userChoice, computerChoice);
}

function playRound(userChoice, computerChoice) {
  updateRound();
  summaryEl.innerHTML = `<strong>You:</strong> ${userChoice} --- <strong>Computer:</strong> ${computerChoice}`;
  const winner = computeWinner(userChoice, computerChoice);
  const [, ...otherClasses] = resultEl.classList;
  otherClasses.forEach((className) => resultEl.classList.remove(className));

  switch (winner) {
    case 'user':
      resultEl.classList.add('win');
      userScore++;
      break;
    case 'computer':
      resultEl.classList.add('lose');
      computerScore++;
      break;
    case 'tie':
      resultEl.classList.add('tie');
      break;
  }

  resultEl.textContent = generateResultText(winner);

  if (round >= MAX_ROUNDS) completeGame();
}

function completeGame() {
  gameScoreEl.textContent = `You: ${userScore} - Computer: ${computerScore}`;
  optionsEl.removeEventListener('click', handleOptionClick);
  gameResultEl.classList.remove('hidden');
}

function updateRound() {
  round++;
  roundEl.textContent = `Round #${round}`;
}

/**
 * Function to generate a random integer between minRange and MaxRage where minRange is inclusive and maxRange is exclusive
 * @param {number} minRange starting number of the range.
 * @param {number} maxRange ending number of the rage where maxRange > minRange
 */
const generateRandomNumber = (minRange, maxRange) => {
  if (minRange > maxRange)
    throw new Error('maxRange value should be greater than minRange value');
  return Math.trunc(minRange + Math.random() * (maxRange - minRange));
};

function computeWinner(userOption, computerOption) {
  if (userOption === computerOption) {
    return 'tie';
  }
  if (
    (userOption === 'rock' && computerOption === 'scissors') ||
    (userOption === 'scissors' && computerOption === 'paper') ||
    (userOption === 'paper' && computerOption === 'rock')
  ) {
    return 'user';
  }
  return 'computer';
}

function generateResultText(winner) {
  return winner === 'tie'
    ? "It's a tie 🙅"
    : winner === 'user'
    ? 'You win 🎉'
    : 'Computer wins 💩';
}
