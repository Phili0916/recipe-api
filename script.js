const recipeResult = document.getElementById("recipe-result")
const searchButton = document.getElementById("search-button")
const userInput = document.getElementById("user-input").value

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

// const getRecipeApi = async () => {
//     const uniqueUrl = url + "big mac"
//     const response = await fetch(uniqueUrl)
//     const returnData = await response.json()
//     recipeResult = returnData
//     console.log(recipeResult)
    
// }
fetch(url + "pizza")
    .then((Response)=> Response.json())
    .then((data) => {
        // console.log(data)
        let searchedMeal = data.meals[0]
        console.log(searchedMeal)
        console.log("strMeal:",searchedMeal.strMeal)
        console.log("strArea:", searchedMeal.strArea)
        console.log("strMealThumb:", searchedMeal.strMealThumb)
        console.log("strInstructions", searchedMeal.strInstructions)
    })
