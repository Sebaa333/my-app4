import './Item.css'
import{Link} from 'react-router-dom'

import React from 'react'


const Item=({info})=>{
    

    return(
        <Link to={`/Detalle/${info.id}`} className='Guita'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>


        </Link>

    )
}
export default Item