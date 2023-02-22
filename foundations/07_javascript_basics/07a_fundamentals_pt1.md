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

All JavaScript we will be writing in the majority of the Foundations course will be run via the browser. Later lessons in Foundations and the NodeJS path will show you how to run JavaScript outside of the browser environment. Outside of these lessons, for now you should always default to running your JavaScript in the browser unless otherwise specified, otherwise you may run into unexpected errors.

The simplest way to get started is to simply create an HTML file with the JavaScript code inside of it. Type the basic HTML skeleton into a file on your computer somewhere:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Save and open this file up in a web browser and then open up the browser’s console by right-clicking on the blank webpage and selecting “Inspect” or “Inspect Element”. In the ‘Developer Tools’ pane find and select the ‘Console’ tab, where you should see the output of our `console.log` statement.

>"console.log() is the command to print something to the developer console in
your browser. You can use this to print the results from any of the following
articles and exercises to the console. We encourage you to code along will all
of the examples in this and future lessons."

Another way to include JavaScript in a webpage is through an external script.
This is very similar to linking external CSS docs to your website.

`<script src="javascript.js"></script>`

### Variables

Until recently there was only one way to create a variable in JavaScript -
the `var` statement. But in the newest JavaScript versions we have two more
ways - `let` and `const`.

1. Read and work through [this variable tutorial](http://javascript.info/variables)

The above tutorial mentioned this, but it is important enough to note again:
`let` and `const` are both relatively new ways to declare variables in JavaScript.
In *many* tutorials(and code) across the internet you're likely to encounter
`var` statements. Don't let it bother you! There's nothing inherently wrong
with `var`, and in most cases `var` and `let` behave the same way. But sometimes
the behavior of `var` is *not* what you would expect. Just stick to `let` and
`const` for now.

### Numbers

1. [This W3Schools lesson](https://www.w3schools.com/js/js_arithmetic.asp) followed by [this one](https://www.w3schools.com/js/js_numbers.asp), are good introductions to what you can accomplish with numbers in JavaScript.
2. [This MDN article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) covers the same info from a slightly different point of view, while also teaching you how to apply some basic math in JavaScript. There’s much more that you can do with numbers, but this is all you need at the moment.
3. Read through (and code along with!) [this article](http://javascript.info/operators) about operators in Javascript. Don’t forget to do the “Tasks” at the bottom of the page! It will give you a pretty good idea of what you can accomplish with numbers (among other things!) in JavaScript.



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




