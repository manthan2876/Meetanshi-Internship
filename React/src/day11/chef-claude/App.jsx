import "./App.css";
import Navbar from "./components/Navbar";
import InputBox from "./components/InputBox";
import IngredientsList from "./components/IngredientsList";
import { useState } from "react";

function App() {
    const [ingredients, setIngredients] = useState([]);
    function handleIngredients(e, ingredient) {
        if (ingredient.trim() !== "") {
            setIngredients([...ingredients, ingredient]);
        }
        e.target.previousSibling.value = "";
    }
    return (
        <>
            <Navbar />
            <main>
                <InputBox handleInputIngredients={handleIngredients} />
                <IngredientsList ingredientsList ={ingredients}/>
            </main>
        </>
    );
}

export default App;