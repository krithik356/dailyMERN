import useFetch from './useFetch'
import './App.css'

function App() {
//https://dog.ceo/api/breeds/image/random
  const {data,loading,error,refetch} = useFetch("https://dog.ceo/api/breeds/image/random");

   return (
    <div>
      <h1>🐶 Random Dog</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data && !loading && !error && (
        <img
          src={data.message}
          alt="Random dog"
          width="400"
        />
      )}

      <button onClick={refetch}>
        New Dog
      </button>
    </div>
  );
}

export default App
