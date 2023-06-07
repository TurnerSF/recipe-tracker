import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate.js";
import RecipeList from "./RecipeList.js";
import RecipeData from "./RecipeData.js";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  function addRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  function deleteRecipe(recipeToDelete) {
    let filteredDelete = recipes.filter((recipe) => recipe !== recipeToDelete);
    setRecipes(filteredDelete);
  }

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <>
        <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
        <RecipeCreate addRecipe={addRecipe} />
      </>
    </div>
  );
}

export default App;
