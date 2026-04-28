import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import Navbar from '../Navbar';
import { CartContext } from '../../context/CartContext';
import './index.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
  const getProductDetails = async() => {
    const url = `https://api.escuelajs.co/api/v1/products/${id}`
    const response = await fetch(url)
    const data = await response.json()
    setProduct(data)

  }
  getProductDetails()
  }, [id]);

  if (!product) return <div className="loader">Loading...</div>;

  return (
    <div className='productDetails-container'>
          <Navbar />
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="btn-back">← Back</button>
      <div className="details-container">
        <img 
          className="details-image" 
          src={product.images[0]} 
          alt={product.title} 
        />
        <div className="details-info">
          <h2 className="details-title">{product.title}</h2>
          <span className="category-badge">{product.category.name}</span>
          <p className="details-description">{product.description}</p>
          <p className="details-price">₹ {product.price}</p>
          <button onClick={() => addToCart(product)} className="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;