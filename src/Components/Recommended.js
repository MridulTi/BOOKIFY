import React from "react"
import { Recommend_Card } from "./Cards"
export default function Recommended(){
    return(
        <div className="w-full">
            <div className="py-5 justify-center">
                <h1 className="font-semibold text-2xl">Recommended</h1>
                <Recommend_Card/>
            </div>
            <div className="New-Book py-5 justify-center font-semibold text-2xl">
                <h1>New to Bookify!</h1>
                <Recommend_Card/>
            </div>
        </div>
    )
}