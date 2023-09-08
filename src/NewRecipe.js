import React from "react";

function NewRecipe({recipe, deleteARecipe}){

    function handleDeleteButtonClicked() {
        deleteARecipe(recipe);
    }

    return (
    <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} /></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td>
            <button name="edit">Edit</button>
            <button name="delete" onClick={handleDeleteButtonClicked}>Delete</button>
            
        </td>
    </tr>
    )}

    export default NewRecipe;