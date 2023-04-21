import React from 'react'
import Burgers from './Burgers'
import AddBurger from './AddBurger';

const Menu = () => {
  return (
    <div>
        <Burgers/>
        <div className="row my-3">
                <h2>Add new Burger</h2>
                <AddBurger/>
        </div>
    </div>
  )
}

export default Menu