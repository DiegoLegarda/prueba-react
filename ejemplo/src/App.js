import React from 'react';
import Product from './Product';
import Counter from './Counter';
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Product listart</h1>
      <Product name="Smartphone" description="This is a smartphone" precio="1000"/>
      <Product name="Smartwatch" description="This is a smartwatch" precio="500"/>
      <Product name="Laptop" description="This is a laptop" precio="2000"/>
      <Counter/>
    </div>
  );
}

export default App;
