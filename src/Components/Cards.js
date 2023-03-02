import React from "react";
import "./style/cards.css"
export function Recommend_Card(props){
    return(
        <div className="container">
            <img src="/logo512.png"/>
            <div className="overlay">
                <h1>TITLE TEXT HERE</h1>
                <p>{props.para}</p>
            </div>
        </div>
    )
}
export function Outline_Card(props){
    return(
        <div className="flex Outline-card gap-8 px-2">
            <div className="outline-img"/>
            <div>
                <h1 className="text-xl font-semibold">Title Goes Here</h1>
                <p className="tezt-sm font-light">para Lorem Ipsum</p>
                <button className="py-6 font-semibold">Read</button>
            </div>
        </div>
    )
}
export function Image_Card(props){
    return(
        <div className="Img-card">
            <div className="img-tab"/>
            <div className="p-5">
                <h1 className="text-xl font-semibold">TITLE GOES HERE </h1>
                <h2 className="text-base font-medium">Secondary Text Here</h2>
                <p className="text-sm font-light">para Lorem Ipsum</p>
                <button className="py-6 font-semibold">Read</button>
            </div>
        </div>
    )
}