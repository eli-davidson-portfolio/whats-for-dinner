
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
            if (mealType === 'entire-meal') {
                var mainDish = this.getRandomElement(this.mainDishes);
                var side = this.getRandomElement(this.sides);
                var dessert = this.getRandomElement(this.desserts);
                return `${mainDish} with a side of ${side} and ${dessert} for dessert!`
            }
            return `${this.getRandomElement(this[mealType])}!`;
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
                return mealType;
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
            this.hide(this.image);
            this.show(this.display);
        },
        clearMeal() {
            this.result.innerText = '';
            this.hide(this.display);
            this.show(this.image);
        },
        show(element) {
            element.classList.remove('hidden');
        },
        hide(element) {
             element.classList.add('hidden');
        }
    }
    
document.addEventListener('click', function (e) {
    var id = e.target.id ;
    if (id ===  'select-meal-button') {
        var mealType = selectMealBox.getMealType();  
        var randomMeal = mealData.generateRandomMeal(mealType);  
        displayMealBox.displayMeal(randomMeal);
    } else if (id === 'clear-meal-button') {
        displayMealBox.clearMeal();
    }
    }
)

