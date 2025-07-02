import React from 'react';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import Counter from './components/Counter/Counter';
import GreetingClass from './components/Greeting/GreetingClass';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const dishes = [
    {
      id: 1,
      name: 'Plato 1',
      description: 'Este es el plato 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Plato 2',
      description: 'Este es el plato 2',
      price: 20,
    },
    {
      id: 3,
      name: 'Plato 3',
      description: 'Este es el plato 3',
      price: 15,
    },
  ];

  return (
    <div className="App">
      <h1>Ejercicios React Práctica</h1>

      <Greeting name="Euralio" />
      <GreetingClass name="Euralio" />
      <Counter initialValue={5} step={2} />

      <Header />
      <Home dishes={dishes} />
    </div>
  );
}

export default App;
