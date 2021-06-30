import React from 'react';
import Card from '../UI/Card.js'
import classes from './Home.module.css'

const MENU_ITEMS = [
  {
    Name: 'Pellets',
    Desc: 'An everyday classic',
    Price: 23
  },
  {
    Name: 'Dry bread',
    Desc: 'Straight out of under the bench',
    Price: 11
  },
  {
    Name: 'Rabbit',
    Desc: 'Can drive you crazy',
    Price: 34
  },
  {
    Name: 'Dental stick',
    Desc: 'Show off your chewie power',
    Price: 16
  }
]

const Home = () => {
    return (
      <div>
        <Card className={classes.intro}>
        <h3>Delicious delicatessen</h3>
        <p>Choose your favourite meal among the most exquisite selection of refinement and finesse and enjoy it wherever you want</p>
        <p>All our meal are cooked with dubious quality ingredients, just-in-time and they are a real treasure</p>
        </Card>

        <Card className={classes['cart-list']}>
        sss
        </Card>  
      </div>  
    )
}

export default Home;