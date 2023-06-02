import React from 'react';
import {useState} from "react";
import {nanoid} from "nanoid";
import './App.css';
import MeatImage from './assets/meat.png';
import CheeseImage from './assets/cheese.png';
import SaladImage from './assets/salad.png';
import BakonImage from './assets/bakon.png';
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import Count from "./Count/Count";
import Ingredients from "./Ingredients/Ingredients";
import Burger from "./Burger/Burger";

interface Ingredient {
    name: string,
    price: number,
    image: string,
}

const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: MeatImage},
    {name: 'Cheese', price: 50, image: CheeseImage},
    {name: 'Salad', price: 10, image: SaladImage},
    {name: 'Bacon', price: 60, image: BakonImage},
];
const App = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: nanoid()},
    {name: 'Cheese', count: 0, id: nanoid()},
    {name: 'Salad', count: 0, id: nanoid()},
    {name: 'Bacon', count: 0, id: nanoid()},
  ]);

  const [price, setPrice] = useState([30]);

  const onIngredientDelete = (name: string, id: number) =>  {
      const priceCopy = [...price];

      INGREDIENTS.map(ingredient => {
          if(name === ingredient.name) {

              if(priceCopy[0] > 30) {
                  priceCopy[0] = priceCopy[0] - ingredient.price;
              } else {
                  priceCopy[0] = 30;
              }
          }
      });

      const ingredientsCopy = [...ingredients];
      const ingredientsObjCopy = {...ingredientsCopy[id]};

      if(ingredientsObjCopy.count > 0) {
          ingredientsObjCopy.count = ingredientsObjCopy.count - 1;
      }
      ingredientsCopy[id] = ingredientsObjCopy;
      setPrice(priceCopy);
      setIngredients(ingredientsCopy);
  };

  const onIngredientClick = (name: string, id: number) => {
      INGREDIENTS.map(ingredient => {
         if(ingredient.name === name) {
             const priceCopy = [...price];
             priceCopy[0] = priceCopy[0] + ingredient.price;
             setPrice(priceCopy);

             const ingredientsCopy = [...ingredients];
             const ingredientsObjCopy = {...ingredientsCopy[id]};
             ingredientsObjCopy.count = ingredientsObjCopy.count + 1;
             ingredientsCopy[id] = ingredientsObjCopy;
             setIngredients(ingredientsCopy);
         }
      });
    };

  const classesOfIngredient: React.ReactNode[] = [];

  ingredients.map(ingredient => {
      for(let i = 0; i < ingredient.count; i++) {
          classesOfIngredient.push(<div className={ingredient.name}></div>);
      }
  });

  return (
    <div className="container">
        <div className="App">
            <Ingredients ingredients={ingredients} onIngredientClick={onIngredientClick} INGREDIENTS={INGREDIENTS} onIngredientDelete={onIngredientDelete}/>
            <Burger classesOfIngredient={classesOfIngredient}/>
        </div>
        <Count price={price[0]}/>
    </div>
  );
}
export default App;
