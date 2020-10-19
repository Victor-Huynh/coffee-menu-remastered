import React from 'react';
import CoffeeItem from './CoffeeItem/CoffeeItem';

const CoffeeItemList = [
    {label: "Americano", name: "americano", price: 3.50, description: "1 shot espresso, 6oz hot water"},
    {label: "Cappuccino", name: "cappuccino", price: 4.00, description: "1:1:1 ratio of espresso to milk to foam"},
    {label: "Espresso", name: "espresso", price: 2.25, description: "a single 2oz shot of very strong coffee"}
];

const CoffeeItems = (props) => (
    <div>
        {CoffeeItemList.map((coffee) => (
            <CoffeeItem 
                label={coffee.label}
                key={coffee.name}
                price={coffee.price.toFixed(2)}
                description={coffee.description}
                drinkSelected={() => props.drinkSelectedHandler(coffee.label, coffee.price)}/>
        ))}
    </div>
);

export default CoffeeItems;