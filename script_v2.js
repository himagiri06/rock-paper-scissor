const options = ['rock', 'paper', 'scissors'];

const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const summaryEl = document.querySelector('.summary');
summaryEl.innerHTML = 'Select an option 👆';

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
optionsEl.addEventListener('click', function (e) {
  const userOption = e.target.dataset?.option?.toLowerCase();
  if (!userOption) {
    return;
  }
  const computerOption = options[generateRandomNumber(0, 3)].toLowerCase();

  summaryEl.innerHTML = `<strong>You:</strong> ${userOption} --- <strong>Computer:</strong> ${computerOption}`;
  const winner = computeWinner(userOption, computerOption);
  const [, ...otherClasses] = resultEl.classList;
  otherClasses.forEach((className) => resultEl.classList.remove(className));

  resultEl.classList.add(
    winner === 'user' ? 'win' : winner === 'computer' ? 'lose' : 'tie'
  );
  resultEl.innerHTML = generateResultText(winner);
});
