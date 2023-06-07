import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  function recipeMap(recipes) {
    return recipes.map((recipe) => (
      <tr key={recipe.name}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt={recipe.name} width="200" height="200" />
        </td>
        <td><p className="content_td" >{recipe.ingredients}</p></td>
        <td><p className="content_td">{recipe.preparation}</p></td>
        <td>
          <button onClick={() => deleteRecipe(recipe)} name='delete'>Delete</button>
        </td>
      </tr>
    ));
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeMap(recipes)}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
