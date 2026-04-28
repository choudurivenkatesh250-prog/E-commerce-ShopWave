import React, { useContext } from 'react';
import { Link } from 'react-router';
import { CartContext } from '../../context/CartContext';
import './index.css';
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
      <div className='logo-name'>
        <img src='https://images.scalebranding.com/shop-wave-logo-d31a0981-a292-443e-beeb-8f0657f677d0.jpg'height={60}width={60}/>
        <h3>ShopWave</h3>
        
        </div>
        </Link>
      <div className="nav-links">
        <Link to="/cart" className="cart-link">
         <MdOutlineShoppingCart  className='cart-icon'/>
 <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;