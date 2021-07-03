import classes from './CartModal.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './UI/Card';


const ModalContent = (props) => {
    return (
        <Card>
            Modal Content
        </Card>
    )
}

const ModalBackground = () => {
    return (
        <div className={classes.backdrop}></div>
    )
}


const CartModal = () => {    
return (
    <React.Fragment>
        {ReactDOM.createPortal(
        <ModalBackground/>,
        document.getElementById('background-root')
        )}
        {ReactDOM.createPortal(
        <ModalContent/>,
        document.getElementById('modal-root')
        )}
    </React.Fragment>
)
}

export default CartModal