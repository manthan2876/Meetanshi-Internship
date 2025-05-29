import "../styles/IngredientsList.css";

function IngredientsList({ingredientsList, handleRecipeBtn}) {
  return (
    <div className="ingredients-wrapper">
      <h2 className="ingredients-title">Ingredients on hand:</h2>
      <ul className="ingredients-list">
        {ingredientsList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="recipe-cta">
        <div>
          <div className="cta-title">Ready for a recipe?</div>
          <div className="cta-desc">
            Generate a recipe from your list of ingredients.
          </div>
        </div>
        <button className="cta-btn" onClick={handleRecipeBtn}>
          Get a recipe
        </button>
      </div>
    </div>
  );
}

export default IngredientsList;
