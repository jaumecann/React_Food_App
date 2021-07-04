import React, { useState } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal";
import cartItemContext from "./context/cartitem-context";

function App() {

const [cart, setCart] = useState([]);

const addHandler = (item, amount) => {
item.quantity = amount

setCart((prevState) => {
  console.log(cart)
 return [item, ...prevState]
})
}

  return (
    <React.Fragment>
      <cartItemContext.Provider value={{
        shoppingCart: cart,
        onAdd: addHandler
        }}>
      <Header/>
      <Home/>
      </cartItemContext.Provider>    
    </React.Fragment>
  );
}

export default App;
