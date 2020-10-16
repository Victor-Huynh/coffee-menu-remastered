import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        {props.label}
        <button onClick={props.added}>More</button>
        <button onClick={props.removed}>Less</button>
    </div>
);

export default BuildControl;