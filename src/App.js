import React, { useContext, useState } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal";
import cartItemContext from "./context/cartitem-context";

function App() {

const [cart, setCart] = useState([]);
const [isCartOpen, setIsCartOpen] = useState(false);

const addHandler = (item, amount) => {
item.quantity = amount

setCart((prevState) => {
 return [item, ...prevState]
})
}

const cartHandler = () => {
  setIsCartOpen(true)
}

const closeModal = () => {
  setIsCartOpen(false)
}

  return (
    <React.Fragment>
      <cartItemContext.Provider value={{
        shoppingCart: cart,
        onAdd: addHandler
        }}>
      {isCartOpen && (<CartModal onClose={closeModal}/>)}
      <Header cartClicked={cartHandler}/>
      <Home/>
      </cartItemContext.Provider>    
    </React.Fragment>
  );
}

export default App;
