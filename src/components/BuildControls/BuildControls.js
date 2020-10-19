import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const customizableIngredients = [
    { label: 'Espresso', type: 'espresso', price: 1},
    { label: 'Milk', type: 'milk', price: 0.25},
    { label: 'Sugar', type: 'sugar', price: 0.10}
]

const BuildControls = (props) => {

    const customizableIngredientList = customizableIngredients.map(ingredient => (  
        <BuildControl
            label={ingredient.label}
            key={ingredient.label}
            added={() => props.addIngredient(ingredient.type, ingredient.price)}
            removed={() => props.subtractIngredient(ingredient.type, ingredient.price)}
        />
    ));

    return(
        <div className={classes.BuildControls}>
            {props.drinkSelected ? <h2>Customize your {props.drinkSelection}</h2> : <h2>Please select a drink!</h2>}
            {props.drinkSelected ? <h3>Your current subtotal is: ${props.subtotal.toFixed(2)}</h3> : null}
            {props.drinkSelected ? customizableIngredientList : null}
        </div>
    );
}

export default BuildControls;