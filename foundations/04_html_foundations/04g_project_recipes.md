## The Odin Project

# Foundations - 04. HTML Foundations
## 04g. - Project: Recipes

  - [Source](https://www.theodinproject.com/paths/foundations/courses/foundations)
  - Date Started: 20230131
  - Updated:
  - Date Completed:
---

#### Table of Contents

  - [Introduction to HTML and CSS](04_foundations_html_foundations.md)
  - [Elements and Tags](04a_elements_and_tags.md)
  - [HTML Boilerplate](04b_html_boilerplate.md)
  - [Working with Text](04c_working_with_text.md)
  - [Lists](04d_lists.md)
  - [Links and Images](04e_links_and_images.md)
  - [Commit Messages](04f_commit_messages.md)
  - [Project: Recipes(this document)](04g_project_recipes.md)
  
---

### [Project: Recipes](https://www.theodinproject.com/lessons/foundations-recipes)

#### Introduction

In this project, you are going to build a basic recipe website.

The website will consist of a main index page which will have links to a few recipes. The website won’t look very pretty by the time you’ve finished. 

#### Setting Up Your Project’s GitHub Repository

See online documentation if you need help with this.

1. Create a new repo for this project on GitHub.com and call it `odin-recipes`.
2.Move that repository onto your local machine, inside the repos folder that you previously created in the Git Basics lesson. The command should look like `git clone git@github.com:username/odin-recipes.git` (use SSH).
3. Now `cd` into the `odin-recipes` project directory that is now on your local machine.
4. Set up your `README.md` file and write a brief introduction describing what the current project is and what skills you will have demonstrated once you have completed it. (You can also do this as a self-reflection at the end of the project, which is a good way to review what you have learned.)

  

#### Assignment

##### Iteration 1: Initial Structure

1. Within the `odin-recipes` directory, create an `index.html` file.
2. Fill it out with the usual boilerplate HTML and add an `h1` heading “Odin Recipes” to the body.

##### Iteration 2: Recipe Page

1. Create a new directory within the `odin-recipes` directory and name it `recipes`.
2. Create a new HTML file within the `recipes` directory and name it after the recipe it will contain. For example `lasagna.html`. You can use the name of your favorite dish or, if you need some inspiration, you can [find a recipe to use here](https://www.allrecipes.com/).
3. For now, just include an `h1` heading with the recipe’s name as its content.
4. Back in the `index.html` file, add a link to the recipe page you just created. Example: Under the `<h1>Odin Recipes</h1>` heading, write out the link like so: `<a href="recipes/recipename.html">Recipe Title</a>`. The text of the link should again be the recipe name.

##### Iteration 3: Recipe Page Content

Your new recipe page should have the following content:

1. An image of the finished dish under the h1 heading that you added earlier. You can find images of the dish on Google or the recipe site we linked to earlier.

2. Under the image, it should have an appropriately sized “Description” heading followed by a paragraph or two describing the recipe.

3. Under the description, add an “Ingredients” heading followed by an unordered list of the ingredients needed for the recipe.

4. Finally, under the ingredients list, add a “Steps” heading followed by an ordered list of the steps needed for making the dish.

##### Iteration 4: Add More Recipes

1. Add two more recipes with identical page structures to the recipe page you’ve already created.
2. Don’t forget to link to the new recipes on the index page. Also, consider putting all the links in an unordered list so they aren’t all on one line.

Example:

```html
<ul>
    <li><a href="recipes/yourrecipe.html">Recipe Title 1</a></li>
    <li><a href="recipes/yourrecipe.html">Recipe Title 2</a></li>
    <li><a href="recipes/yourrecipe.html">Recipe Title 3</a></li>
  </ul>
```

#### Knowledge Check



#### Additional Resources

