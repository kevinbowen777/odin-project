## The Odin Project

# Foundations - 07. Javascript Basics
## 07g. - Project: Etch-a-Sketch

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
  - [Project: Rock Paper Scissors](07g_Project_Rock_Paper_Scissors.md)
  - [Clean Code](07h_clean_code.md)
  - [Installing Node.js](07i_installing_nodejs.md)
  - [Fundamentals Part 4](07j_fundamentals_pt4.md)
  - [DOM Manipulations and Events](07k_dom_manipulation_and_events.md)
  - [Revisiting Rock Paper Scissors](07l_revisiting_rock_paper_scissors.md)
  - [Project: Etch-a-Sketch(this document)](07m_Project_Etch-a-Sketch.md)
  - [Fundamentals Part 5](07n_fundamentals_pt5.md)
  - [Project: Calculator](07o_Project_Calculator.md)

---
### [Project: Etch-a-Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

### Introduction


### Assignment

1. Follow the instructions atop Odin’s Recipes project to set up a Git repository for this project.
2. Create a webpage with a 16x16 grid of square divs.
  - Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
  - It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
  - There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
    - float/clear
    - inline-block
    - flexbox
    - CSS Grid
  - Be careful with borders and margins, as they can adjust the size of the squares!
  - “OMG, why isn’t my grid being created???”
    - Did you link your CSS stylesheet?
    - Open your browser’s developer tools.
    - Check if there are any errors in the JavaScript console.
    - Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
    - Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
3. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
  - Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
  - There are multiple ways to change the color of the divs, including:
    - adding a new class to the div.
    - changing the div’s background color using JavaScript.
4. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
        Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
        Also check out prompts.
        You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
5. Push your project to GitHub!

#### Extra Credit

  - Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
