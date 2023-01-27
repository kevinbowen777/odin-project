## The Odin Project

# Foundations - 05. CSS Foundations
## 05 - CSS Foundations

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230126
  - Date Completed:
---

#### Table of Contents

  - [CSS Foundations(this document)](05_foundations_css_foundations.md)
  - [Inspecting HTML and CSS](05a_inspecting_html_and_css.md)
  - [The Box Model](05b_the_box_model.md)
  - [Block and Inline](05c_block_and_inline.md)
  
---
### [CSS Foundations](https://www.theodinproject.com/lessons/foundations-css-foundations)

#### Introduction
#### Lesson Overview

  - Add styles to HTML with CSS.
  - Understand how to use the class and ID attributes.
  - Add styles to specific elements using the correct selectors.
  - Understand what the cascade does.
  
#### Basic Syntax
#### Selectors
##### Universal Selector
##### Type Selectors
##### Class Selector
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

