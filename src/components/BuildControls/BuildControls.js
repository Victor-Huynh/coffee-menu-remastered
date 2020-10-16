import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const customizableIngredients = [
    { label: 'Espresso', type: 'espresso', price: '1.00'},
    { label: 'Milk', type: 'milk', price: '0.25'},
    { label: 'Sugar', type: 'sugar', price: '0.10'}
]

const BuildControls = (props) => {

    return(
        <div className={classes.BuildControls}>
            <h2>Customize your drink</h2>
            {customizableIngredients.map(ingredient => (
                <BuildControl
                    label={ingredient.label}
                    key={ingredient.label}
                    added={() => props.addIngredient(ingredient.type)}
                    removed={() => props.subtractIngredient(ingredient.type)}
                />
            ))}
        </div>
    );
}

export default BuildControls;