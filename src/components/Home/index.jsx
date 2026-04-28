import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import Navbar from '../Navbar';
import { CartContext } from '../../context/CartContext';
import './index.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getData = async () => {
      const url = "https://api.escuelajs.co/api/v1/products"
      const response = await fetch(url)
      const data = await response.json()
     
      setLoading(false)
      setProducts(data)

    }
    getData()
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="loader">Loading products...</div>;

  return (
    <div>
      <Navbar />
    <div className="home-container">
      <div className="search-bar">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search products..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              className="product-image" 
              src={product.images[0]} 
              alt={product.title} 
            />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">₹ {product.price}</p>
              <div className="card-actions">
                <Link to={`/product/${product.id}`} className="view-btn">View</Link>
                <button onClick={() => addToCart(product)} className="cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;