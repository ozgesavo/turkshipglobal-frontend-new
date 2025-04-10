import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';

// API URL from environment variable
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>TurkShipGlobal Dropshipping Platform</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/suppliers">Suppliers</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/orders">Orders</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
        
        <footer>
          <p>&copy; 2025 TurkShipGlobal. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <div className="page">
      <h2>Welcome to TurkShipGlobal</h2>
      <p>Your complete dropshipping solution for Turkish products.</p>
      <div className="status-card">
        <h3>Backend Status</h3>
        <p>Backend API: <a href="https://turkshipglobal-backend3.onrender.com" target="_blank" rel="noopener noreferrer">
          https://turkshipglobal-backend3.onrender.com
        </a></p>
        <p>API Endpoints:</p>
        <ul>
          <li>Suppliers: /api/suppliers</li>
          <li>Products: /api/products</li>
          <li>Orders: /api/orders</li>
        </ul>
      </div>
    </div>
  );
}

// Suppliers Component
function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/suppliers`);
        setSuppliers([response.data]); // Assuming response.data is the suppliers data
        setLoading(false);
      } catch (err) {
        setError('Error fetching suppliers. API might be in sleep mode or not fully implemented yet.');
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, []);

  return (
    <div className="page">
      <h2>Suppliers</h2>
      {loading ? (
        <p>Loading suppliers...</p>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <p>Note: The backend is using Render's free tier which may go to sleep after inactivity.</p>
        </div>
      ) : (
        <div className="data-display">
          {suppliers.map((supplier, index) => (
            <div key={index} className="data-card">
              <pre>{JSON.stringify(supplier, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Products Component
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/products`);
        setProducts([response.data]); // Assuming response.data is the products data
        setLoading(false);
      } catch (err) {
        setError('Error fetching products. API might be in sleep mode or not fully implemented yet.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="page">
      <h2>Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <p>Note: The backend is using Render's free tier which may go to sleep after inactivity.</p>
        </div>
      ) : (
        <div className="data-display">
          {products.map((product, index) => (
            <div key={index} className="data-card">
              <pre>{JSON.stringify(product, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Orders Component
function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/orders`);
        setOrders([response.data]); // Assuming response.data is the orders data
        setLoading(false);
      } catch (err) {
        setError('Error fetching orders. API might be in sleep mode or not fully implemented yet.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="page">
      <h2>Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <p>Note: The backend is using Render's free tier which may go to sleep after inactivity.</p>
        </div>
      ) : (
        <div className="data-display">
          {orders.map((order, index) => (
            <div key={index} className="data-card">
              <pre>{JSON.stringify(order, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
