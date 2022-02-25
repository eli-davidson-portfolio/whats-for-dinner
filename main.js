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
            randomMeal = `${mainDish} with a side of ${side} and ${dessert} for dessert!`;
        } else {
            randomMeal = `${this.getRandomElement(this[mealType])}!`;
        }
        displayMealBox.displayMeal(randomMeal);
    },
    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

var selectMealBox = {
    title: document.getElementById('select-meal-title'),
    selectMealButton: document.getElementById('select-meal-button'),
    getMealType() {
        addForm.hideForm();
        
        displayMealBox.clearMeal();
        if (document.querySelector('input[name="meal"]:checked').value){
            
            var mealType = document.querySelector('input[name="meal"]:checked').value;
            this.clearRadio();
            
            mealData.generateRandomMeal(mealType); 
            
        } 
    },
    clearRadio() {
        if (document.querySelector('input[name="meal"]:checked').checked) {
            document.querySelector('input[name="meal"]:checked').checked = false;
        }
        this.hidebutton();
    },
    hidebutton() {
        hide(this.selectMealButton);
    },
    showbutton() {
       show(this.selectMealButton);
       addForm.hideForm()
       displayMealBox.clearMeal();
    }
}

var displayMealBox = {
    title: document.getElementById('meal-display-title'),
    display: document.getElementById('meal-display'),
    image: document.getElementById('meal-display-image'),
    result: document.getElementById('meal-display-result'),
    clearMealButton: document.getElementById('clear-meal-button'),
    displayMeal(meal, mealType) {
        if(mealType) {
            this.title.innerText = `You added a ${mealType}!`
        } else { 
            this.title.innerText = `You should make:`
        }
        this.result.innerText = meal;
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
    recipeNameLabel: document.getElementById("recipe-name-label"),
    recipeText: document.getElementById("recipe-text"),
    showForm() {
        show(this.form);
        displayMealBox.clearMeal();
        selectMealBox.clearRadio();
    },
    hideForm() {
        this.recipeText.value = '';
        hide(this.form);
    },
    addRecipe() {
        this.setRequired()
        if (this.recipeText.value) {
            this.clearRequired()
            var selectedMealType = this.selector.options[this.selector.selectedIndex].value;
            var caption = this.selector.options[this.selector.selectedIndex].innerText;
            mealData[selectedMealType].unshift(this.recipeText.value);
            displayMealBox.displayMeal(this.recipeText.value, caption);
            this.hideForm();
        }
    },
    setRequired() {
        this.recipeNameLabel.classList.add('required');
    },
    clearRequired() {
        this.recipeNameLabel.classList.remove('required');
        selectMealBox.clearRadio()
    }
}

document.addEventListener('click', function (e) {
    manageClickEvent(e.target.id, e.target.name);
});

function manageClickEvent(buttonId, buttonName) {
    if (buttonName === "meal") {
        selectMealBox.showbutton();
    }
    switch (buttonId){
        case 'select-meal-button':
            selectMealBox.getMealType();
        break;
        case 'clear-meal-button':
            displayMealBox.clearMeal();
        break;
        case 'submit-form-button':
           addForm.addRecipe();
        break;
        case 'cancel-form-button':
            addForm.hideForm();
        break;
        case 'add-meal-button':
            addForm.showForm();
        break;
        case 'rs':
            selectMealBox.clearRadio();
            break;
        case 'recipe-text':
            addForm.clearRequired();
        break;
    }

} 

function show(element) {
    element.classList.remove('hidden');
}

function hide(element) {
    element.classList.add('hidden');
}


