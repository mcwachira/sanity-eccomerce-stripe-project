import React , {useContext} from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import { StateContext } from '../context/stateContext'
import Cart from './Cart'


const Navbar = () => {

  const {quantity, showCart, setShowCart} = useContext(StateContext)
  return (
    <div className="navbar-container">
        <p className="logo">
            <Link href='/'>
                ShopHeadphones
            </Link>


        </p>

        <button type='button' className='cart-icon' onClick={() => setShowCart(!showCart)} >
    <AiOutlineShopping/>
    <span className='cart-item-qty'>{quantity}</span>
        </button>

{
        showCart && <Cart />
}
     
    </div>
  )
}

export default Navbar