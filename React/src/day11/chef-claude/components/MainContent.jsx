import InputBox from "./InputBox";
import IngredientsList from "./IngredientsList";
import RecipeDetails from "./RecipeDetails";
import { useEffect, useRef, useState } from "react";
import { getRecipeFromMistral } from "../ai.js";

function MainContent() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState("");
    function handleIngredients(e, ingredient) {
        if (ingredient.trim() !== "") {
            setIngredients([...ingredients, ingredient]);
        }
        e.target.previousSibling.value ="";
    }
    const reference = useRef(null);
    useEffect(() => {
        if(recipeShown !== "" && reference !== null){
            reference.current.scrollIntoView({behavior: "smooth"});
        }
    },[recipeShown])
    async function handleRecipe() {
        const recipe = await getRecipeFromMistral(ingredients);
        setRecipeShown(recipe);
    }
    return (
        <main>
            <InputBox handleInputIngredients={handleIngredients} />
            {ingredients.length ? <IngredientsList ingredientsList={ingredients} handleRecipeBtn={handleRecipe} ref={reference} /> : null}
            {recipeShown ? <RecipeDetails recipe={recipeShown}/> : null}
        </main>
    )
}

export default MainContent;