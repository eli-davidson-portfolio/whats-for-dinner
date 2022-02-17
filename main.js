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
        selectMealButton: document.getElementById('select-meal-button'),
        setEventListeners() {
            this.selectMealButton.addEventListener('click', this.createMeal);
        },
        createMeal() {
            var mealType = document.querySelector('input[name="meal"]:checked').value
            if (mealType) {
                var generatedMeal = application.mealData.generateRandomMeal(mealType)
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
    },
    enable(element) {
        element.classList.remove('disabled');
    },
    disable(element) {
        element.classList.add('disabled');
    }
}

window.addEventListener('load', initializeApplication)

function initializeApplication() {
    var keys = Object.keys(application);
    for (var i = 1; i < keys.length; i++) {
        application[keys[i]].setEventListeners();
    }  
}


