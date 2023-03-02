import React from "react"
import { Outline_Card } from "./Cards"
export default function Trending(){
    return(
        <div className="flex gap-32 justify-center">
            <div>
                <h2>Trending</h2>
                <Outline_Card/>
            </div>
            <div>
                <div className="flex place-items-end w-full">
                <h2>Best of Genre</h2>
                <button className="Text-btn">SWITCH</button>
                </div>
                <Outline_Card/>
            </div>
        </div>
    )
}