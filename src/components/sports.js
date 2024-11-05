import React from 'react';
import './Sports.css';

function Sports() {
  const sportsEquipment = [
    {
      id: 1,
      name: 'Basketball',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500',
      description: 'Professional indoor/outdoor basketball'
    },
    {
      id: 2,
      name: 'Soccer Ball',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500',
      description: 'FIFA approved match ball'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      description: 'Lightweight performance running shoes'
    },
    // Add more products as needed
  ];

  return (
    <div className="sports-container">
      <h1>Sports Equipment</h1>
      <div className="products-grid">
        {sportsEquipment.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;