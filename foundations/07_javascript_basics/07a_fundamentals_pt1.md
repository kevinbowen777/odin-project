## The Odin Project

# Foundations - 07. Javascript Basics
## 07a. - Fundamentals Part 1

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230216
  - Date Completed:
---

### Table of Contents

  - [Fundamentals Part 1(this document)](07a_fundamentals_pt1.md)
  - [Fundamentals Part 2](07b_fundamentals_pt2.md)
  - [JavaScript Developers Tools](07c_javascript_developers_tools.md)
  - [Fundamentals Part 3](07d_fundamentals_pt3.md)
  - [Problem Solving](07e_problem_solving.md)
  - [Understanding Errors](07f_understanding_errors.md)
  - [Project: Rock Paper Scissors](07g_Project_Rock_Paper_Scissors.md)
  - [Clean Code](07h_clean_code.md)
  - [Installing Node.js](07i_installing_nodejs.md)
  - [Fundamentals Part 4](07j_fundamentals_pt4.md)
  - [DOM Manipulations and Events](07k_dom_manipulation_and_events.md)
  - [Revisiting Rock Paper Scissors](07l_revisiting_rock_paper_scissors.md)
  - [Project: Etch-a-Sketch](07m_Project_Etch-a-Sketch.md)
  - [Fundamentals Part 5](07n_fundamentals_pt5.md)
  - [Project: Calculator](07o_Project_Calculator.md)

---
### [Fundamentals Part 1](https://www.theodinproject.com/lessons/foundations-fundamentals-part-1)

### Introduction
### Lesson Overview

  - How do you declare a variable?
  - What are three different ways to declare a variable?
  - Which one should you use when?
  - What are the rules for naming variables?
  - What are operators, operands, and operations?
  - What is concatenation and what happens when you add numbers and strings together?
  - What are the different types of operators in JavaScript?
  - What is the difference between == and ===?
  - What are operator precedence values?
  - What are the increment/decrement operators?
  - What is the difference between prefixing and postfixing them?
  - What are assignment operators?
  - What is the Unary Plus Operator?
  
### How to Run JavaScript Code
### Variables
### Numbers

### Assignment

Try the following exercises (and don’t forget to use `console.log()`!):

1. Add 2 numbers together! (just type console.log(23 + 97) into your html file)
2. Add a sequence of 6 different numbers together.
3. Print the solution to the following equation: `(4 + 6 + 9) / 77`
    - Answer should be approximately `0.24675`
4. Let’s use variables!
    - Type this statement at the top of the script tag: `let a = 10`
    - In the console `console.log(a)` should print `10`
    - Try the following in the console: `9 * a`
      and this: `let b = 7 * a` (returns `undefined` (See NOTE)) and then `console.log(b)`
5. You should be getting the hang of this by now… try this sequence:
    - Declare a constant variable `max` with the value `57`
    - Set another variable `actual` to `max - 13`
    - Set another variable `percentage` to `actual / max`
    - If you type percentage in the console and press enter you should see a value like 0.7719
6. Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.

>NOTE: As you might have noticed by running Javascript code in the console, the console prints the result of the code it executes (called a return statement). You will learn more about these in the next lessons, however for now it is good to remember that a declaration with an assignment (such as `let b = 7 * a)` returns `undefined` and so you cannot declare and assign a value to a variable and read its value in the same line.
  
### Additional Resources

  - The precise differences between `var` and `let` is explained in [javascript.info]().

### Knowledge Check

  - [Name the three ways to declare a variable]()
  - [Which of the three variable declarations should you avoid and why?]()
  - [What rules should you follow when naming variables?](https://javascript.info/variables#variable-naming)
  - [What happens when you add numbers and strings together?](https://javascript.info/operators#string-concatenation-with-binary)
  - [How does the Modulo (%), or Remainder, operator work?](https://javascript.info/operators#remainder)
  - [Explain the difference between == and ===.](https://www.w3schools.com/js/js_numbers.asp)
  - [When would you receive a NaN result?](https://www.w3schools.com/js/js_numbers.asp)
  - [How do you increment and decrement a number?](https://javascript.info/operators#increment-decrement)
  - [Explain the difference between prefixing and postfixing increment/decrement operators.](https://javascript.info/operators#increment-decrement)
  - [What is operator precedence and how is it handled in JS?](https://javascript.info/operators#operator-precedence)
  - [How do you access developer tools and the console?]()
  - [How do you log information to the console?]()
  - [What does unary plus operator do to string representations of integers? eg. +”10”](https://javascript.info/operators#numeric-conversion-unary)




