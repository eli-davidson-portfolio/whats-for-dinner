# What's for Dinner?
## Overview
"What's for dinner?" is a responsive single page web application built using HTML5, CSS3 and vanilla JavaScript. The application suggests selects random meal from a pre-defined list, and displays it on the user's screen. It has been deployed to gitHub pages [here.](https://elleshadow.github.io/whats-for-dinner/)

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/dinner.html). 
### Learning Goals
- Gain experience building an application that utilizes HTML, CSS and JavaScript
- Write HTML and CSS to match a provided comp
- Understand how to listen to and respond to user events
- Individualize your programming skill set
### Contributors
-[Eli Davidson](https://github.com/elleshadow)
### Technologies Used
- Github open source version control software: [Website](https://github.com/)

- HTML
- CSS
- JavaScript

## Setup
### Clone
- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Read this README thoroughly, then begin working!
## User Instructions
### Display Random meal
1. Select a meal type from the box on the left.
2. Click the **Let's Cook!** button.
3. Your selected meal option will be displayed on the box to the right.

![select meal](https://user-images.githubusercontent.com/94997199/154565312-f6062b13-df59-4915-ab78-f9ba76fa6ead.png)
### Clear displayed meal

When a random meal item is displayed on the right box, the **Clear** button will appear below it.
1. Click the **Clear** button.

![dispMeal](https://user-images.githubusercontent.com/94997199/154565440-bc3e8db8-24f1-4e74-81ae-8851f2c3bb66.png)
### Add a recipe
1. From the **Navigation bar** at the top of the screen, click the **Add a Recipe** button.
2. A **form** will display at the bottom of the screen to add a new recipe at the bottom of the page.
3. Select a **Recipr Type** from the selector on the left side of the form. 
4. Type an item name into the **Recipe Name** box in the middle of the form.
5. Click the **Add New** button. 
If a valid entry is recieved, the form will disappear, and your recipe will be added to the appropriate list, and will be displayed randomly along side the pre-loaded options.

*NOTE: SQL injection won't work because the application is not connected to a backend, but feel free to try if you want.*

![Add a recipe](https://user-images.githubusercontent.com/94997199/154772460-eabcc8e8-c539-48ec-b0d9-0de8c323d8c7.png)

## Troubleshooting

### No meal item is displayed when clicking "Let's Cook!"
* A meal will only display if a meal type is selected. See step 1 in "Display Random Meal" above.

### The clear button is missing
* The clear button will only display when a meal is displayed. See step 1 in "Display Random Meal" above.

### The Add a recipe form does not display when clicking "Add a recipe"
* Although the applicaiton is responsive, it was not optimized for mobile. On mobile, the application displays as intended only when the device is rotated to landscape mode. If you have trouble rotating your device, please seek toubleshooting from your device manufacturer.

### The Add a recipe form does not disappear when clicking "Add a recipe"
* The form will only automatically hide if a meal item is typed into the box before clicking **Add a recipe**. Either, enter a meal item, and click **Add a meal**, or click **cancel** to abort.