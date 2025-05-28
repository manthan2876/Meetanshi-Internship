// import React, { useState } from "react";
import { useState } from "react";
import "../styles/InputBox.css";

function IngredientInput({handleInputIngredients}) {
  const [ingredient, setIngredient] = useState("");
  function handleInput(e) {
    e.preventDefault();
    setIngredient(e.target.value);
  }
  return (
    <div className="ingredient-input-row">
      <input
        className="ingredient-input"
        type="text"
        placeholder="e.g. oregano"
        value={ingredient}
        onChange={(e) => handleInput(e)}
      />
      <button className="ingredient-btn" onClick={(e) => handleInputIngredients(e,ingredient)}>
        + Add ingredient
      </button>
    </div>
  );
}

export default IngredientInput;
