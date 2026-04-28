import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../Navbar';
import { CartContext } from '../../context/CartContext';
import './index.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(CartContext);
  const [checkoutStatus, setCheckoutStatus] = useState(false);

  const handleCheckout = () => {
    setCheckoutStatus(true);
    setTimeout(() => {
      clearCart();
      setCheckoutStatus(false);
      alert("Order placed successfully! Thank you for shopping.");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <Link to="/" className="btn-shop">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
          <Navbar />
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img 
                className="cart-item-image" 
                src={item.images[0]} 
                alt={item.title} 
              />
              <div className="item-details">
                <h4 className="item-title">{item.title}</h4>
                <p className="item-price">${item.price} each</p>
              </div>
              <div className="item-controls">
                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <p className="item-total">${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="btn-danger">Remove</button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-total">
            <span>Total:</span>
            <strong>₹ {cartTotal}</strong>
          </div>
          <button 
            className="btn-success" 
            onClick={handleCheckout} 
            disabled={checkoutStatus}
          >
            {checkoutStatus ? 'Processing...' : 'Proceed to Checkout'}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;