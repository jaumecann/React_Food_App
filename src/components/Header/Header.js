import React, { useContext, useEffect, useState } from 'react';
import cartItemContext from '../../context/cartitem-context';
import headerclass from './Header.module.css' 

const Header = () => {

const cartCtx = useContext(cartItemContext);

const [cartCount, setCartCount] = useState(0);

useEffect(()=>{

const addedUpItems = cartCtx.shoppingCart.reduce((a,b) => a + parseInt(b.quantity), 0);
setCartCount(addedUpItems);

},[cartCtx]);

    return (
      <header className={headerclass['principal']}>
          <h1>Minerva Meals</h1>
          <div className={headerclass.cart_area}>
            <p>Your cart<span>{cartCount}</span></p>
          </div>
      </header>  
    )
}

export default Header;