## The Odin Project

# Foundations - 04. HTML Foundations
## 04b. - HTML Boilerplate

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230126
  - Date Completed:
---

  - [Introduction to HTML and CSS](04_foundations_html_foundations.md)
  - [Elements and Tags](04a_elements_and_tags.md)
  - [HTML Boilerplate(this document)](04b_html_boilerplate.md)
  - [Working with Text](04c_working_with_text.md)
  - [Lists](04d_lists.md)
  - [Links and Images](04e_links_and_images.md)
  - [Commit Messages](04f_commit_messages.md)
  - [Project: Recipes](#)
  
---
### [HTML Boilerplate](https://www.theodinproject.com/lessons/foundations-html-boilerplate)

#### Introduction

All HTML documents have the same basic structure or boilerplate that needs to
be in place before anything useful can be done. In this lesson, we will explore
the different parts of this boilerplate and see how it all fits together.

#### Lesson Overview

  - How to write the basic boilerplate for an HTML document
  - How to open HTML documents in your browser

---
#### Creating an HTML File

Following the online instructions, you should now have a file named [index.html](html-boilerplate/index.html) in your `html-boilerplate` directory.

#### The DOCTYPE

The doctype's purpose is to tell the browser what version of HTML it should
use to render the document. The latest version of HTML is HTML5, and the 
doctype for this version is:

  `<!DOCTYPE html>`


#### HTML Element

After we declare the doctype, we need to provide an **<html\>** element. This
is what's known as the root element of the document, meaning that every other
element in the document will be a descendant of it.

The page should now look like the following:

```html
<!DOCTYPE html>
<html lang="en">
</html>
```    

##### What is the lang attribute?

`lang` specifies the language of the text content in that element. This attribute
is primarily used for improving accessibility of the webpage. It allows assistive
technologies, for example screen readers, to adapt according to the language
and invoke correct pronunciation.

#### Head Element

The `<head>` element is where we put important meta-information **about** our
webpages. Inside the `<head>`, we **should not** use any element that displays
content on the webpage.

##### The Charset Meta Element

We should always have the meta tag for the charset encoding of the webpage in
the head element: `<meta charset="utf-8">`.

definitions: 
  - UTF(-8) = Uniform Transformation Format (8-bit)
  - ASCII = American Standard Code for Information Interchange
    
Setting the encoding is important because it ensures that the webpage will
display special symbols and characters from different languages correctly in
the browser.

##### Title Element

We should always include the title element in the head of an HTML document:

`<title>Document</title>`

The title element is used to give webpages a human-readable title which is
displayed in our webpages browser tab.

If the element is not included, the webpage's title would default to its file
name. In this case that would be `index.html`, which isn't very meaningful for
users.

Our `index.html` page should now look like the following:

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
</html>
```

#### Body Element

The final element needed to complete the HTML boilerplate is the `<body>`
element. This is where all the content that will be displayed to users will
go - the text, images, lists, links, and so on.

To complete the boilerplage, add the body element to the `index.html` file.

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  
  <body>
  TEST
  </body>
</html>
```

#### Viewing HTML Files in the Browser

Open up the `index.html` file in your browser!

---
#### Assignment

1. Watch and follow along to Kevin Powell’s brilliant [Building Your First Web Page video](https://youtu.be/V8UAEoOvqFg?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&t=93)
2. Build some muscle memory by deleting the contents of the index.html file
and trying to write out all the boilerplate again from memory. Don’t worry if
you have to peek at the lesson content the first few times if you get stuck.
Just keep going until you can do it a couple of times from memory.
3. Run your boilerplate through the W3 [HTML validator](https://validator.w3.org/) or alternatively this [HTML validator](https://www.freeformatter.com/html-validator.html). Validators ensure your markup is correct and are an excellent learning tool,
as they provide feedback on syntax errors you may be making often and aren’t
aware of, such as missing closing tags and extra spaces in your HTML.

#### Knowledge Check

  - What is the purpose of the doctype declaration?
  - What is the HTML element?
  - What is the purpose of the head element?
  - What is the purpose of the body element?

  
#### Additional Resources

  - Read through this article about what [charsets you should use with your HTML pages](https://www.positioniseverything.net/html-encoding/).
  - Another option for opening your HTML pages in the browser is using the
  [live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) with VSCode. This will open your HTML document and automatically refresh it
  every time you save the document. However, we recommend not using this
  extension and instead doing it the old fashioned way, by opening the page
  and refreshing the page manually in the browser for your first few HTML
  projects. In this way you can get used to that process and won’t become 
  eliant on extensions right away. One reason is that there may be subtle
  differences when using extensions. For example, live server will always
  use UTF-8 character encoding and not the value defined in your `meta-charset` attribute. This could potentially hide some characters on your site not 
  being encoded in the way you expect.
  - If you wish, you can add the `lang` attribute to individual elements
  throughout the webpage. Read through [this doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) for a better understanding of
  the `lang` attribute.
