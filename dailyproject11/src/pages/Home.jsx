import recipes from "../data/recipes.js"
import RecipeCard from "../components/RecipeCard";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          Delicious Recipes 🍴
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Discover simple and delicious recipes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;