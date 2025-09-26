import React from 'react';
import './DailyCart.css';

export default function DailyCart() {
  return (
    <div className="container daily-cart">
      <h2 className="title">🛒 Daily Cart</h2>
      <p>Manage your daily stock of raw materials and view deals from nearby vendors.</p>

      <div className="cart-items">
        <div className="cart-item">
          <h5>Tomatoes</h5>
          <p>Price: ₹20/kg</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div className="cart-item">
          <h5>Onions</h5>
          <p>Price: ₹25/kg</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div className="cart-item">
          <h5>Potatoes</h5>
          <p>Price: ₹18/kg</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
