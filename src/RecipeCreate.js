import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    addRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={cuisine}
                onChange={(event) => setCuisine(event.target.value)}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                type="url"
                id="photo"
                name="photo"
                value={photo}
                onChange={(event) => setPhoto(event.target.value)}
                placeholder="Photo"
                required
              />
            </td>
            <td>
              <textarea
                type="text"
                id="Ingredients"
                name="Ingredients"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                placeholder="Ingredients"
                required
              />
            </td>
            <td>
              <textarea
                type="text"
                id="Preparations"
                name="preparation"
                value={preparation}
                onChange={(event) => setPreparation(event.target.value)}
                placeholder="Preperations"
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
