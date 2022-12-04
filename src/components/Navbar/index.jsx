import React from "react";
import './Navbar.css'
import CartWidget from '../CartWidget'
import {NavLink} from 'react-router-dom'



const Navbar=()=>{


    return(
        <div>
            <ul>
                <li>
                    <NavLink className="active" to='/'>Home</NavLink>
                    </li>
                <li>
                    <NavLink to='/category/Guitarras'>Guitarra</NavLink>
                    </li>
                <li>
                    <NavLink to='/category/Baterias'>Baterias</NavLink>
                    </li>
                <li>
                    <NavLink to='/Cart'><CartWidget/></NavLink>
                    </li>
            </ul>
        </div>

    )
}
export default Navbar;