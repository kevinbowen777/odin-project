## The Odin Project

# Foundations - 05. CSS Foundations
## 05 - CSS Foundations

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230201
  - Date Completed:
---

#### Table of Contents

  - [CSS Foundations(this document)](05_foundations_css_foundations.md)
  - [Inspecting HTML and CSS](05a_inspecting_html_and_css.md)
  - [The Box Model](05b_the_box_model.md)
  - [Block and Inline](05c_block_and_inline.md)
  
---
### [CSS Foundations](https://www.theodinproject.com/lessons/foundations-css-foundations)

  - [Introduction](#Introduction)
  - [Lesson Overview](#Lesson Overview)
  - [Basic Syntax](#Basic Syntax)
  - [Selectors](#Selectors)
    - [Universal Selector](#Universal Selector)
    - [Type Selector](#Type Selector)
    - [Class Selector](#Class Selector)
    - [ID Selectors](#ID Selectors)
    - [Grouping Selectors](#Grouping Selectors)
    - [Chaining Selectors](#Chaining Selectors)
    - [Descendant Combinator](#Descendant Combinator)
  - [Properties to Get Started With](#Properties to Get Started With)
    - [Color and Background-Color](#Typography Basics and Text-Align)
    - [Typography Basics and Text-Align](#Typography Basics and Text-Align)
    - [Image Height and Width](#Image Height and Width)
  - [The Cascade of CSS](#The Cascade of CSS)
    - [Specificity](#Specificity)
    - [Inheritance](#Inheritance)
    - [Rule Order](#Rule Order)
  - [Adding CSS to HTML](#Adding CSS to HTML)
    - [External CSS](#External CSS)
    - [Internal CSS](#Internal CSS)
    - [Inline CSS](#Inline CSS)


#### Introduction

In the previous lesson, you learned how to write the HTML that determines how a web page is structured. The next step is to make that structure look good with some style, which is exactly what CSS is for. In this lesson, we’re going to focus on what we believe are some foundational CSS concepts, things that everyone should know from the beginning — whether they are just starting out or simply need a refresher.

#### Lesson Overview

  - Add styles to HTML with CSS.
  - Understand how to use the class and ID attributes.
  - Add styles to specific elements using the correct selectors.
  - Understand what the cascade does.
  
#### Basic Syntax

At the most basic level, CSS is made up of various rules. These rules are made
up of a selector and a semi-colon separated list of declarations, with each
of those declarations being made up of a `property:value` pair.

```css
   selector
      |
div.bold-text {
  font-weight: 700;
}     |         |
   property   value
```

> Note
>
> A `<div>` is one of the basic HTML elements. It is simply an empty container.
> In general, it is best to use other tags such as `<h1>` or `<p>` for content
> in your projects, but as we learn more about CSS you'll find that there are
> many cases where the thing you need is just a container for other elements.
> Many of our exercises use plain `<div>`s for simplicity. Later lessons will go
> into much more depth about when it is appropriate to use the various HTML elements.

#### Selectors

Selectors simply refer to the HTML elements to which HTML rules apply; they're
what is actually being "selected" for each rule. The following subsections don't
cover every selector available, butt they're by far the most common and the ones
you should get comfortable using.

##### Universal Selector

The universal selector will select elements of any type, hence the name "universal",
and the syntax for it is a simple asterisk. In the example below, every element
would have the `color: purple;` style applied to it.

```html
* {
color: purple;
}
```

##### Type Selectors

A type selector (or element selector) will select all elements of the given 
element type, and the syntax is just the name of the element:

```html
<!-- index.html -->

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>
```

```html
/* styles.css */

div {
  color: white;
}
```

Here, all three `<div>` elements would be selected, while the `<p>` element
wouldn't be.

##### Class Selector

Class selectors will select all elements with the given class, which is just
an attribute you place on an HTML element. Here is how you add a class to an
HTML tag and select it in CSS:

```html
<!-- index.html -->

<div class="alert-text">
  Please agree to our terms of service.
</div>
```

```html
/* styles.css */

.alert-text {
  color: red;
}
```

Note the syntax for class selectors: a period immediately followed by the 
case-sensitive value of the class attribute. Classes aren't required to be
unique, so you can use the same class on as many elements as you want.

Another thing you can do with the class attribute is to add multiple classes
to a single element as a space-separated list, such as `class="alert-text severe-alert"`.
Since whitespace is used to separate class names like this, you should never
use spaces for multi-worded names and should use a hyphen instead.

##### ID Selectors


##### Grouping Selectors
##### Chaining Selectors
##### Descendant Combinator

#### Properties to Get Started With
##### Color and Background-Color
##### Typography Basics and Text-Align
##### Image Height and Width

#### The Cascade of CSS
##### Specificity
##### Inheritance
##### Rule Order

#### Adding CSS to HTML
##### External CSS
##### Internal CSS
##### Inline CSS


#### Assignment


1. Go to our [CSS exercises repository](https://github.com/TheOdinProject/css-exercises), read the README, and only do the exercises in the foundations directory in the order they’re listed, starting with 01-css-methods and ending with 06-cascade-fix.

2. Remember the Recipe page you created as practice from the previous lesson? Well, it’s rather plain looking, isn’t it? Let’s fix that by adding some CSS to it!

  - How you actually style it is completely open, but you should use the external CSS method (for this practice and moving forward). You should also try to use several of the properties mentioned in the section above (color, background color, typography properties, etc). Take some time to play around with the various properties to get a feel for what they do. For now, don’t worry at all about making it look good. This is just to practice and get used to writing CSS, not to make something to show off on your resume, so feel free to go a little crazy for now.

  - We haven’t covered how to use a custom font for the font-family property yet, so for now take a look at [CSS Fonts](https://www.w3schools.com/Css/css_font.asp) for a list of generic font families to use, and [CSS Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp) for a list of fonts that are web safe. Web safe means that these are fonts that are installed on basically every computer or device (but be sure to still include a generic font family as a fallback).

#### Knowledge Check

  - What are the main differences between external, internal, and inline CSS?
  - What is the syntax for class and ID selectors?
  - How would you apply a single rule to two different selectors?
  - Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?
  - What does the descendant combinator do?
  - Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

  
#### Additional Resources

  - [The CSS Cascade](https://wattenberger.com/blog/css-cascade) is a great, interactive read that goes a little more in detail about other factors that affect what CSS rules actually end up being applied.
  - [Changing the Font Family](https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#finding-and-loading-a-font-file-from-a-hosted-service) describes a few different approaches to using custom fonts.
  - [CSS Specificity](https://www.w3schools.com/css/css_specificity.asp) from W3Schools goes over how you can calculate the specificity of rules. This page mentions some selectors that we will go over in a later lesson, so don’t worry about what they are or how to use them right now.
  - Mozilla CSS Properties Reference can be used to learn if a particular CSS property is inherited or not; simply look for the Inherited field inside the Formal Definition section. [Here’s an example](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition) for the CSS color property.
  - [Mozilla CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) can be used to learn the various types of values possible in absolute or relative terms.

