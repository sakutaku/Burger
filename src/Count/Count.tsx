import React from 'react';

interface ICount {
    price: number;
}
const Count: React.FC<ICount> = ({price}) => {
    return (
        <div className="price-count">Price: {price} kgs</div>
    );
};

export default Count;