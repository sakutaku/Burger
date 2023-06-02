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

  const [price, setPrice] = useState([0]);
  const onDelete = (name: string, id: number) =>  {
      const ingredientsCopy = [...ingredients];
      const ingredientsObjCopy = {...ingredientsCopy[id]};

      if(ingredientsObjCopy.count > 0) {
          ingredientsObjCopy.count = ingredientsObjCopy.count - 1;
      }

      ingredientsCopy[id] = ingredientsObjCopy;

      INGREDIENTS.map(ingredient => {
          if(ingredient.name === name) {
              const priceCopy = [...price];
              priceCopy[0] = priceCopy[0] - ingredient.price;
              setPrice(priceCopy);
          }
      });
      setIngredients(ingredientsCopy);
  };

  const onItemClick = (name: string, id: number) => {
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


  const ingredientsList = ingredients.map((ingredient, index) => {
      return (
            <div>
                <div className="list">
                    <a href="#" onClick={() => onItemClick(ingredient.name, index)}>
                        <img alt={ingredient.name} src={INGREDIENTS[index].image} className="ingredients-img"/>
                    </a>
                    <span>{ingredient.name}</span>
                    <span>x{ingredient.count}</span>
                    <button type="button" className="delete-btn" onClick={() => onDelete(ingredient.name, index)}></button>
                </div>
            </div>
      )
  });


  const classesOfIngredient: React.ReactNode[] = [];

  ingredients.map(ingredient => {
      for(let i = 0; i < ingredient.count; i++) {
          classesOfIngredient.push(<div className={ingredient.name}></div>);
      }
  });

  return (
    <div className="container">
        <div className="App">
            <div className="ingredients-box">
                <h2 className="ingredients-title">Ingredients</h2>
                {ingredientsList}
            </div>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {classesOfIngredient.map(item => {
                    return item;
                })}
                <div className="BreadBottom"></div>
            </div>
        </div>
        <div className="price-count">Price: {price[0]}</div>
    </div>
  );
}

export default App;
