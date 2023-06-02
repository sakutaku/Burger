import React from 'react';

interface Ingredient {
    name: string,
    count: number,
    id: string,
}

interface IngredientConst {
    name: string,
    price: number,
    image: string,
}

interface IIngredients {
    ingredients: Ingredient[];
    onIngredientClick: (name: string, index: number) => void;
    INGREDIENTS: IngredientConst[];
    onIngredientDelete: (name: string, index: number) => void;
}

const Ingredients: React.FC<IIngredients> = ({ingredients, onIngredientClick, INGREDIENTS, onIngredientDelete}) => {
    const ingredientsList = ingredients.map((ingredient, index) => {
        return (
            <div key={ingredient.id}>
                <div className="list">
                    <a href="#" onClick={() => onIngredientClick(ingredient.name, index)}>
                        <img alt={ingredient.name} src={INGREDIENTS[index].image} className="ingredients-img"/>
                    </a>
                    <span>{ingredient.name}</span>
                    <span>x{ingredient.count}</span>
                    <button type="button" className="delete-btn" onClick={() => onIngredientDelete(ingredient.name, index)}></button>
                </div>
            </div>
        )
    });

    return (
        <div className="ingredients-box">
            <h2 className="ingredients-title">Ingredients</h2>
            {ingredientsList}
        </div>
    );
};

export default Ingredients;