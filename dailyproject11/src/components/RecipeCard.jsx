import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">
          {recipe.name}
        </h2>

        <p className="text-gray-600 mb-4">
          {recipe.description}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>⏱ {recipe.cookingTime}</span>
          <span>📊 {recipe.difficulty}</span>
        </div>

        <Link
          to={`/recipe/${recipe.id}`}
          className="block text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
        >
          View Recipe
        </Link>
      </div>

    </div>
  );
}

export default RecipeCard;