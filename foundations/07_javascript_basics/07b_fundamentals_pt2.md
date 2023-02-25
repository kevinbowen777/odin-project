## The Odin Project

# Foundations - 07. Javascript Basics
## 07b. - Fundamentals Part 2

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230216
  - Date Completed: 20230224
---

### Table of Contents

  - [Fundamentals Part 1](07a_fundamentals_pt1.md)
  - [Fundamentals Part 2(this document)](07b_fundamentals_pt2.md)
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
### [Fundamentals Part 2](https://www.theodinproject.com/lessons/foundations-fundamentals-part-2)

### Introduction

Read [this article](http://javascript.info/types) to provide you with a quick
overviews of the most common data types in JavaScript.

### Lesson Overview

  - Name the eight data types in JavaScript.
    - Seven primitive data types:
        1. Number - `number` for numbers of any kind: integer or floating-point, integers are limited by +-(2**53-1).
        2. BigInt - `bigint` for integer numbers of arbitrary length.
        3. String - `string` A string may have zero or more characters, there's no separate single-character type.
        4. Boolean (logical type) - `boolean` for `true/false`.
        5. The "null" value - `null` for unknown values - a standalone type that has a single value `null`.
        6. The "undefined" value - `undefined` for unassigned values - a standalone type that has a single value `undefined`.
        7. Symbols - for unique identifiers.
    - One non-primitive data type:
        1. Object - `object` for complex data structures.
      
      The `typeof` operator allows us to see which type is stored in a variable.
        - Usually used as `typeof x`, but `typeof(x)` is also possible.
        - Returns a string with the name of the type, like `"string"`.
        - For `null` returns `"object"` - this is an error in the language, it's not actually an object.
        
  - Understand the difference between single, double, and backtick quotes.
  - Embed a variable/expression in a string.
  - Understand what a method is.
  - Name the three logical operators.
  - Understand what the comparison operators are.
  - Understand what conditionals are.
  - Understand what nesting is.
  - Understand what truthy and falsy values are.
  
### Strings

A **string** is simply a piece of text.... and is a fundamental building block
of the language.

1. Read and code along with [yet another MDN tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings) on the topic.
2. Go through [this lesson](https://www.w3schools.com/js/js_string_methods.asp) to learn a bit more about what you can do with strings… be sure to take a peek at [the String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp) page near the bottom, and do the exercises at the end!
3. Vocabulary time: a method is a bit of functionality that is built into the language or into specific data types. In the previous W3Schools exercise, you learned a few methods that can be used on strings, such as `replace` and `slice`. An exhaustive list of methods that can be used on strings can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

#### String methods

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()

### Conditionals

1. Step one in learning about conditionals is making sure you have a good grasp on [comparisons](http://javascript.info/comparison).

A regular equality check `==` has a problem. It cannot differentiate `0` from `false`.
This happens because operands of different types are converted to numbers by the equality operator `==`. An empty string, just like `false`, becomes a zero.

A strict equality operator `===` checks the equality without type conversion.
There is also a “strict non-equality” operator `!==` analogous to `!=`.
The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

  - Treat any comparison with `undefined/null` except the strict equality `===` with exceptional care.
  - Don’t use comparisons `>= > < <=` with a variable which may be `null/undefined`, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

#### Summary

  - Comparison operators return a boolean value.
  - Strings are compared letter-by-letter in the “dictionary” order.
  - When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
  - The values `null` and `undefined` equal `==` each other and do not equal any other value.
  - Be careful when using comparisons like `>` or `<` with variables that can occasionally be `null/undefined`. Checking for `null/undefined` separately is a good idea.

2. [This tutorial](https://www.w3schools.com/js/js_if_else.asp) is a great first glance at conditionals in JavaScript.
3. [This tutorial](http://javascript.info/logical-operators) will teach you about logical operators. A little heads up regarding this reading’s tasks; there will be questions where you see `alert()` (with a number or string inside of the parenthesis), what’s happening here will be discussed later in the curriculum. Some of the answers may not make sense now but they are accurate and will come to be understood as you progress in the curriculum. Don’t worry too much about it now!

There are four logical operators in JavaScript: `||` (OR), `&&` (AND), `!` (NOT), `??` (Nullish Coalescing). Here we cover the first three, the `??` operator is in the next article.

Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

4. [This article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) reinforces the concept and provides several interesting examples of how you could use it building websites.
5. [This article](http://javascript.info/ifelse) covers the same basic concept (read through it as a review!) and - more importantly - offers the usual ‘tasks’ at the bottom of the page!
6. [This tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript) teaches you about the `switch` statement, which comes in handy when you have multiple conditions.

### Assignment

To give you a good bit of practice, we have created some replit.com exercises for you to play with. We believe that it’s best to practice programming on your own computer, rather than in an online environment, but we’ll get to that soon enough.

Be sure to do the lessons in order presented here. Pressing “run” at the top will run the code. Read all directions, watch the terminal, and read all the errors. Don’t forget to use ‘console.log’ extensively.

To get started, create a free replit account and click “Fork” or “Remix” in order to have access to the exercises. Note: Feel free to browse the files on the left column in order to gain familiarity with it.

  - [Exercise 1](https://replit.com/@I3uckwheat/troubleshooting#troubleshooting.js)
  - In this exercise, you will be working out of the file called troubleshooting.js
  - [Exercise 2](https://replit.com/@I3uckwheat/enter-a-number#script.js)
  - You will be working out of script.js, and you will use the console in the ‘webview’ pane to check your work. To access the console, click the wrench icon, which is located on the right side of the address bar within the ‘webview’ pane.
  - [Exercise 3](https://replit.com/@I3uckwheat/lets-do-some-math#math.js)
  - You will be working out of math.js
  - [Exercise 4](https://replit.com/@I3uckwheat/direction-follow#follow.js)
  - You will be working out of follow.js

### Additional Resources

  - Regular expressions, commonly known as regex, are a tool that matches or locates patterns in strings for string validation. Although it shouldn’t be your immediate solution this early on, you can still use this resource to understand how websites know that `myemail@com` isn’t a valid email address. On top of that, other solutions to filter out strings exist, and regex is considered a slow operation.
  - [The Net Ninja’s Regular Expressions Tutorial.](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)
  - [When to avoid regular expressions.](https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions)
  
### Knowledge Check

  - [What are the eight data types in JavaScript?](https://javascript.info/types#summary)
  - [Which data type is NOT primitive?](https://javascript.info/types#objects-and-symbols)
  - [What is the relationship between null and undefined?](https://javascript.info/types#the-null-value)
  - [What is the difference between single, double, and backtick quotes for strings?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#single_quotes_vs._double_quotes)
  - [What is the term for embedding variables/expressions in a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
  - [Which type of quote lets you embed variables/expressions in a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
  - [How do you embed variables/expressions in a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
  - [How do you use escape characters in a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#escaping_characters_in_a_string)
  - [What is the difference between the slice/substring/substr string methods?](https://www.w3schools.com/js/js_string_methods.asp)
  - [What are the three logical operators and what do they stand for?](http://javascript.info/logical-operators)
  - [What are the comparison operators?](https://javascript.info/comparison)
  - [What are truthy and falsy values?](https://javascript.info/ifelse#boolean-conversion)
  - [What are the falsy values in JavaScript?](https://javascript.info/ifelse#boolean-conversion)
  - [What are conditionals?](https://www.w3schools.com/js/js_if_else.asp)
  - [What is the syntax for an if/else conditional?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#basic_if...else_syntax)
  - [What is the syntax for a switch statement?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
  - [What is the syntax for a ternary operator?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#ternary_operator)
  - [What is nesting?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#nesting_if...else)

  
