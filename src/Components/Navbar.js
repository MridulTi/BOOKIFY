import React from "react";
import "./style/Navbar.css"
export default function Navbar(){
    return(
        <div className="Nav-Bar flex gap-64 fixed">
            <div className="font-semibold cursor-pointer text-xl"><h1>Bookify</h1></div>
            <div className="Nav-links cursor-default flex gap-12 text-lg list-none">
                <li>
                    <p>Trending</p>
                </li>
                <li>
                    <p>Category</p>
                </li><li>
                    <p>Club</p>
                </li><li>
                    <p>Browse</p>
                </li>
            </div>
        </div>
    )
}