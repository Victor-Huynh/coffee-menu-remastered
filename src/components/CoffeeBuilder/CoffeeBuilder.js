import React, { Component } from 'react';
import BuildControls from '../BuildControls/BuildControls';

class CoffeeBuilder extends Component {
    state = {
        ingredients: {
            espresso: 0,
            sugar: 0,
            milk: 0
        }
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount + 1;
        const prevIngredients = {
            ...this.state.ingredients
        };
        prevIngredients[type] = newIngredientCount;
    }

    subtractIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount - 1;
        const prevIngredients = {
            ...this.state.ingredients
        };
        prevIngredients[type] = newIngredientCount;
    }

    render() {
        return (
            <>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    subtractIngredient={this.subtractIngredientHandler}>
                </BuildControls>
            </>
        );
    }
}

export default CoffeeBuilder;