import classes from './CartModal.module.css'
import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './UI/Card';
import Button from './UI/Button';
import cartItemContext from '../context/cartitem-context';
import ItemsModal from './ItemsModal';


const ModalContent = (props) => {

    const cartCtx = useContext(cartItemContext);

    const [items, setItems] = useState([]);

    useEffect(()=>{

        setItems(cartCtx.shoppingCart)
        
        },[cartCtx, items]);

    return (
        <Card className={classes.modalCard}>
            {items.length !== 0 && 
                items.map(i => 
                <ItemsModal 
                    key={i.id}
                    name={i.Name}
                    price={i.Price}
                    amount={i.quantity}
                /> )}
            <Button onClick={props.onClose}>Close</Button>
        </Card>
    )
}

const ModalBackground = () => {
    return (
        <div className={classes.backdrop}></div>
    )
}


const CartModal = (props) => {    
return (
    <React.Fragment>
        {ReactDOM.createPortal(
        <ModalBackground/>,
        document.getElementById('background-root')
        )}
        {ReactDOM.createPortal(
        <ModalContent onClose={props.onClose}/>,
        document.getElementById('modal-root')
        )}
    </React.Fragment>
)
}

export default CartModal