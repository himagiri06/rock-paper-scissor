# ROCK PAPER SCISSORS Game - Version 1

### Project Overview

It is a two player game where a real player play against the computer. In each round, the player and the computer selects one option randomly from the list (Rock, Paper, Scissors) and the winner for the round is decided based on the [rules](./README.md#game-rules).

### Plan

#### Does your program have a user interface?

No

#### What inputs will your program have? Will the user enter data or will you get input from somewhere else?

User enters the input (rock, paper or scissors) in browser prompt window

#### What’s the desired output? Given your inputs, what are the steps necessary to return the desired output?

- Repeat until 5 times

  - Get the userChoice
  - Get the computerChoice randomly
  - Compare userChoice and computerChoice by applying the game rules
    - If user wins, add points to the userScore
    - If computer wins, add points to the computerScore
  - Log the result of the current round to the console

- Display the scores at the end

### Live Demo

[Click here](https://himagiri06.github.io/rock-paper-scissors/)
