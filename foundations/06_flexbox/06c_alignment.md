## The Odin Project

# Foundations - 06. Flexbox
## 06b. - Alignment

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230125
  - Updated: 20230126
  - Date Completed: 20230214
---

#### Table of Contents

  - [Introduction to Flexbox](06_introduction_to_flexbox.md)
  - [Growing and Shrinking](06a_growing_and_shrinking.md)
  - [Axes](06b_axes.md)
  - [Alignment(this document)](06c_alignment.md)
  - [Project: Landing Page](#)
  
---
## [Alignment](https://www.theodinproject.com/lessons/foundations-alignment)

### Introduction

So far everything we have touched with flexbox has used the rule `flex: 1` on
all flex items, which makes the items grow or shrink equally to fill all of the 
available space. Very often, however, this is not the desired effect. Flex is
also very useful for arranging items that have a specific size.

### Lesson Overview

  - You’ll learn how to align items inside a flex container both vertically and horizontally.
  
### Alignment

Let's look at an example:

```html

<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css

.container {
  height: 140px;
  padding: 16px;
  background: plum;
  border: 4px solid indigo;
  display: flex;
}

.item {
  width: 60px;
  height: 60px;
  border: 4px solid darkslategray;
  background: skyblue;
}
```

You should be able to predict what happens if you put `flex: 1` on the `.item`
by now.

Adding `flex: 1` to `.item` makes each of the items grow to fill the available
space, but what if we wanted them to stay the same width, but distribute
themselves differently inside the container? 

Remove `flex: 1` from `.item` and add `justify-content: space-between` to 
`.container`.

`justify-content` aligns items across the **main axis**. There are a few values
that you can use here. You'll learn the rest in the reading assignments, but
for now try changing it to `center`, which should center the boxes along the
main axis.

To change the placement of items along the **cross axis** use `align-items`.
Try getting the boxes to the center of the container by adding `align-items: center`
to `.container`.

Because `justify-content` and `align-items` are based on the main and cross
axis of your container, their behavior changes when you change the flex-direction
of a flex-container. For example, when you change `flex-direction` to `column`,
`justify-content` aligns vertically and `align-items` aligns horizontally. The
most common behavior, however, is the default, i.e. `justify-content` aligns
items horizontally (because the main axis defaults to horizontal), and `align-items`
aligns them vertically. One of the biggest sticking points that beginners have
with flexbox is confusion when this behavior changes.


### Gap

One more very useful feature of flex is the gap property. Setting gap on a flex container simply adds a specified space between flex items, very similar to adding a margin to the items themselves. gap is a new property so it doesn’t show up in many resources yet, but it works reliably in all modern browsers, so it is safe to use and very handy!

### Assignment

1. This beautiful [Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) covers everything you need to know. It will help reinforce concepts we’ve already touched on with some really fun and creative examples. Spend some time here, some of it should be review at this point, but the foundations here are important!
2. [Typical use cases of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox) is an MDN article that covers some more practical tips. Don’t skip the interactive sections! Playing around with this stuff is how you learn it!
3. The [CSS Tricks “Guide to Flexbox”](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is a classic. There isn’t any new information for you here, but the images and examples are super helpful. This one is a great cheat sheet that you’ll probably return to often. (Keep it handy for the practice exercises!)
4. Go back to our [CSS exercises repository](https://github.com/TheOdinProject/css-exercises) (don’t forget that the instructions are in the README). Do the exercises in the ‘flex’ directory in the order that they are listed. It may take you a while to get through all of them, and the difficulty ramps up as you progress. Stick with it! If you can get through all of them, then you will be in really good shape moving forward.
        01-flex-center
        02-flex-header
        03-flex-header-2
        04-flex-information
        05-flex-modal
        06-flex-layout
        07-flex-layout-2



### Knowledge Check

  - What is the difference between justify-content and align-items?
  - How do you use flexbox to completely center a div inside a flex container?
  - What’s the difference between justify-content: space-between and justify-content: space-around?

### Additional Resources

  - [Flexbox Froggy](https://flexboxfroggy.com/) is a funny little game for practicing moving things around with flexbox.
  - [Flexbox Zombies](https://mastery.games/flexboxzombies/) is another gamified take on flexbox. Free, but requires an account.
  - The [Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) article on MDN is another good starting point. There are helpful examples and interactive sections.
  - [Aligning Items in a Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) goes into more depth on the topic of axes and align-items vs justify-content.
  - This [Flexbox Tutorial](https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/) from freecodecamp is another decent resource.
  - [Flexbox Crash Course](https://www.youtube.com/watch?v=3YW65K6LcIA) is a nice resource by Traversy Media.
  - [Learn flexbox the easy way](https://www.youtube.com/watch?v=u044iM9xsWU) by Kevin Powell explains flexbox very well in this video.
  - [An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) An interactive guide to using the CSS Flexbox layout module.

