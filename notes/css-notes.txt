CSS notes - 20220311
=============
The Odin Project
Foundations - CSS Foundations
Source: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/css-foundations#properties-to-get-started-with
-----------------------------------


======================
Learning Outcomes
======================
By the end of this lesson, you should be able to

    - Add styles to HTML with CSS.
    - Understand how to use the class and ID attributes.
    - Add styles to specific elements using the correct selectors.
    - Understand what the cascade does.

======================
Basic Syntax
======================
At the most basic level, CSS is made up of various rules. These rules are
made up of a selector and a semi-colon separated list of declarations, with 
each of those declarations being made up of a property:value pair.
----------------
    selector
       |
div.bold-text {
  font-weight: 700
}       |       |
    property    value
-------------------------

Selectors
  Refer to the HTML elements to which CSS rules apply. They refer to what
is actually being "selected" for each rule.

======================
Universal Selector
======================
  Will select elements of any type. The syntax is an asterisk '*'
--------
* {
  color: purple;
}
--------
Every element would have the 'color: purple;' style applied to it.

======================
Type Selectors
======================
    Will select all elements of the given element type  
--------
<!-- index.html -->

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>

--------
/* styles.css */

div {
  color: white;
}
----------------------
Here, all three <div> elements would be selected, while the <p> element wouldn’t be.

======================
Class Selector
======================
  Will select all elements with the given class, which is just an attribute you place on an HTML element. 
--------
<!-- index.html -->

<div class="alert-text">
  Please agree to our terms of service.
</div>
--------
/* styles.css */

.alert-text {
  color: red;
}
--------
Note the syntax for class selectors: 
    A period immediately followed by the case-sensitive value of the class
    attribute. Classes aren’t required to be unique, so you can use the same
    class on as many elements as you want.
    Another thing you can do with the class attribute is add multiple classes
    to a single element as a space-separated list, such as 
    class="alert-text severe-alert". Since whitespace is used to separate
    class names like this, you should never use spaces for multi-worded names
    and should use a hyphen instead.

======================
ID Selector
======================
    ID selectors are similar to class selectors. They select an element with
    the given ID, which is another attribute you place on an HTML element:
--------
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
--------
/* styles.css */

#title {
  background-color: red;
}
--------
    You should use IDs sparingly (if at all)    
    The major difference between classes and IDs is that an element can only
    have one ID. An ID cannot be repeated on a single page, and the ID
    attribute should not contain any whitespace at all.

======================
Grouping Selectors
======================
    What if we have two groups of elements that share some of their style declarations?
--------
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
--------
    To cut down on the repetition, we can group these two selectors together
    as a comma-separated list:

--------
.read, 
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
--------

======================
Chaining Selectors
======================
    Another way to use selectors is to chain them as a list without any separation.
--------
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
--------
    We have two elements with the subsection class that have some sort of
    unique styles, but what if we only want to apply a separate rule to the
    element that also has header as a second class? Well, we could chain the
    two class selectors together in our CSS like so:
--------
.subsection.header {
  color: red;
}
--------
    What .subsection.header does is it selects any element that has both the
    subsection and header classes. Notice how there isn’t any space between
    the .subsection and .header class selectors. This syntax basically works
    for chaining any combination of selectors, with the exception of chaining 
    more than one type selector.

This can also be used to chain a class and an ID, as shown below:
--------
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">This is where a preview for a post might go.</p>
</div>
--------
You can take the two elements above and combine them with the following:

--------
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
--------

In general, you can’t chain more than one type selector since an element
can’t be two different types at once.

======================
Descendant Combinator
======================
    Combinators allow us to combine multiple selectors differently than
    grouping or chaining them, as they show a relationship between the
    selectors. A descendant combinator will only cause elements that match the
    last selector to be selected if they also have an ancestor 
    (parent, grandparent, etc) that matches the previous selector.

    So something like .ancestor .child would select an element with the
    class child if it has an ancestor with the class ancestor. Another way
    to think of it is child will only be selected if it is nested inside of
    ancestor, no matter how deeply. 

--------
<!-- index.html -->

<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->
--------

