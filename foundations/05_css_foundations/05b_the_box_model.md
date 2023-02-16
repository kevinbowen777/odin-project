## The Odin Project

# Foundations - 05. CSS Foundations
## 05b - The Box Model

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230215
  - Date Completed: 20230207
---

#### Table of Contents

  - [CSS Foundations](05_foundations_css_foundations.md)
  - [Inspecting HTML and CSS](05a_inspecting_html_and_css.md)
  - [The Box Model(this document)](05b_the_box_model.md)
  - [Block and Inline](05c_block_and_inline.md)
  
---
### [The Box Model](https://www.theodinproject.com/lessons/foundations-the-box-model)

### Introduction

    The most important skills you need to master with CSS are *positioning*
and *layout*. Changing fonts and colors is a crucial skill, but being able to
put things exactly where you want them on a webpage is even more crucial.

Learning to position elements on a webpage is not that difficult once you
understand a few key concepts.

### Lesson Overview

    - You’ll learn all about the *box model*.
    - You’ll learn how to make sure elements are just the right size with
        `margin`, `padding`, and `borders`
  
### The Box Model

The first important concept one needs to undertstand to be successful in CSS
is the box model. It isn't complicated, but skipping over it now will cause
much frustration down the line.

Every single thing on a webpage is a rectangular box. These boxes can have
other boxes in them and can sit alongside one another. You can get a rough
idea of how this works by sticking a border on every item on the page like
this:

```css
* {
  border: 2px solid red;
}
```

You can use the browser's inspector to add the CSS above to this web page:

Select -> `F12` -> `New Style Rule` -> Add CSS

When it comes to laying out a webpage and positioning all its elements is
deciding how you are going to nest and stack boxes.

The only real complication here is that there are many ways to manipulate the
size of these boxes, and the space between them, using `padding`, `margin`, and
`border`. The assigned articles go into more depth on this concept, but to
sum it up briefly:

  - `padding` increases the space between the edge of a box and the content inside of it.
  - `margin` increases the space between a box and any others that sit next to it.
  - `border` adds space(even if it's only a pixel or two) between the margin and the padding.

### Assignment

1. [This video](https://www.youtube.com/watch?v=rIO5326FgPE) is a straightforward overview of the box model, padding and margin. Go ahead and watch this now; it informs everything else.
2. Because the box model concept is so incredibly fundamental, check out [this lesson from MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model). It covers the same material as the video above, but it goes a little further in-depth. Pay close attention to the examples and take the time to experiment with their in-browser editor!
3. [This CSS Tricks page](https://css-tricks.com/almanac/properties/m/margin/) has some further information about the `margin` property that you’ll find useful. Specifically, the sections about `auto` and margin collapsing contain things you’ll want to know.



### Knowledge Check

  - From inside to outside, what is the order of box-model properties?
  - [What does the `box-sizing` CSS property do?](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model)
  - [What is the difference between the standard and alternative box model?](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model)
  - [Would you use margin or padding to create more space between 2 elements?](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders)
  - [Would you use margin or padding to create more space between the contents of an element and its border?](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders)
  - [Would you use margin or padding if you wanted two elements to overlap each other?](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders)

  
### Additional Resources

  - [This W3Schools tutorial on CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp) provides an interactive playground to test your box model skills with exercises.
