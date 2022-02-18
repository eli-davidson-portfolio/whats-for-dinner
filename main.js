
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

        function showForm() {
            document.getElementById('add-form').classList.remove('hidden')
        }

        function hideForm() {
            document.getElementById('add-form').classList.add('hidden')
        }
        

        function addRecipe() {
            var selector = document.getElementById("rs");
            var selectedMealType = selector.options[selector.selectedIndex].value;
            var recipeText = document.querySelector('#recipe-text').value
            mealData[selectedMealType].unshift(recipeText)
            console.log(mealData[selectedMealType]);
        }
    

            document.addEventListener('click', function (e) {
                var id = e.target.id ;
                console.log(id);
                if (id ===  'select-meal-button') {
                    var mealType = selectMealBox.getMealType();  
                    var randomMeal = mealData.generateRandomMeal(mealType);  
                    displayMealBox.displayMeal(randomMeal);
                } else if (id === 'clear-meal-button') {
                    displayMealBox.clearMeal();
                } else if (id === 'submit-form-button') { 
                    addRecipe()
                } else if (id === 'clear-form-button') { 
                 return
                }
            }
)

