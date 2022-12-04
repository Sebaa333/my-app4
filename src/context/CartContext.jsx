import React, { useState,useContext } from "react";


const CartContext=React.createContext([])

 export const useCartContext=()=>useContext(CartContext)



const CartProvider=({children})=>{
    const [cart,setcart]=useState([])

    const isInCart =(id)=> cart.find(product=> product.id===id)?true:false

    const removeProduct=(id)=>setcart(cart.filter(product=>product.id !==  id))

    const addProduct=(item,newQuantity)=>{
        const newCart = cart.filter(prod=>prod.id!==item.id)
        newCart.push({...item,quantity:newQuantity})
        setcart(newCart)
    }
    console.log('carrito', cart)


    const limpiarcarrito=()=>setcart([])








    return(
        <CartContext.Provider value={{
            isInCart,
            removeProduct,
            addProduct,
            limpiarcarrito,
            
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider