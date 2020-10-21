import React, { Component } from 'react';
import BuildControls from '../BuildControls/BuildControls';
import Auxiliary from '../../hoc/Auxiliary';
import CoffeeItems from '../CoffeeItems/CoffeeItems';
import OrderSummary from '../OrderSummary/OrderSummary';
import Modal from '../UI/Modal/Modal';

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
        orderClicked: false,
    }

    addIngredientHandler = (type, price) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        };
        newIngredients[type] = newIngredientCount;
        console.log(newIngredientCount);

        const oldSubtotal = this.state.subtotal;
        const updatedSubtotal = oldSubtotal + price;
        this.setState({
            subtotal: updatedSubtotal,
            ingredients: newIngredients
        });
    }

    subtractIngredientHandler = (type, price) => {
        const oldIngredientCount = this.state.ingredients[type];
        if (oldIngredientCount <= 0) {
            return;
        } else {
            const newIngredientCount = oldIngredientCount - 1;
            const newIngredients = {
                ...this.state.ingredients
            };
            newIngredients[type] = newIngredientCount;
            console.log(newIngredientCount);

            const oldSubtotal = this.state.subtotal;
            const updatedSubtotal = oldSubtotal - price;
            this.setState({
                subtotal: updatedSubtotal,
                ingredients: newIngredients
            });
        }
    }

    drinkSelectedHandler = (label, price) => {
        console.log(label);
        const resetIngredients = {
            espresso: 0,
            sugar: 0,
            milk: 0
        }

        this.setState({
            drinkSelection: label,
            drinkSelected: true,
            subtotal: price,
            ingredients: resetIngredients
        });
    }

    orderSummaryHandler = () => {
        this.setState({
            orderClicked: true
        });
        console.log(this.state.orderClicked);
    }

    purchaseClosedHandler = () => {
        this.setState({
            orderClicked: false
        });
    }

    render() {

        const orderSummary = <OrderSummary
            price={this.state.subtotal}
            orderClicked={this.state.orderClicked}
            ingredientList={this.state.ingredients}
        />;

        return (
            <Auxiliary>
                <CoffeeItems 
                    drinkSelectedHandler={this.drinkSelectedHandler}
                    drinkSelected={this.state.drinkSelected}/>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    subtractIngredient={this.subtractIngredientHandler}
                    ingredientList={this.state.ingredients}
                    drinkSelection={this.state.drinkSelection}
                    drinkSelected={this.state.drinkSelected}
                    subtotal={this.state.subtotal}
                    displayOrderSummary={this.orderSummaryHandler}>
                </BuildControls>
                <Modal show={this.state.orderClicked} closeModal={this.purchaseClosedHandler}>
                    {orderSummary}
                </Modal>
            </Auxiliary>
        );
    }
}

export default CoffeeBuilder;