# ROCK PAPER Scissors Game

### Game rules

- Rock beats scissors
- Scissors beat paper
- Paper beats rock

### Project Overview

It is a two player game where a real player play against the computer. In each round, the player and the computer selects one option randomly from the list (Rock, Paper, Scissors) and the winner for the round is decided based on the [rules](#game-rules) mentioned above.

### Plan

#### Does the game have any interface?

Yes

#### What will it look like? What functionality will the interface have?

- Game title
- Three options (Rock, Paper and Scissors) for the player to select by clicking
- Result container to show the winner of the round

#### What inputs will your program have? Will the user enter data or will you get input from somewhere else?

Player selects an option from the pre-defined list by clicking.

#### What’s the desired output?

Result of the current round (eg., You win or Computer wins).

#### Given your inputs, what are the steps necessary to return the desired output?

- Create a list of options with length n (In this case, it is 3 as we have only three options - Rock, Paper and Scissors).
- Computer selects the option randomly
  - Generate a random number from the range 0 to (n - 1).
  - Get the option from the list corresponding to the random number and store it a variable `computerOption`.
- Get the user selected option and store it in `userOption`.
- Perform the below evaluation:

  ```
  IF userOption = computerOption THEN
    result = 'It is a tie'
  ELSEIF userOption = 'Rock' AND computerOption = 'Scissors' THEN
    result = 'You win'
  ELSEIF userOption = 'Scissors' AND computerOption = 'Paper' THEN
    result = 'You win'
  ELSEIF userOption = 'Paper' AND computerOption = 'Rock' THEN
    result = 'You win'
  ELSEIF computerOption = 'Rock' AND userOption = 'Scissors' THEN
    result = 'Computer wins'
  ELSEIF computerOption = 'Scissors' AND userOption = 'Paper' THEN
    result = 'Computer wins'
  ELSEIF computerOption = 'Paper' AND userOption = 'Rock' THEN
    result = 'Computer wins'
  ```

- Display the result on the page
