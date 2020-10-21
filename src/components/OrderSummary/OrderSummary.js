import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const OrderSummary = (props) => {
    const ingredientDecomposition = Object.keys(props.ingredientList)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>{": " + props.ingredientList[igKey] + "\n"}
            </li>);
        });

    return (<Auxiliary>
        <div>Your <strong>{props.drinkSelected}</strong> is ready to be checked out!</div>
        <div>Ingredients added:</div>
        {ingredientDecomposition}
        <div>Subtotal: <strong>{"$" + (props.price).toFixed(2)}</strong></div>
        <div>Total: <strong>{"$" + (props.price * 1.13).toFixed(2)}</strong></div>
    </Auxiliary>);
}

export default OrderSummary;