import React from 'react';
import {nanoid} from "nanoid";

interface IBurger {
    classesOfIngredient: React.ReactNode[];
}

const Burger:React.FC<IBurger> = ({classesOfIngredient}) => {
    return (
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
    );
};

export default Burger;