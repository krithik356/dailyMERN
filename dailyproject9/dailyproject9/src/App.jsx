import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [wishlist, setWishlist] = useState([])
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <h1>Counter</h1>

      <div className="Counter">
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>

        <button onClick={() => setCount(count - 1)}>
          -1
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <p>{count}</p>
      </div>

      <div className="wishlist">
        <h1>Wishlist</h1>
        <input type="text" placeholder="Add to wishlist" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick = {() => {
          setWishlist([...wishlist, inputValue])
          setInputValue('');
        }}>Add</button>

        {wishlist.length > 0 && (
          <button onClick={() => setWishlist([])}>Clear Wishlist</button>
        )}
        {wishlist.length === 0 && (
          <p>Your wishlist is empty</p>
        )}
        {wishlist.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default App