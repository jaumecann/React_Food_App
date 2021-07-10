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
    const [totals, setTotals] = useState(0);

    useEffect(()=>{

        setItems(cartCtx.shoppingCart)
        
        },[cartCtx, items]);

    const onPriceChange = () => {
            // console.log(data);
            const recap = items.reduce((a,b) => a + (b.Price * b.quantity), 0)
            setTotals(recap)
        }


    return (
        <Card className={classes.modalCard}>
            {items.length !== 0 && 
                items.map(i => i.quantity > 0 &&
                <ItemsModal 
                    key={i.id}
                    name={i.Name}
                    price={i.Price}
                    amount={i.quantity}
                    object={i}
                    total={onPriceChange}
                /> )}
            <div className={classes.totals}>
                <p>Total Amount</p><p>{totals}</p>
            </div>
            <Button onClick={props.onOrder}>Order</Button>
            <Button className={classes.close_but} onClick={props.onClose}>Close</Button>
           
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