import React from "react";
import {NavLink}from "react-router-dom"
import Styles from './app.module.css';
// import { FaReact } from 'react-icons/fa';


let Nav=()=>
{
    return(
       
           <section className={Styles.nav}>
           <article className={Styles.leftnav}>
            {/* <FaReact className={Styles.logo} />&nbsp;&nbsp;<h6>E-Commerce</h6> */}
            </article>
           <article className={Styles.rightnav}>
           <NavLink  className={Styles.links} to="/" >Home</NavLink>
               <NavLink className={Styles.links} to="/products"> Products</NavLink>
               <NavLink className={Styles.links} to="/cart"> Cart</NavLink>
               <NavLink className={Styles.links} to="/order"> Order</NavLink>
               <NavLink className={Styles.links} to="/profile"> Profile</NavLink>
           </article>
       </section>
      )}
      export default Nav;