import React from 'react';
import {useState} from "react";
import './App.css';
const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bakon', count: 0},
  ]);

  return (
    <div className="App">
    </div>
  );
}

export default App;