/* styles.css */

.ancestor .contents {
  /* some declarations */
}
--------
    In the above example, the first two elements with the contents class 
    (B and C) would be selected, but that last element (D) won’t be. 
--------

======================
Properties to Get Started With
======================

    # color and background-color

    Both of these properties can accept one of several kinds of values. 
    A common one is a keyword, such as an actual color name like 'red' or
    the 'transparent' keyword. They also accept HEX, RGB, and HSL values,

--------
p {
  /* hex example: */
  color: #1100ff;
  /* rgb example: */
  color: rgb(100, 0, 127);
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}
--------
CSS Legal Color Values - https://www.w3schools.com/cssref/css_colors_legal.asp

    # Typography Basics and text-align
    
    `font-family` can be a single value or a comma-separated list of values 
    that determine what font an element uses. Each font will fall into one
    of two categories, either a “font family name” like "Times New Roman" 
    (we use quotes due to the whitespace between words) or
    “generic family name” like `sans-serif` (generic family names never use quotes).

    'font-size' will, as the property name suggests, set the size of the font.
    When giving a value to this property, the value should not contain any
    whitespace, e.g. `font-size: 22px` has no space between “22” and “px”.

    `font-weight` affects the boldness of text, assuming the font supports the
    specified weight. This value can be a keyword, e.g. font-weight: bold, or
    a number between 1 and 1000, e.g. `font-weight: 700` (the equivalent of bold).
    Usually the numeric values will be in increments of 100 up to 900, though
    this will depend on the font.

    `text-align` will align text horizontally within an element, and you can
    use the common keywords you may have come across in word processors as
    the value for this property, e.g. `text-align: center`.
--------

======================
Image Height and Width
======================
    By default, an <img> element’s height and width values will be the same
    as the actual image file’s height and width. If you wanted to adjust the
    size of the image without causing it to lose its proportions, you would
    use a value of “auto” for the height property and adjust the width value:

img {
  height: auto;
  width: 500px;
}
--------
IMPORTANT:
    It’s best to include both of these properties for <img> elements, even if
    you don’t plan on adjusting the values from the image file’s original ones.
    When these values aren’t included, if an image takes longer to load than
    the rest of the page contents, the image won’t take up any space on the
    page at first, but will suddenly cause a drastic shift of the other page
    contents once it does load in. Explicitly stating a height and width
    prevents this from happening, as space will be “reserved” on the page and
    will just appear as a blank space until the image loads.

======================
The Cascade of CSS
======================
    The cascade is what determines which rules actually get applied to our
    HTML. There are different factors that the cascade uses to determine this,
    three of which we’ll go over to hopefully help you avoid (as many of)
    those frustrating “I hate CSS” moments.

 -- Specificity, Inheritance, Rule Order --

========
Specificity
========
    - A CSS declaration that is more specific will take precedence over ones
    that are less specific.
    - Inline styles have the highest specificity compared to selectors.
    - Each type of selector has its own specificity level that contributes
        to how specific a declaration is. 
    - There are other selectors that contribute to specificity, but we’re
        focusing only on the ones mentioned in this lesson:
        
        1. ID selectors (most specific selector)
        2. Class selectors
        3. Type selectors

    Specificity will only be taken into account when an element has multiple,
        conflicting declarations targeting it, sort of like a tie-breaker. 
    An ID selector will always beat any number of class selectors, a class
        selector will always beat any number of type selectors, and a type
        selector will always beat any number of anything less specific than it.
    When no declaration has a selector with a higher specificity, a larger
    amount of a single selector will beat a smaller amount of that same selector.

--------
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
--------
    In the example above, both rules are using only class selectors, but
        rule 2 is more specific because it is using more class selectors, 
        so the color: red; declaration would take precedence.

--------
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
---------
    Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a 
    chaining selector (no space) and rule 2 uses a descendant combinator
    (the empty space). But both rules have two classes and the combinator 
    symbol itself does not add to the specificity.

