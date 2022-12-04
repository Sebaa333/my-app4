import React,{useState} from "react";
import './ItemDetail.css'
import ItemCount from "../ItemCount";
import {Link} from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";


const ItemDetail=({ data })=>{

    const[goToCart,setgoToCart]=useState(false)
    const {addProduct}=useCartContext



    const onAdd = (quantity)=>{
        setgoToCart(true)
        addProduct(data,quantity)
    }

    return(
    <div className="container">
        <div className="detail">
            <img className='detail_image' src={data.image} alt="" />
            <div>
                <h1>{data.title}</h1>
                {
                    goToCart
                    ? <Link to='/cart'>Terminar Compra</Link>
                    :<ItemCount initial={3} stock={5} onAdd={onAdd}/>
                }
            </div>

        </div>
    </div>
    )
}
export default ItemDetail