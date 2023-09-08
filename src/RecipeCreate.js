import React, { useState } from "react";

function RecipeCreate({addARecipe}) {

initialRecipeState={
  name: "",
  cuisine: "",
  image: "",
  ingredients: "",
  preparation: "",
}

  const [recipeData, setRecipeData]= useState({...initialRecipeState})
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  function handleChange({ target }){
    setRecipeData({
      ...recipeData,
      [target.name]: target.value,
    });
  };

  function handleSubmit (event){
    event.preventDefault();
    addARecipe({...recipeData});
    setRecipeData({ ...initialRecipeState });
  };
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  

  return (
    <form name="create" onClick={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Name"
              required={true}
              onChange={handleChange}
              value={postData.name} />
            </td>
            <td>
              <input 
              id="cuisine" 
              name="cuisine" 
              type="text" 
              placeholder="Cuisine"
              required={true}
              onChange={handleChange}
              value={postData.cuisine} />
            </td>
            <td>
              <input 
              id="image" 
              name="image" 
              type="url" 
              placeholder="URL"
              required={true}
              onChange={handleChange}
              value={postData.image} />
            </td>
            <td>
              <textarea 
              id="ingredients" 
              name="ingredients" 
              type="text"
              required={true}
              placeholder="Ingredients"
              onChange={handleChange}
              value={recipeData.ingredients}
              rows= {3} />
            </td>
            <td>
              <textarea 
              id="preparation" 
              name="preparation" 
              type="text"
              placeholder="Preparation"
              required={true}
              onChange={handleChange}
              value={recipeData.preparation}
              rows= {3} />
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
