import React, { useRef, useState } from 'react';
import classes from './SelectAmount.module.css'

const SelectAmount = (props) => {

    const amountInputRef = useRef();

    const amountChangeHandler = () => {
        props.amount(amountInputRef.current.value)
    }

    return (
        <div>
       <label className={classes.label}>{props.children}</label>
        <input className={classes.amountbox} 
        type="number" 
        id="quantity" 
        name="quantity" 
        min="1" 
        max="5" 
        ref={amountInputRef}
        defaultValue ="1"
        onChange={amountChangeHandler}
        ></input>
        </div>
    )
}

export default SelectAmount;