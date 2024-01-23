// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Assuming you have an array of products with unique IDs
  const products = [
    { id: 1, name: 'Book', description: 'MCA 3rd Sem Book' },
    { id: 2, name: 'Mobile', description: 'MI K20 pro ' },
    { id: 3, name: 'Book', description: 'MCA 3rd Sem Book' },
    { id: 4, name: 'Mobile', description: 'MI K20 pro ' }
    
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Welcome to the E-Commerce Store</h1>
      <p>Explore our wide range of products below:</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src="product-image-url" alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {/* Link to the product detail page */}
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
