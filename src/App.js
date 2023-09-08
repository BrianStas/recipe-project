import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import NewRecipe from "./NewRecipe";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  function deleteARecipe(RecipeToDelete) {
    let newRecipes = recipes.filter(recipe => recipe !== RecipeToDelete);
    setRecipes(newRecipes);
  }
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  function addARecipe(newRecipe){
    let newRecipes = [...recipes, newRecipe];
    setRecipes(newRecipes);
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList deleteARecipe= {deleteARecipe} recipes ={recipes}/>
      <RecipeCreate addARecipe={addARecipe} recipes ={recipes}/>
    </div>
  );
}

export default App;
