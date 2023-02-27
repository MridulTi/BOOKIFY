import React, { useEffect } from "react";
import { Book_Cover } from "../Components/Book_List";
import { Outline_Card } from "../Components/Cards";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
export default function Home(){
    return(
        <div>
            <Navbar/>
            <div  className="main">
                {/* <Book_Cover/> */}
                {/* <Outline_Card/> */}
                <Slider/>
                {/* Recommended/>
                <NewBooks/>
                <Trending/> */}
                {/* Popular Tags */}
                <Footer/>
            </div>
        </div>
    )
}