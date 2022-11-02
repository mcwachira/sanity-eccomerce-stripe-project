import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import {useRouter} from 'next/router'
import { StateContext } from '../context/stateContext'
import { runFireworks } from '../lib/utils'
 
const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useContext(StateContext)

    const [order, setOrder] = useState(null)

    useEffect(() => {
        localStorage.clear(),
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    }, [])
  return (
   <div className="success-wrapper">
    <div className="success">
        <p className="icon">
            <BsBagCheckFill/>
        </p>

        <h2>
            Thank you for your order
        </h2>
        <p className="email-msg">
            Check your email Inbox for receipt
        </p>

        <p className="description">
            If you have question , please email

            <a href="mailto:order@examples.com" className="email">
                Order@example.com
            </a>
        </p>

        <Link href='/'>
            <button className="btn" type='button' width='300px'>
                Continue shopping
            </button>
        </Link>
    </div>
   </div>
  )
}

export default Success