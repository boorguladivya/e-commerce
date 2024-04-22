import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Styles from './app.module.css';
import { Link } from "react-router-dom";

const Cart=()=>
{
    const { id } = useParams();
 const [state, setState] = useState([]);

  
    useEffect(() => {
      axios
      .get('https://fakestoreapi.com/products/'+id)
       .then((res) => {
          setState(res.data);
          console.log(res);
        })
        .catch((err) => console.log("Error Fetching products",err));
    }, [id]);

    return(
        <div>
        {state ? (
          <center>
            <form>
            <h2>Product Details</h2>
            <div className={Styles.cart}>
            <p>&nbsp;&nbsp;{state.title}</p>
            <img className={Styles.img}src={state.image} alt="/"></img>
            <p className={Styles.data}>Id: &nbsp;&nbsp;{state.id}</p>
            <p className={Styles.data}>Price: &nbsp;&nbsp;{state.price}</p>
            <p className={Styles.data}>Category: &nbsp;&nbsp;{state.category}</p>
            <button className={Styles.sub} ><Link to={`/Order/${state.id}`}>Order Now</Link></button>&nbsp;&nbsp;
            <button className={Styles.sub} ><Link to='/Products'>Back</Link></button>&nbsp;&nbsp;
            </div>
          </form>
            </center>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    )
}
export default Cart;