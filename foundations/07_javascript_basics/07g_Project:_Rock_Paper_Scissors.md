## The Odin Project

# Foundations - 07. Javascript Basics
## 07g. - Project: Rock Paper Scissors

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230216
  - Date Completed:
---

### Table of Contents

  - [Fundamentals Part 1](07a_fundamentals_pt1.md)
  - [Fundamentals Part 2](07b_fundamentals_pt2.md)
  - [JavaScript Developers Tools](07c_javascript_developers_tools.md)
  - [Fundamentals Part 3](07d_fundamentals_pt3.md)
  - [Problem Solving](07e_problem_solving.md)
  - [Understanding Errors](07f_understanding_errors.md)
  - [Project: Rock Paper Scissors(this document)](07g_Project_Rock_Paper_Scissors.md)
  - [Clean Code](07h_clean_code.md)
  - [Installing Node.js](07i_installing_nodejs.md)
  - [Fundamentals Part 4](07j_fundamentals_pt4.md)
  - [DOM Manipulations and Events](07k_dom_manipulation_and_events.md)
  - [Revisiting Rock Paper Scissors](07l_revisiting_rock_paper_scissors.md)
  - [Project: Etch-a-Sketch](07m_Project_Etch-a-Sketch.md)
  - [Fundamentals Part 5](07n_fundamentals_pt5.md)
  - [Project: Calculator](07o_Project_Calculator.md)

---
### [Project: Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

### Introduction
### Quick Exercises Before Starting 

1. Identify three ways to include JavaScript in a page.
2. Test it out! Write `console.log("Hello World");` in JavaScript and check to see if it displays in the browser’s console.

  
### Elements and Tags
### Assignment

1. Start a new Git repo for your project.
2. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
3. Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

  - Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

5. Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

```js
function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
```

6. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
```
    Remember loops? This is a great opportunity to use one to play those five rounds:

    for (let i = 0; i < 5; i++) {
       // your code here!
    }
```

  - At this point you should be using `onsole.log()` to display the results of each round and the winner at the end.
  - Use `prompt()` to get input from the user. Read the docs here if you need to.
  - Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
  - Feel free to create more “helper” functions if you think it would be useful.
