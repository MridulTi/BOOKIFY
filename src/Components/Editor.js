import React from "react";
import { Image_Card, Outline_Card } from "./Cards";
import "./style/home.css"
export default function Editor(){
    return(
        <div className="flex gap-32 Editors">
            <Image_Card/>
            <div>
                <Outline_Card/>
            </div>
        </div>
    )
}