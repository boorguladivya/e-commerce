import React from "react";
import {createBrowserRouter,RouterProvider}from "react-router-dom"
//import Styles from './app.module.css'
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Profile from "./Profile";
import Order from "./Order";
import LayOut from "./LayOut"


let router=createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/Cart/:id",
                element:<Cart/>
            },
            {
                path:"/Order/:id",
                element:<Order/>
            },
            {
                path:"/profile",
                element:<Profile/>
            },

        ]
    }
])
const App=()=>
{
   
    return(
        <div>
           
        <RouterProvider router={router}></RouterProvider></div>
    )
}
export default App;