import React from 'react'
import ProductCard from './ProductCard'

// Sample product data
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Carrot', price: '$0.75', category: 'Vegetables', inStock: true }
]

const ProductList = ({ category, addToCart }) => {
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category)

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p> // <-- Shows message if no products match filter
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  )
}

export default ProductList
