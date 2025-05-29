import "../styles/RecipeDetails.css"
import ReactMarkdown from "react-markdown";
function RecipeDetails({ recipe }) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </article>
    </section>
  );
}
export default RecipeDetails;