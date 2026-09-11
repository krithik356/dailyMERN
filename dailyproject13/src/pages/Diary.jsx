import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Diary() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <div className="diary-page">

      <nav className="navbar">

        <h2>📖 My Diary</h2>

        <button onClick={handleLogout}>
          Logout
        </button>

      </nav>

      <main className="diary-content">

        <h1>Welcome to your Diary 👋</h1>

        <p>
          You are successfully logged in.
        </p>

        <div className="diary-card">
          <h2>Today's Entry</h2>

          <textarea
            placeholder="Write something..."
            rows="8"
          />

          <button>
            Save Entry
          </button>
        </div>

      </main>

    </div>
  );
}

export default Diary;