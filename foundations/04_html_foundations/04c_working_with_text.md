## The Odin Project

# Foundations - 04. HTML Foundations
## 04c. - Working with Text

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230126
  - Date Completed:
---

  - [Introduction to HTML and CSS](04_foundations_html_foundations.md)
  - [Elements and Tags](04a_elements_and_tags.md)
  - [HTML Boilerplate](04b_html_boilerplate.md)
  - [Working with Text(this document)](04c_working_with_text.md)
  - [Lists](04d_lists.md)
  - [Links and Images](04e_links_and_images.md)
  - [Commit Messages](04f_commit_messages.md)
  - [Project: Recipes](04g_project_recipes.md)
  
---
### [Working with Text](https://www.theodinproject.com/lessons/foundations-working-with-text)

#### Introduction

Most content on the web is text-based, so you will find yourself needing to work with HTML text elements quite a bit.

In this lesson, we will learn about the text-based elements you are likely to use the most.

#### Lesson Overview

  - How to create paragraphs
  - How to create headings
  - How to create bold text
  - How to create italicized text
  - The relationships between nested elements
  - How to create HTML comments

  
#### Paragraphs

When the browser encounters new lines like this in your HTML, it will compress them down into one single space. The result of this compression is that all of the text is clumped together into one long line.

If we want to create paragraphs in HTML, we need to use the paragraph element, which will add a newline after each of our paragraphs. A paragraph element is defined by wrapping text content with a `<p>` tag.

#### Headings

Headings are different from other HTML text elements: they are displayed larger and bolder than other text to signify that they are headings.

There are 6 different levels of headings starting from `<h1>` to `<h6>`. 
The number within a heading tag represents that heading’s level. The largest 
and most important heading is h1, while h6 is the tiniest heading at the 
lowest level.

#### Strong Element

The `<strong>` element makes text bold. It also semantically marks text as important; this affects tools, like screen readers, that users with visual impairments will rely on to use your website. The tone of voice on some screen readers will change to communicate the importance of the text within a strong element. To define a strong element we wrap text content in a `<strong>` tag.

#### Em Element

The em element makes text italic. It also semantically places emphasis on the text, which again may affect things like screen readers. To define an emphasised element we wrap text content in a `<em>` tag.

#### Nesting and Indentation

When we nest elements within other elements, we create a parent and child relationship between them. The nested elements are the children and the element they are nested within is the parent.

HTML parent elements can have many children. Elements at the same level of nesting are considered to be siblings.

We use indentation to make the level of nesting clear and readable for ourselves and other developers who will work with our HTML in the future. It is recommended to indent any child elements by two spaces.
 
#### HTML Comments

HTML comments are not visible to the browser; they allow us to *comment* on our code so that other developers or our future selves can read them and get some context about something that might not be clear in the code.

Writing an HTML comment is simple: We just enclose the comment with `<!--` 
and `-->` tags.

#### Assignment

1. Watch Kevin Powell’s [HTML Paragraph and Headings Video](https://www.youtube.com/watch?v=yqcd-XkxZNM&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=3)
2. Watch Kevin Powell’s [HTML Bold and Italic Text Video](https://www.youtube.com/watch?v=gW6cBZLUk6M&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=4)
3. To get some practice working with text in HTML, create a plain blog article page which uses different headings, uses paragraphs, and has some text in the paragraphs bolded and italicized. You can use [Lorem Ipsum](https://loremipsum.io/) to generate dummy text, in place of real text as you build your sites.



#### Knowledge Check

  - How do you create a paragraph in HTML?
  - How do you create a heading in HTML?
  - How many different levels of headings are there and what is the difference between them?
  - What element should you use to make text bold and important?
  - What element should you use to make text italicized to add emphasis to it?
  - What relationship does an element have with any nested elements within it?
  - What relationship do two elements have if they are at the same level of nesting?
  - How do you create HTML comments?

#### Additional Resources


  - [The semantic difference between **<strong\>** and **<b\>** or *<em\>* and *<i\>* tags and when to use them.](https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb)
  - [An interactive HTML text formatting article](https://www.w3schools.com/html/html_formatting.asp)

