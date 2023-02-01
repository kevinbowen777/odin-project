## The Odin Project

# Foundations - 04. HTML Foundations
## 04e. - Links and Images

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230126
  - Date Completed:
---

  - [Introduction to HTML and CSS](04_foundations_html_foundations.md)
  - [Elements and Tags](04a_elements_and_tags.md)
  - [HTML Boilerplate](04b_html_boilerplate.md)
  - [Working with Text](04c_working_with_text.md)
  - [Lists](04d_lists.md)
  - [Links and Images(this document)](04e_links_and_images.md)
  - [Commit Messages](04f_commit_messages.md)
  - [Project: Recipes](#)
  
---
### [Links and Images](https://www.theodinproject.com/lessons/foundations-links-and-images)

#### Introduction

Links are one of the key features of HTML. They allow us to link to other HTML pages on the web. In fact, this is why it’s called the web.

In this lesson, we will learn how to create links and add some visual flair to our websites by embedding images.

#### Lesson Overview

  - How to create links to pages on other websites on the internet
  - How to create links to other pages on your own websites
  - The difference between absolute and relative links
  - How to display an image on webpage using HTML

#### Preparation

To get some practice using links and images throughout this lesson we need an HTML project to work with.


1. Create a new directory named odin-links-and-images.
2. Within that directory, create a new file named index.html.
3. Fill in the usual HTML boilerplate.
4. Finally, add the following h1 to the body:
    `<h1>Homepage</h1>

#### Anchor Elements

To create a link in HTML, we use an anchor element. An anchor element is defined
by wrapping the text or another HTML we want to be a link with an `<a>` tag.

Add the following to the body of the `index.html` page we created and open it
in the browser:
    `<a>click me</a>`

This, on its own won't do anything. The anchor tag on its own won't know where
we want to link to. We have to tell it a destination to go to. We do this by
using an HTML attribute.

An HTML attribute gives additional information to an HTML element and always 
goes in the element's opening tag. An *attribute* is usually made up of two
part: a **name**, and a **value**; however not all attributes require a value.
In our case, we need to add a *href (hyperlink reference)* attribute to the 
opening anchor tag. The value of the href attribute is the destination we want
our link to go to.

Add the following href attribute to the anchor element we created previously
and try clicking it again. Don't forget to refresh the browser so the new
changes can be applied.

`<a href="https://www.theodinproject.com/about">click me</a>`

#### Absolute and Relative Links

Generally, there are two kinds of links we will create:

1. Links to pages on other websites on the internet
2. Links to pages located on our own websites.

##### Absolute Links

Links to pages on other websites on the internet are called **absolute links**.
A typical link will be made up of the following parts: **protocol://domain/path**.
An absolute link will *always* contain the protocol and domain of the destination.

##### Relative Links

Links to other pages within our own website are called relative links. Relative
links *do not* include the domain name. Since it is another page on the same site, it
assumes the domain name will be the same as the page we created the link on.

Within the odin-links-and-images directory, create another HTML file named about.html and paste the following code into it:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Odin Links and Images</title>
  </head>

  <body>
    <h1>About Page</h1>
  </body>
</html>
```

On the `index.html` page, add the following anchor element to create a link to
the about page:

```html
<body>
  <h1>Homepage</h1>
	<a href="https://www.theodinproject.com/about">click me</a>

	<a href="about.html">About</a>
</body>
```

*NOTE: See the online text for the remainder of the instructions for this section.*

Prepending `./` before the link will in most cases prevent such issues. By adding `./` you are specifying to your code that it should start looking for the file/directory *relative* to the current directory.

##### A Metaphor

#### Images

HTML provides a wide variety of elements for displaying all sorts of different media. The most widely used of these is the image element: `<img>`. The `<img>` element is self-closing. Empty, self-closing HTML elements do not need a closing tag.

Instead of wrapping content with an opening and closing tag, it embeds an image into the page using a src attribute which tells the browser where the image file is located. The src attribute works much like the href attribute for anchor tags. It can embed an image using both absolute and relative paths.

#### Parent Directories

*NOTE: See the online text for the remainder of the instructions for this section.*

#### Alt attribute

Besides the src attribute, every image element should also have an alt (alternative text) attribute.

The alt attribute is used to describe an image. It will be used in place of the image if it cannot be loaded. It is also used with screen readers to describe what the image is to visually impaired users.

#### Assignment

  - [Watch Kevin Powell’s HTML Links Video.](https://www.youtube.com/watch?v=tsEQgGjSmkM&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=5)
  - [Watch Kevin Powell’s HTML Images Video.](https://www.youtube.com/watch?v=0xoztJCHpbQ&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=6)
  - [Watch Kevin Powell’s File Structure Video.](https://www.youtube.com/watch?v=ta3Oxx7Yqbo&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=7)
  - [Read about the four main image formats that can be used on the web.](https://www.internetingishard.com/html-and-css/links-and-images/#image-formats)



#### Knowledge Check

  - What element is used to create a link?
  - What is an attribute?
  - What attribute tells links where to go to?
  - What is the difference between an absolute and relative link?
  - Which element is used to display an image?
  - What two attributes do images always need to have?
  - How do you access a parent directory in a filepath?
  - What are the four main image formats that you can use for images on the web?

  
#### Additional Resources

  - [Interneting is hard’s treatment on HTML links and images](https://www.internetingishard.com/html-and-css/links-and-images/)
  - [What happened the day Google decided links including (/) were malware](https://www.itpro.co.uk/609724/google-apologises-after-blacklisting-entire-internet)

