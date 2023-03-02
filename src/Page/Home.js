import React, { useEffect } from "react";
import { Book_Cover } from "../Components/Book_List";
import { Outline_Card } from "../Components/Cards";
import Editor from "../Components/Editor";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Recommended from "../Components/Recommended";
import Slider from "../Components/Slider";
import Trending from "../Components/Trending";
export default function Home(){
    return(
        <div>
            <Navbar/>
            <div  className="main">
                {/* <Book_Cover/> */}
                {/* <Outline_Card/> */}
                {/* <Slider/> */}
                <Recommended/>
                <Trending/>
                {/* Popular Tags */}
                <div className="justify-center py-12">
                    <h2>Popular Tags</h2>
                    {/* <hr></hr> */}
                    <div className="flex gap-12">
                        <button className="Text-btn">Button</button>
                        <button className="Text-btn">Button</button>
                        <button className="Text-btn">Button</button>
                        <button className="Text-btn">Button</button>
                    </div>
                    
                </div>
                
                <Editor/>
            </div>
            <Footer/>
        </div>
    )
}