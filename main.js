/*  REQUIREMENTS
##Expectations
[ ] Complete iteration 1 and at least one CYOA feature. 

##Iteration 0: Build Out Comp
HTML
[x] fill out the form
[x] Create page structure
[x] Create Nav bar, including one button
[x] Create main section, including background image
[x] Create box 1, including title, radio buttons, and a button.
[x] Create box 2 and with svg space and a space to display two lines of text.
CSS
[ ] create colors, and classes to match the HTML structure.

##Iteration 1: Minimum Viable Product (MVP) - Add Random Side, Main and Dessert Functionality
[x] (if possible) disable entire meal radio button
[x] add the js data structure.
[x] add event listener for the lets cook button.
[x] create a randomize array elements function
[ ] create a show function.
[ ] create a hide function.
[ ] create a show meal helper method
[ ] create a hide meal helper method skelaton
[ ] create a show crockpot helper method.
[ ] create a hide crockpot helper method.
[ ] Connect everything.

CYOA - Error Handling and Clear Button
[ ]  add event listener for the clear button.
[ ] User should only be able to click the clear button if a food is visible. 
[ ] When the clear button is clicked and the food is removed, the image of the cookpot should re-appear.
[ ] User should not be able to click the [“Let’s Cook” button for a recipe unless they have selected an option.
*/

var mealData = {
  sides: [
        "Miso Glazed Carrots",
        "Coleslaw",
        "Garden Salad",
        "Crispy Potatoes",
        "Sweet Potato Tots",
        "Coconut Rice",
        "Caeser Salad",
        "Shrimp Summer Rolls",
        "Garlic Butter Mushrooms",
        "Hush Puppies"
  ],
  mainDishes: [
        "Spaghetti and Meatballs",
        "Pineapple Chicken",
        "Shakshuka",
        "Thai Yellow Curry",
        "Bibimbap",
        "Chicken Parmesean",
        "Butternut Squash Soup",
        "BBQ Chicken Burgers",
        "Ramen",
        "Empanadas",
        "Chicken Fried Rice",
        "Sheet Pan Fajitas",
        "Margarita Pizza"
    ],
  disserts: [
      "Apple Pie",
      "Lemon Meringue Pie",
      "Black Forest Cake",
      "Banana Bread",
      "Peach Cobbler",
      "Cheesecake",
      "Funfetti Cake",
      "Baklava",
      "Flan",
      "Macarons",
      "Macaroons",
      "Chocolate Cupcakes",
      "Pavlova",
      "Pumpkin Pie",
      "Key Lime Pie",
      "Tart Tatin",
      "Croissants",
      "Eclairs"
  ]
}



var buttons = {
    letsCook: document.getElementById('lets-cook'),
}

buttons.letsCook.addEventListener('click', captureMealSelection);

function captureMealSelection() {
    var selectedMeal = document.querySelector('input[name="meal"]:checked').value
    var displayString = generateRandomMeal(selectedMeal);
    console.log(displayString);
}

function generateRandomMeal(mealSelection) {
        if (mealSelection === 'sides') {
            return getRandomElement(mealData.sides)
        } else if (mealSelection ==='mainDishs') {
            return getRandomElement(mealData.mainDishes)
        } else if (mealSelection === 'desserts') {
            return getRandomElement(mealData.disserts)
        }
    
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function show(object) {
    object.classList.remove('hidden');
}

function hide(object) {
    object.classList.add('hidden');
}
