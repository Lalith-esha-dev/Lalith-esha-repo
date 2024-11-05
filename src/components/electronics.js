import React, { useState } from 'react';
import './Electronics.css';

const Electronics = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80',
      description: 'Premium wireless earbuds with active noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Watch Series X',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80',
      description: 'Advanced smartwatch with health monitoring features'
    },
    {
      id: 3,
      name: '4K Drone Camera',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80',
      description: 'Professional drone with 4K camera and stabilization'
    },
    // Add more products as needed
  ]);

  const addToCart = (product) => {
    // Implement cart functionality
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="electronics-container">
      <h1>Latest Electronics & Gadgets</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
