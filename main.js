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
[x] create colors, and classes to match the HTML structure.

##Iteration 1: Minimum Viable Product (MVP) - Add Random Side, Main and Dessert Functionality
[x] (if possible) disable entire meal radio button
[x] add the js data structure.
[x] add event listener for the lets cook button.
[x] create a randomize array elements function
[x] create a show function.
[x] create a hide function.
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

var application = {
    mealData: {
        sides: [
            "Miso Glazed Carrots",
            "Coleslaw",
            "Garden Salad",
            "Crispy Potatoes",
            "Sweet Potato Tots",
            "Coconut Rice",
            "Caeser Salad",
            "Shrimp Summer Rolls",
            "Garlic Butter Mushrooms!",
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
        desserts: [
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
        ],
        generateRandomMeal(mealType) {
            return this.getRandomElement(this[mealType]);
        },
        getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
    },
    navBar: {
        title: document.getElementById('nav-bar-title'),
        addMealButton: document.getElementById('add-meal-button'),
        setEventListeners() {
            this.addMealButton.addEventListener('click', this.displayForm);
        },
        displayForm() {
            return
        }
    },
    selectMealBox: {
        title: document.getElementById('select-meal-title'),
        mealType: document.querySelector('input[name="meal"]:checked'),
        selectMealButton: document.getElementById('select-meal-button'),
        setEventListeners() {
            this.selectMealButton.addEventListener('click', this.createMeal);
        },
        createMeal() {
            if (application.selectMealBox.mealType) {
                var generatedMeal = application.mealData.generateRandomMeal(application.selectMealBox.mealType.value)
                application.displayMealBox.displayMeal(generatedMeal);
            } else {
                console.log('please select a meal')
            }
        }
    },
    displayMealBox: {
        title: document.getElementById('meal-display-title'),
        display: document.getElementById('meal-display'),
        image: document.getElementById('meal-display-image'),
        result: document.getElementById('meal-display-result'),
        clearMealButton: document.getElementById('clear-meal-button'),
        displayMeal(generatedMeal) {
            this.result.innerText = generatedMeal;
            application.show(this.display);
            application.hide(this.image);
        },
        clearMeal() {
            application.displayMealBox.result.innerText = '';
            application.displayMealBox.display.classList.add('hidden');
            application.displayMealBox.image.classList.remove('hidden')
        },
        setEventListeners() {
            this.clearMealButton.addEventListener('click', this.clearMeal);
        }
    },
    show(element) {
        element.classList.remove('hidden');
    },
    hide(element) {
        element.classList.add('hidden');
    }
}

var keys = Object.keys(application);

for (var i = 1; i < keys.length; i++) {
    application[keys[i]].setEventListeners();
}

