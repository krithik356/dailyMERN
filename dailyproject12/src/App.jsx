import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:5001/api/books";

function App() {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Add book form
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("wishlist");

  // Track which request is running
  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  // Toast message
  const [toast, setToast] = useState("");

  // -----------------------------
  // GET ALL BOOKS
  // -----------------------------
  const getBooks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API_URL);

      setBooks(response.data);
    } catch (error) {
      console.log(error);
      setError("Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  // -----------------------------
  // SHOW SUCCESS TOAST
  // -----------------------------
  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  // -----------------------------
  // ADD BOOK
  // -----------------------------
  const addBook = async (event) => {
    event.preventDefault();

    if (!title.trim() || !author.trim()) {
      return;
    }

    try {
      setAdding(true);

      const response = await axios.post(API_URL, {
        title,
        author,
        status
      });

      // Add newly created book to UI
      setBooks((prevBooks) => [...prevBooks, response.data]);

      // Clear form
      setTitle("");
      setAuthor("");
      setStatus("wishlist");

      showToast("Book added successfully!");
    } catch (error) {
      console.log(error);
      setError("Failed to add book");
    } finally {
      setAdding(false);
    }
  };

  // -----------------------------
  // UPDATE BOOK STATUS
  // -----------------------------
  const updateStatus = async (id, newStatus) => {
    try {
      setUpdatingId(id);

      const response = await axios.put(`${API_URL}/${id}`, {
        status: newStatus
      });

      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === id ? response.data : book
        )
      );

      showToast("Book status updated!");
    } catch (error) {
      console.log(error);
      setError("Failed to update book");
    } finally {
      setUpdatingId(null);
    }
  };

  // -----------------------------
  // DELETE BOOK
  // -----------------------------
  const deleteBook = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await axios.delete(`${API_URL}/${id}`);

      setBooks((prevBooks) =>
        prevBooks.filter((book) => book._id !== id)
      );

      showToast("Book deleted successfully!");
    } catch (error) {
      console.log(error);
      setError("Failed to delete book");
    } finally {
      setDeletingId(null);
    }
  };

  // -----------------------------
  // LOADING
  // -----------------------------
  if (loading) {
    return (
      <div className="message">
        <h2>Loading books...</h2>
      </div>
    );
  }

  return (
    <div className="app">

      {/* Toast */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      <h1>📚 Book Tracker</h1>

      {/* Error */}
      {error && (
        <div className="error">
          {error}
          <button onClick={() => setError("")}>×</button>
        </div>
      )}

      {/* ---------------- ADD BOOK FORM ---------------- */}
      <div className="form-container">
        <h2>Add a Book</h2>

        <form onSubmit={addBook}>

          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="wishlist">Wishlist</option>
            <option value="reading">Reading</option>
            <option value="finished">Finished</option>
          </select>

          <button
            type="submit"
            disabled={adding}
          >
            {adding ? "Adding..." : "Add Book"}
          </button>

        </form>
      </div>

      {/* ---------------- BOOK LIST ---------------- */}
      <div className="book-container">

        {books.length === 0 ? (
          <p className="empty">
            No books found. Add your first book!
          </p>
        ) : (
          books.map((book) => (
            <div className="book-card" key={book._id}>

              <h2>{book.title}</h2>

              <p>
                <strong>Author:</strong> {book.author}
              </p>

              {/* Status */}
              <span className={`status ${book.status}`}>
                {book.status}
              </span>

              {/* Edit status */}
              <div className="actions">

                <select
                  value={book.status}
                  disabled={updatingId === book._id}
                  onChange={(event) =>
                    updateStatus(book._id, event.target.value)
                  }
                >
                  <option value="wishlist">Wishlist</option>
                  <option value="reading">Reading</option>
                  <option value="finished">Finished</option>
                </select>

                {/* Delete */}
                <button
                  className="delete-button"
                  disabled={deletingId === book._id}
                  onClick={() => deleteBook(book._id)}
                >
                  {deletingId === book._id
                    ? "Deleting..."
                    : "Delete"}
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default App;