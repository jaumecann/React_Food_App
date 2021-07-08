import React from 'react';
import classes from './ItemsModal.module.css'

const ItemsModal = (props) => {
    return(
        <div className={classes.item_container}>
            <div className={classes.item_data}>
                <p>{props.name}</p>
                <div className={classes.item_numbers}>
                    <p>{props.price}€</p>
                    <p className={classes.amount}>x {props.amount}</p>
                </div>
            </div>

            <div>
                <p>- and +</p>
            </div>
        </div>
    )
}

export default ItemsModal