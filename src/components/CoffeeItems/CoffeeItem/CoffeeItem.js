import React from 'react';
import classes from './CoffeeItem.module.css';

const CoffeeItem = (props) => (
    <div className={classes.CoffeeItem}
        onClick={props.drinkSelected}>
            <h2>{props.label}</h2>
            <p>${props.price}</p>
            <p>Description: <i>{props.description}</i></p>
            <br/>
    </div>
);

export default CoffeeItem;