import React from 'react';
import classes from './BuildControl.module.css';
import Auxiliary from '../../../hoc/Auxiliary';

const BuildControl = (props) => (
    <Auxiliary>
        <table className={classes.BuildControl}>
            <tr className={classes.Left}><strong>{props.label}</strong></tr>
            <tr className={classes.Right}>
                <button onClick={props.added}>+</button>
                    {props.ingredientCounter}
                <button onClick={props.removed}>-</button>
            </tr>            
        </table>
    </Auxiliary>
);

export default BuildControl;