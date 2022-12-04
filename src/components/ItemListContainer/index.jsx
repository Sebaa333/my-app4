import React,{useState, useEffect} from "react";
import Title from "../Title";
import ItemList from "../ItemList";
import { useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';





const ItemListContainer=()=>{
    const [data, setData]= useState([]);

    const {categoriaId}= useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(categoriaId){
            const queryFilter = query(queryCollection, where('category','==','categoriaId'))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(products => ({id: products.id, ...products.data() }))))
        }
        else{
            getDocs(queryCollection)
            .then(res=> setData(res.docs.map(products=> ({id: products.id, ...products.data() }))))
        }



    },[categoriaId])

    return(
        <div>
            <Title saludo='Seba'/>
            
            <ItemList data={data}/>
        </div>

    )
}
export default ItemListContainer;