import React from 'react'

const RecipeList = ({ recipes, handleAddToFavorites }) => {
    return (
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.source}</p>
            <ul>
              {recipe.recipe.ingredients.map((ingredient) => (
                <li key={ingredient.text}>{ingredient.text}</li>
              ))}
            </ul>
            <button onClick={() => handleAddToFavorites(recipe)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    );
  };

export default RecipeList