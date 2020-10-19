import React, { Component } from 'react';
import BuildControls from '../BuildControls/BuildControls';
import Auxiliary from '../../hoc/Auxiliary';
import CoffeeItems from '../CoffeeItems/CoffeeItems';

class CoffeeBuilder extends Component {
    state = {
        ingredients: {
            espresso: 0,
            sugar: 0,
            milk: 0
        },
        drinkSelection: null,
        drinkSelected: false,
        subtotal: 0,
    }

    addIngredientHandler = (type, price) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount + 1;
        const prevIngredients = {
            ...this.state.ingredients
        };
        prevIngredients[type] = newIngredientCount;
        console.log(newIngredientCount);

        const oldSubtotal = this.state.subtotal;
        const updatedSubtotal = oldSubtotal + price;
        this.setState(
            {subtotal: updatedSubtotal}
        );
    }

    subtractIngredientHandler = (type, price) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount - 1;
        const prevIngredients = {
            ...this.state.ingredients
        };
        prevIngredients[type] = newIngredientCount;
        console.log(newIngredientCount);

        const oldSubtotal = this.state.subtotal;
        const updatedSubtotal = oldSubtotal - price;
        this.setState(
            {subtotal: updatedSubtotal}
        );
    }

    drinkSelectedHandler = (label, price) => {
        console.log(label);
        this.setState({
            drinkSelection: label,
            drinkSelected: true,
            subtotal: price
        });
    }

    render() {
        return (
            <Auxiliary>
                <CoffeeItems 
                    drinkSelectedHandler={this.drinkSelectedHandler}
                    drinkSelected={this.state.drinkSelected}/>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    subtractIngredient={this.subtractIngredientHandler}
                    drinkSelection={this.state.drinkSelection}
                    drinkSelected={this.state.drinkSelected}
                    subtotal={this.state.subtotal}>
                </BuildControls>
            </Auxiliary>
        );
    }
}

export default CoffeeBuilder;