import React from 'react';
import headerclass from './Header.module.css' 

const Header = () => {
    return (
      <header className={headerclass['principal']}>
          <h1>Minerva Meals</h1>
      </header>  
    )
}

export default Header;