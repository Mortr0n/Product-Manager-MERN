import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Main default path="/products/" />
        <ProductDetail path="/products/:id" />
        <EditProduct path="/products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
