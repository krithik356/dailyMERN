import { useEffect,useState } from "react";
import axios from "axios";
import "./App.css"

function App(){
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/books"
      );

      setBooks(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to load books");
      setLoading(false);
    }
  };

  if(loading){
    return(
      <h2> loading....</h2>
    )
  }
   return (
    <div className="app">
      <h1>📚 Book Tracker</h1>

      <div className="book-container">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <h2>{book.title}</h2>

            <p>
              <strong>Author:</strong> {book.author}
            </p>

            <span className={`status ${book.status}`}>
              {book.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


