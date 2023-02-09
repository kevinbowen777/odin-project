## The Odin Project

# Foundations - 05. CSS Foundations
## 05c. - Block and Inline

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230126
  - Date Completed: 20230208
---


#### Table of Contents

  - [CSS Foundations(05_foundations_css_foundations.md)
  - [Inspecting HTML and CSS](05a_inspecting_html_and_css.md)
  - [The Box Model](05b_the_box_model.md)
  - [Block and Inline(this document)]](05c_block_and_inline.md)
  
---
### [CSS Foundations](https://www.theodinproject.com/lessons/foundations-css-foundations)

#### Introduction

The box model articles linked in the previous lesson mentions that different
display types have subtly different box models. It also mentions that you can
change how a box is calculated by changing the `display` property. We will
explore the different display values you can use further in this lesson.

#### Lesson Overview

  - You’ll learn about “Normal flow”.
  - You’ll learn the difference between `block` and `inline` elements.
  - You’ll learn which elements default to `block` and which elements default to `inline`.
  - You’ll learn what divs and spans are.
  
#### Block vs Inline

Most of the elements that you have learned about so far are block elements.
In other words, their default style is `display: block`. By default, block
elements will appear on the page stacked atop each other, each new element
starting on a new line.

Inline elements, however, do not start on a new line. They appear in line with
whatever elements they are placed beside. A clear example of an inline element
is a link, or `<a>` tag. If you stick one of these in the middle of a paragraph
of text, it will behave line a part of the paragraph.([Like this...](https://www.youtube.com/watch?v=dQw4w9WgXcQ)) The link's text will sit
alongside other words in that paragraph. Additionally, padding and margin behave
differently on inline elements. In general, you do not want to try to put extra
padding or margin on inline elements.

Inline-block elements behave line inline elements, but with block-style padding
and margin. Inline-block is a useful too to know about, but in practice, you'll
probably end up reaching for flexbox more often if you're trying to line up a 
bunch of boxes. Flexbox will be covered in-depth in the next lesson.

#### Divs and Spans

We can't talk about block and inline elements without discussing divs and spans.
All the other HTML elements we have encountered so far give meaning to their
content. For example, paragraph elements tell the browser to display the text
it contains as a paragraph(semantic?). Strong elements tell the browser which
texts within are important and so on. Yet, divs and spans give no particular
meaning to their content. They are just generic boxes that can contain anything.

Having elements like this available to us is a lot more useful than it may first
appear. We will often need elements that serve no other purpose than to be 
"hook" elements. We can give an id or class to target them for styling with CSS.
Another use case we will face regularly is grouping related elements under one
parent element to correctly position them on the page. Divs and spans provide us
with the ability to do this.

**Div** *is a block element by default*. It is commonly used as a container element to
group other elements. Divs allow us to *divide* the page into different blocks
and apply styling to those blocks.

```html
<div class="introduction">
   <h2>Introduction</h2>
</div>

<div class="main-content">
   <h2>Main Content</h2>
</div>

<div class="contact-us">
   <h2>Contact Us</h2>
</div>
```

```css
div {
  padding: 30px;
  text-align: center;
  margin-bottom: 10px;
  color: #EEEEEE;
}

.introduction {
  background-color: #548CA8;
}

.main-content {
  background-color: #476072;
}

.contact-us {
  background-color: #334257;
}
```

**Span** *is an inline-level element by default*. It can be used to group text
content and inline HTML elements for styling and should only be used when no
other semantic HTML element is appropriate.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, <span class="highlight">quis nostrud <a href="https://www.dictionary.com/browse/exercitation">exercitation</a>
  ullamco laboris</span> nisi ut aliquip ex ea commodo consequat.   
</p>
```

```css
.highlight {
  background-color: yellow;
}
```


#### Assignment


1. The concept of “Normal flow” is implied in the box-model resources, but isn’t laid out very specifically. Read [“Normal Flow”](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) from MDN to make sure you understand how elements lay themselves out by default.
2. W3 schools’ [“HTML Block and Inline Elements”](https://www.w3schools.com/html/html_blocks.asp) has a description and a list of all the default block and inline elements.
3. The Digital Ocean tutorial [“Inline vs Inline-block Display in CSS”](https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block) has a couple of great examples that clarify the difference between inline and inline-block.
4. Go to our [CSS exercises repository](https://github.com/TheOdinProject/css-exercises) and do “01-margin-and-padding-1” and “02-margin-and-padding-2” in the `margin-and-padding` directory.



#### Knowledge Check

  - [What is the difference between a block element and an inline element?]()
  - [What is the difference between an inline element and an inline-block element?](https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block)
  Compared to `display: inline`, the major difference is that **inline-block** allows to set a width and height on the element. Also, with `display: inline`, top and bottom margins & paddings are not respected, and with `display: inline-block` they are.
  - [Is an h1 block or inline?](https://www.w3schools.com/html/html_blocks.asp)
  - [Is button block or inline?](https://www.w3schools.com/html/html_blocks.asp)
  - [Is div block or inline?](https://www.w3schools.com/html/html_blocks.asp)
  - [Is span block or inline?](https://www.w3schools.com/html/html_blocks.asp)


#### Additional Resources

  - [This tutorial](https://learnlayout.com/no-layout.html) is a little dated at this point, but its examples are clear. The first 6 slides cover the material we’ve seen so far.
