const recipeResult = document.getElementById("recipe-result")
const searchButton = document.getElementById("search-button")

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

// const getRecipeApi = async () => {
//     const uniqueUrl = url + "big mac"
//     const response = await fetch(uniqueUrl)
//     const returnData = await response.json()
//     recipeResult = returnData
//     console.log(recipeResult)
    
// }

searchButton.addEventListener('click', () => {
    let userInput = document.getElementById("user-input").value;
    if(userInput.length == 0) {
        recipeResult.innerHTML = `
        <h3>You Must Enter a Recipe</h3>
        `
    }
    else {
        fetch(url + userInput)
        .then((Response)=> Response.json())
        .then((data) => {
            // console.log(data)
            let searchedMeal = data.meals[0]
            console.log(searchedMeal)
            console.log("strMeal:",searchedMeal.strMeal)
            console.log("strArea:", searchedMeal.strArea)
            console.log("strMealThumb:", searchedMeal.strMealThumb)
            console.log("strInstructions", searchedMeal.strInstructions)
            let count = 1
            let ingredients = []
            for(let i in searchedMeal) {
                // console.log("i:", i)
                let ingredient = ""
                let measure = ""
                if(i.startsWith("strIngredient") && searchedMeal[i]) {
                    // console.log("searchedMeal[i]",searchedMeal[i])
                    ingredient = searchedMeal[i]
                    measure =searchedMeal[`strMeasure` + count]
                    count += 1
                    ingredients.push(`${measure} ${ingredient}`)
                }
            }
            
            recipeResult.innerHTML = `
            <img src=${searchedMeal.strMealThumb} />
            <div class="recipe-details">
                <h2>${searchedMeal.strMeal}</h2>
                <h4>${searchedMeal.strArea}</h4>
            </div>
            <div id="ingredients-container"></div>
                <div id="recipe">
                    <button id="hide-recipe">X</button>
                    <pre id="instructions">${searchedMeal.strInstructions}</pre>
                </div>
                <button id="show-recipe">View Recipe</button>
            `
            const ingredientsContainer = document.getElementById("ingredients-container")
            let parent = document.createElement("ul")
            const recipe = document.getElementById("recipe")
            const hideRecipe = document.getElementById("hide-recipe")
            const showRecipe = document.getElementById("show-recipe")

            ingredients.forEach((ingredient => {
                let child = document.createElement("li")
                child.innerText = ingredient;
                parent.appendChild(child)
                ingredientsContainer.appendChild(parent)
            }));

            hideRecipe.addEventListener("click", () => {
                console.log("click")
                recipe.style.display = "none";
            })

            showRecipe.addEventListener("click", () => {
                console.log("click")
                recipe.style.display = "block"
            })
        }).catch (() => {
            recipeResult.innerHTML = `
            <h3>You must Enter a Valid Recipe</h3>
            `
        })

    }
})

