import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css' // Import student-style CSS

const App = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cartItems, setCartItems] = useState([])

  // State for category filtering
  const [category, setCategory] = useState('all')

  // Toggle dark mode
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  // Handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={handleToggleDarkMode} />

      {/* Category Filter */}
      <div style={{ margin: '10px 0' }}>
        <label>Filter by Category: </label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>

      {/* Product List */}
      <ProductList category={category} addToCart={handleAddToCart} />

      {/* Cart */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
