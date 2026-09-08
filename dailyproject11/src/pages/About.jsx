function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-4xl font-bold mb-6">
          About RecipeHub 🍴
        </h1>

        <p className="text-gray-600 leading-7 mb-4">
          Welcome to RecipeHub, a simple recipe website built
          with React and Tailwind CSS.
        </p>

        <p className="text-gray-600 leading-7 mb-4">
          Browse our collection of delicious recipes and click
          on any recipe to view its ingredients and cooking
          instructions.
        </p>

        <p className="text-gray-600 leading-7">
          This project demonstrates React components, React
          Router, dynamic routes, useParams, props, arrays,
          and responsive Tailwind CSS.
        </p>

      </div>

    </div>
  );
}

export default About;