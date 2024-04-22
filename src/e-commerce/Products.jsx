import axios from "axios";
import React, { useEffect, useState } from "react";
import Styles from './app.module.css';
import { Link } from "react-router-dom";

const Products=()=>
{
    let[state,setState]=useState(null);
    useEffect(()=>
    {
        axios.get("https://fakestoreapi.com/products").then((res)=>
        {
            setState(res.data)
        }).catch((err)=>console.log(err))
    })

    
    return(
    <div>
        {state==null?"loading...":state.map((d)=>
        {
            return(
                
                <div key={d.id}>
                 <p>{d.category}</p>
                 <p>{d.title}</p>
                 <div>
                 <img className={Styles.img}src={d.image} alt="/"></img>
                 <p>{d.price}</p>
                 <p>{d.rating.rate}</p>
                <button className={Styles.butn}> <Link  to={`/Cart/${d.id}`}>Add To Cart</Link></button>
                <hr/>
                </div>
                </div>
            );
        })} 
    </div>
    )
}
export default Products;