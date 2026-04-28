import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import './App.css';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          
          <main className="main-content">
            <Routes>
              <Route path='/' element={<LoginForm/>}/>
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/product/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;