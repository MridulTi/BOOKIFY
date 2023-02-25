import React, { useEffect } from "react";
import { Book_Cover } from "../Components/Book_List";
import Navbar from "../Components/Navbar";
export default function Home(){
    return(
        <div>
            <Navbar/>
            <div  className="main">
                <Book_Cover/>
            </div>
        </div>
    )
}