import React from 'react';
import Product from './utils/Product';
import Counter from './utils/Counter';
import Formulario from './components/formulario';
import Calculadora from './utils/Calculadora';
import './App.css';

const calculadora = new Calculadora();
const a=10;
const b=3;

function App() {
  return (
    <div className="App">
      <h1>Product listart</h1>
      <Product name="Smartphone" description="This is a smartphone" precio="1000"/>
      <Product name="Smartwatch" description="This is a smartwatch" precio="500"/>
      <Product name="Laptop" description="This is a laptop" precio="2000"/>
      <Counter/>
      <Formulario/>
      <p>suma de {a} y {b} es {calculadora.suma(a,b)}</p>
      <p>Resta de {a} y {b} es {calculadora.resta(a,b)}</p>
      <p>Multiplicación de {a} y {b} es {calculadora.multiplicacion(a,b)}</p>
      <p>División de {a} y {b} es {calculadora.division(a,b)}</p>
    </div>
  );
}

export default App;
