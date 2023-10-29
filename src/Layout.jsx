import React from "react";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div>
           <Header/>
           <div className="content">
            <Outlet/>
           </div>
           <SimpleBottomNavigation/>
        </div>
    )
}