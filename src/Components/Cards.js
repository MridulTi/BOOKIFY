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
export function Outline_Card(){
    return(
        <div>

        </div>
    )
}
export function Image_Card(){
    return(
        <div>
            
        </div>
    )
}