========
Inheritance
========
    Inheritance refers to certain CSS properties that, when applied to an
    element, are inherited by that element’s descendants, even if we don’t
    explicitly write a rule for those descendants. Typography based 
    properties (color, font-size, font-family, etc.) are usually inherited,
    while most other properties aren’t.

    ** The exception to this is when directly targeting an element, as this 
        always beats inheritance.

--------
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
--------
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue
}
--------
    Despite the parent element having a higher specificity with an ID, the
    child element would have the `color: blue` style applied since that
    declaration directly targets it, while `color: red` from the parent is
    only inherited.

========
Rule Order
========
    Whichever rule was last defined is the winner.

--------
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
--------
    For an element that has both the alert and warning classes, the cascade
    would run through every other factor, including inheritance (none here)
    and specificity (neither rule is more specific than the other). Since
    the .warning rule was the last one defined, and no other factor was able
    to determine which rule to apply, it’s the one that gets applied to the element.

======================
Adding CSS to HTML
======================

========
External CSS
========
    External CSS is the most common method you will come across, and it
    involves creating a separate file for the CSS and linking it inside of
    an HTML’s opening and closing <head> tags with a self-closing 
    <link> element:

--------
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>
----
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
--------
A couple of the pros to this method are:

    1. It keeps our HTML and CSS separated, which results in the HTML file
        being smaller and makes things look cleaner.
    2. We only need to edit the CSS in one place, which is especially handy
        for websites with multiple pages that all share similar styles.

========
Internal CSS
========
    Internal CSS (or embedded CSS) involves adding the CSS within the HTML 
    file itself instead of creating a completely separate file. With the
    internal method, you place all of the rules inside of a pair of opening 
    and closing <style> tags, which are then placed inside of the opening
    and closing <head> tags of your HTML file.

    Since the styles are being placed directly inside of the <head> tags,
        we no longer need a <link> element that the external method requires.

Besides these differences, the syntax is exactly the same as the external
    method (selector, curly braces, declarations):

--------
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>...</body>
--------

========
Inline CSS
========
    Inline CSS makes it possible to add styles directly to HTML elements, 
        though this method isn’t as recommended:

--------
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
--------
    The first thing to note is that we don’t actually use any selectors here,
    since the styles are being added directly to the opening <div> tag itself. 
    Next we have the style= attribute, with its value within the pair of
    quotation marks being the declarations.

    If you need to add a unique style for a single element, this method can
    work just fine. Generally, though, this isn’t exactly a recommended way 
    for adding CSS to HTML for a few reasons:

    
        - It can get pretty messy pretty quickly once you start adding a lot
            of declarations to a single element, causing your HTML file to
            become unnecessarily bloated.
        - If you want multiple elements to have the same style, you would
            have to copy + paste the same style to each individual element, 
            causing lots of unnecessary repetition and more bloat.
        - Any inline CSS will override the other two methods, which can cause
            unexpected results. (While we won’t dive into it here, this can
            actually be taken advantage of).

CSS Fonts - https://www.w3schools.com/Css/css_font.asp - Generic Font Families
CSS Web Safe Fonts - https://www.w3schools.com/cssref/css_websafe_fonts.asp - Fonts
    generally installed on all computers

======================
Practice
======================




======================
Addional Resources
======================
    - The CSS Cascade is a great, interactive read that goes a little more 
        in detail about other factors that affect what CSS rules actually 
        end up being applied.

      https://wattenberger.com/blog/css-cascade

    - Changing the Font Family describes a few different approaches to
        using custom fonts.
    
      https://www.bitdegree.org/learn/font-family-css#how-to-use-a-downloaded-font

    - CSS Specificity from W3Schools goes over how you can calculate the
        specificity of rules. This page mentions some selectors that we will
        go over in a later lesson, so don’t worry about what they are or how
        to use them right now.

      https://www.w3schools.com/css/css_specificity.asp

    - Mozilla CSS Properties Reference can be used to learn if a particular
        CSS property is inherited or not; simply look for the Inherited field
        inside the Formal Definition section. Here’s an example for the
        CSS color property. https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition

      https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference


CSS Legal Color Values - https://www.w3schools.com/cssref/css_colors_legal.asp
https://css-tricks.com/





