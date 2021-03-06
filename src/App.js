import React, { useContext, useState } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal";
import cartItemContext from "./context/cartitem-context";

function App() {

const [cart, setCart] = useState([]);
const [isCartOpen, setIsCartOpen] = useState(false);

const addHandler = (item, amount) => {

  // console.log(item.quantity)
  // console.log(amount)

item.quantity === undefined ? item.quantity = parseInt(amount) : item.quantity = item.quantity + parseInt(amount)



  setCart((prevState) => {
  const newId = item.id 
  const findIndex = prevState.indexOf(prevState.find(i =>i.id === newId));
  const newState = prevState
 
 if (findIndex === -1){
  return [item, ...prevState]
 } else {
   newState[findIndex].quantity = item.quantity;
   return [...newState]
 }
 
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
