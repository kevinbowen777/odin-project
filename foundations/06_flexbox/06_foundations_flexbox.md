## The Odin Project

# Foundations - 06. Flexbox
## 06. - Introduction to Flexbox

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230126
  - Date Completed:
---

#### Table of Contents

  - [Introduction to Flexbox(this document)](06_introduction_to_flexbox.md)
  - [Growing and Shrinking](06a_growing_and_shrinking.md)
  - [Axes](06b_axes.md)
  - [Alignment](06c_alignment.md)
  - [Project: Landing Page](#)
  
---
### [Introduction to Flexbox](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox)

#### Introduction

There are *many* ways to move elements around on a web page. New methods have
been developed over the years and older things have fallen out of style.
**Flexbox** is a [relatively new](https://medium.com/@BennyOgidan/history-of-css-grid-and-css-flexbox-658ae6cfe6d2)
way of manipulating elements in CSS, and its debut was *revolutionary*.

Flexbox has becom the default way of positioning elements for many developers.
Flexbox will be one of the most used tools in your toolbox.

#### Lesson Overview

  - You will learn how to position elements using flexbox.
  - You will learn about flex containers and flex items.
  - You will learn how to create useful components and layouts that go beyond
  just stacking and centering items.
  
#### Before We Get Started

Flexbox layouts can get a little complicated. In the previous lesson, you learned
how to inspect and debug things using your browser's developer tools. Those
tools will be *crucial* for you in the following lessons. If something isn't
behaving the way you expect, inspecting it in the developer tools should be
your first step *every time*.

Flexbox isn't necessarily any more difficult than the other concepts that we've
covered so far, but it *does* have a few more moving parts. It is going to be
somewhat difficult to make use of any of the things you're learning in these
first lessons until you get to the end and can put it all together. As we go,
do yourself a favor and **play with all of the code examples**.

You will almost definitely need to come back and reference these lessons (or a
couple of the resources we share with you) when you get to the assignments at
the end of the section, but if you take the time and experiment with all the
code examples we provide, you'll know better where to look when that time comes.

#### Let's Flex

Flexbox is a way to arrange items into rows or columns. These items will
*flex*(i.e grow or shrink) based on some simple rules that you can define.
To get started, look at a simple demonstration.

```html
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```css
flex-container {
  /* display: flex; */
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  /* flex: 1; */
}
```

Flexbox example 2

# basic.css
```css
.container > div {
  padding: 10px;
  text-align: center;
  font-size: 2em;
  color: #ffeead;
}

html, body {
  background-color: #ffeead;
  margin: 10px;
}

.container > div:nth-child(1) {
  background-color: #96ceb4;	
}

.container > div:nth-child(2) {
  background-color: #ff6f69;
}

.container > div:nth-child(3) {
  background-color: #88d8b0;
}
```

# index.css
```css
.container {
  border: 5px solid #ffcc5c;
  display: flex;
}
```

# index.html
```html
<html>
    <head>
        <link rel="stylesheet" href="basic.css">
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <nav class="container">
            <div>Home</div>
            <div>Search</div>
            <div>Logout</div>
        </nav>
    </body>
</html>
```


##### Flex Containers and Flex Items

As you've seen, flexbox is not just a single CSS property but a whole toolbox
of properties that you can use to put things where you need them. Some of these
properties belong on the *flex* container, while some go in the *flex items*.
This is a simple yet important concept.

A *flex container* is any element that has `display: flex` on it. A *flex item*
is any element that lives directly inside of a flex container.

Somewhat confusingly, any element can be both a flex container *and* a flex item.
Said another way, you can also put `display: flex` on a flex item and then use
flexbox to arrange *its* children.

Creating and nesting multiple flex containers and items is the primary way we
will be building up complex layouts.

#### Knowledge Check

  - What’s the difference between a flex container and a flex item?
  - How do you create a flex item?

  
#### Additional Resources

  - [This Flexbox tutorial](https://www.internetingishard.com/html-and-css/flexbox/) is a friendly tutorial for modern CSS layouts by Interneting Is Hard.

