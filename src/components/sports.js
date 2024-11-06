import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  // Add more products to create multiple categories
  const fitnessEquipment = [
    {
      id: 5,
      name: 'Yoga Mat',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
      description: 'Premium non-slip yoga mat'
    },
    {
      id: 6,
      name: 'Dumbbells Set',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500',
      description: 'Adjustable weight dumbbells'
    },
    {
        id: 7,
        name: 'Treadmill',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?w=500',
        description: 'Treadmill for home use'
      },
    // Add more fitness products...
  ];

  const outdoorEquipment = [
    {
      id: 8,
      name: 'Camping Tent',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      description: '4-person waterproof tent'
    },
    {
      id: 9,
      name: 'Hiking Backpack',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500',
      description: 'Durable 40L hiking backpack'
    },
    {
        id: 10,
        name: 'Trekking Shoes',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
        description: 'Trekking shoes for hiking'
      },
    // Add more outdoor products...
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (e, item) => {
    e.stopPropagation(); // Prevent modal from opening when clicking the button
    // Add your cart logic here
    console.log(`Added ${item.name} to cart`);
  };

  const ProductModal = ({ product, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
        <p className="modal-description">{product.description}</p>
        <p className="modal-price">${product.price}</p>
        <button 
          className="add-to-cart" 
          onClick={(e) => handleAddToCart(e, product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  const ProductGrid = ({ items }) => (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      containerClass="carousel-container"
    >
      {items.map((item) => (
        <div 
          key={item.id} 
          className="product-card"
          onClick={() => setSelectedProduct(item)}
        >
          <img src={item.image} alt={item.name} className="product-image" />
          <div className="product-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
            <button 
              className="add-to-cart"
              onClick={(e) => handleAddToCart(e, item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );

  return (
    <div className="sports-container">
      <section>
        <h2>Sports Equipment</h2>
        <ProductGrid items={sportsEquipment} />
      </section>

      <section>
        <h2>Fitness Equipment</h2>
        <ProductGrid items={fitnessEquipment} />
      </section>

      <section>
        <h2>Outdoor Equipment</h2>
        <ProductGrid items={outdoorEquipment} />
      </section>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default Sports;