import { Link, useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {

  const { id } = useParams();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Recipe not found 😕
        </h1>
      </div>
    );
  }t

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">

          <Link
            to="/"
            className="text-orange-500 hover:underline"
          >
            ← Back to recipes
          </Link>

          <h1 className="text-4xl font-bold mt-4 mb-3">
            {recipe.name}
          </h1>

          <p className="text-gray-600 mb-6">
            {recipe.description}
          </p>

          <div className="flex gap-6 mb-8 text-gray-700">
            <span>⏱ {recipe.cookingTime}</span>
            <span>📊 {recipe.difficulty}</span>
          </div>

          <h2 className="text-2xl font-bold mb-4">
            Ingredients
          </h2>

          <ul className="list-disc list-inside space-y-2 mb-8">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-4">
            Instructions
          </h2>

          <ol className="list-decimal list-inside space-y-3">
            {recipe.instructions.map((step, index) => (
              <li key={index}>
                {step}
              </li>
            ))}
          </ol>

        </div>

      </div>

    </div>
  );
}

export default RecipeDetails;