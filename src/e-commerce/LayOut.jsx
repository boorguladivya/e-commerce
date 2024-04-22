import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
const LayOut=()=>
{
    return(
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}
export default LayOut;