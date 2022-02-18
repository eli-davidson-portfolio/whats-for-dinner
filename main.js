var mealData = {
    sides: [
        "Miso Glazed Carrots",
        "Coleslaw",
        "Garden Salad",
        "Crispy Potatoes",
        "Sweet Potato Tots",
        "Coconut Rice",
        "Caesar Salad",
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
        "Chicken Parmesan",
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
        var randomMeal;
        if (mealType === 'entire-meal') {
            var mainDish = this.getRandomElement(this.mainDishes);
            var side = this.getRandomElement(this.sides);
            var dessert = this.getRandomElement(this.desserts);
            randomMeal = `${mainDish} with a side of ${side} and ${dessert} for dessert!`
        } else {
            randomMeal = `${this.getRandomElement(this[mealType])}!`;
        }
        displayMealBox.displayMeal(randomMeal);
    },
    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
}

var navBar = {
    title: document.getElementById('nav-bar-title'),
    addMealButton: document.getElementById('add-meal-button'),
    displayForm() {
        return;
    }
}

var selectMealBox = {
    title: document.getElementById('select-meal-title'),
    selectMealButton: document.getElementById('select-meal-button'),
    getMealType() {
        var mealType = document.querySelector('input[name="meal"]:checked').value;
        if (mealType) {
            mealData.generateRandomMeal(mealType); 
        } 
    }
}

var displayMealBox = {
    title: document.getElementById('meal-display-title'),
    display: document.getElementById('meal-display'),
    image: document.getElementById('meal-display-image'),
    result: document.getElementById('meal-display-result'),
    clearMealButton: document.getElementById('clear-meal-button'),
    displayMeal(Meal) {
        this.result.innerText = Meal;
        hide(this.image);
        show(this.display);
    },
    clearMeal() {
        this.result.innerText = '';
        hide(this.display);
        show(this.image);
    }

}

var addForm = {
    form: document.getElementById('add-form'),
    selector: document.getElementById("rs"),
    recipeText: document.querySelector('#recipe-text'),
    showForm() {
        show(this.form)
    },
    hideForm() {
        this.recipeText.value = '';
        hide(this.form)
    },
    addRecipe() {
        var selectedMealType = this.selector.options[this.selector.selectedIndex].value;
        mealData[selectedMealType].unshift(this.recipeText.value);

    }
}


function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}



document.addEventListener('click', function (e) {
    var buttonName = e.target.id ;
    console.log(buttonName)
    manageClickEvent(buttonName)
})

function manageClickEvent(buttonName) {
    if (buttonName === 'select-meal-button') {
        selectMealBox.getMealType();
    } else if (buttonName === 'clear-meal-button') {
        displayMealBox.clearMeal();
    } else if (buttonName === 'submit-form-button') {
        addForm.addRecipe()
    } else if (buttonName === 'cancel-form-button') {
        addForm.hideForm()
    } else if (buttonName === 'add-meal-button') {
        addForm.showForm()
    }
}



