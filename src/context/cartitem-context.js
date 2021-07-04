import React from 'react';

const cartItemContext = React.createContext({
  shoppingCart: {},
  onAdd: (item, amount) => {}
})

export default cartItemContext;