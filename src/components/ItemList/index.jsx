import Item from "../Item";
import React from "react";

const ItemList=({data =[]})=>{
    return(
        data.map(guita => <Item key={guita.id} info={guita}  />)
        )
}
export default ItemList