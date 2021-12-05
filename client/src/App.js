import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/" />
        <ProductDetail path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
