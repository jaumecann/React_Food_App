import React, { useEffect, useReducer, useContext, useState } from 'react';
import cartItemContext from '../context/cartitem-context';
import classes from './ItemsModal.module.css'
import Button from './UI/Button';

// const totalsReducer = (state, action) => {
//  if(action.type === 'ADD'){
//      return {amount: state.amount +1}
//  }
//  if(action.type === 'REMOVE'){
//     return {amount: state.amount -1}
// }
// return {amount: state.amount}
// }

const ItemsModal = (props) => {

    // const [totals, dispatchTotals] = useReducer(totalsReducer, {amount: props.amount});

    const addHandler = () => {
      
        console.log(props.object.quantity)
        cartCtx.onAdd(props.object, 1);
        // dispatchTotals({type: 'ADD'});
        setTotals(props.object.quantity * props.price)
        props.total()
    };

    const removeHandler = () => {
        
        cartCtx.onAdd(props.object, -1)
        // dispatchTotals({type: 'REMOVE'})
        let test = props.object.quantity * props.price
        console.log(test)
        setTotals(props.object.quantity * props.price)
        props.total()
    }

    const cartCtx = useContext(cartItemContext)

    const [totals, setTotals] = useState(props.price);

    // useEffect(()=>{
    //     props.object.quantity = cartState.amount
    //     console.log(props.object)
    //     // console.log(cartState.amount)
    //     // cartCtx.onAdd(props.object, 0)
    // },[cartState, props]);

    // useEffect(()=>{
    //     cartCtx.onAdd(props.object, 0)
    // },[props.object, cartCtx])

    return(
        <div className={classes.item_container}>
            <div className={classes.item_data}>
                <p>{props.name}</p>
                <div className={classes.item_numbers}>
                    <p>{props.price}€</p>
                    <p className={classes.amount}>x {props.amount}</p>
                    <p>{totals}</p>
                </div>
            </div>

            <div>
                <Button onClick={addHandler}>+</Button>
                <Button onClick={removeHandler}>-</Button>
            </div>
        </div>
    )
}

export default ItemsModal