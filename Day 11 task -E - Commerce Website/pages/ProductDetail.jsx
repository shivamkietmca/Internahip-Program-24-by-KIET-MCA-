// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  // Use useParams hook to get the product ID from the URL
  const { id } = useParams();

  // Fetch the product details based on the ID (you'll need to implement this)
  const productDetails = {
    id: 1,
    name: 'Book',
    description: '1-MCA 3rd Sem Book',
    price: '1-Rupee-199',

    id: 2,
    name: 'Mobile',
    description: '2-MI K20 Pro',
    price: '2-Rupee-24999',

    id: 3,
    name: 'Book',
    description: '3-MCA 3rd Sem Book',
    price: '3-Rupee-199',

    id: 4,
    name: 'Mobile',
    description: '4-MI K20 Pro',
    price: '4-Rupee-24999'

  };

  return (
    <div>
      <h2>{productDetails.name}</h2>
      <p>{productDetails.description}</p>
      <p>Price: {productDetails.price}</p>
      {/* Add more product details and features as needed */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
