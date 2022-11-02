import {createContext, useState, useEffect, useContext} from 'react'
import { toast } from 'react-hot-toast'

export const StateContext = createContext({

    setShowCart:() => {},
    setCartItems: () => { }
})



export const StateProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [quantity, setQuantity] = useState(0)

    let foundProduct;
    let index;


//add to cart  function

const onAdd = (product, quantity) => {
    //check to see if product already exist in cart
    const checkProductInCart =cartItems.find((item) => item._id === product._id);

    //get new total price with the change in quantity
    setTotalPrice((previousTotalPrice) => previousTotalPrice + (product.price * quantity))

    //get new total quantity
    setTotalQuantities((previousTotalQuantities) => previousTotalQuantities + quantity)

    if(checkProductInCart) {
    const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
            ...cartProduct,
            quantity:cartProduct.quantity + quantity

        }
    })

    //updating the cart items value
    setCartItems(updatedCartItems)


}else{
    //    setCartItems((previousCartItems) => {
    //   return {
    //     ...previousCartItems,
    //     product:product
    //   }
    //    })

    setCartItems([...cartItems, {...product}])
    
}
    toast.success(`${quantity} ${product.name} added to the cart`)




}

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        // console.log(foundProduct)
        const newCartItems = cartItems.filter((item) => item._id !== product._id)
        setTotalPrice((previousTotalPrice) => previousTotalPrice - foundProduct.price)
        setTotalQuantities((previousTotalQuantities) => previousTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)

    }



const cartToggleQuantity = (product, value) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    // console.log(foundProduct)
    // index = cartItems.findIndex((product) =>product._id === id )
    const newCartItems = cartItems.filter ((item) => item._id !== product._id )

    if(foundProduct){
        if (value === 'inc') {

            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])

            setTotalPrice((previousTotalPrice) => previousTotalPrice + foundProduct.price)
            setTotalQuantities((previousTotalQuantities) => previousTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])

                setTotalPrice((previousTotalPrice) => previousTotalPrice - foundProduct.price)
                setTotalQuantities((previousTotalQuantities) => previousTotalQuantities - 1)
            }

        }
    }
  
}

    //increase cartQuantity

    const increaseQuantity = () => (
        setQuantity((prevQty) => {
           return prevQty +1
        })
    )

    //decrease quantity
    const decreaseQuantity = () => {
        setQuantity((prevQty) => {
            if(prevQty -1 < 1) return 1

            return prevQty-1;
        })
    }

    const value ={

        showCart,
        setShowCart,
        quantity,
        totalPrice,
        totalQuantities,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        cartToggleQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
    }
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}




export const useStateContext = () => useContext(StateContext)