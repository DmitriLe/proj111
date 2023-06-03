import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order'
import Items from "./Items"

const showOrders = (props) => {
  let summa =0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='summa'>Сумма: {summa}р.</p>
  </div>)
}

const showNothing = () => {
  return(<div className='empty'>
    <h2>Товаров нет!</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <span className='logo'><a href=''>exeBooks</a></span>
        <ul className='nav'>
          
        </ul>  
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
        <div className='presentation'></div>
        
    </header>  
  )
}
