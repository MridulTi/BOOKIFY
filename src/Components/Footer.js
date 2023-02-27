import React from "react";
import "./style/footer.css"
export default function Footer(){
    return(
        <div className="Footer w-full text-xl">
            <div className="Footer-color">
                <div className="flex gap-64 justify-center">
                    <div >
                        <h1 className="font-bold text-3xl pb-16">Bookify</h1>
                        <div className="flex">
                            <div>Socials</div>
                        </div>
                        <p className="text-base">@2023 Bookify</p>
                    </div>
                    <div className="Footer-links flex gap-16">
                        <div>
                            <h2>TEAMS</h2>
                            <li>About</li>
                            <li>News Room</li>
                            <li>Book Community</li>
                        </div>
                        <div>
                            <h2>RESOURCES</h2>
                            <li>Help Center</li>
                            <li>APIs Used</li>
                        </div>
                        <div>
                            <h2>CONTACTS</h2>
                            <li>Forums</li>
                            <li>Book Community</li>
                        </div>
                        <div>
                            <h2>REFERALS</h2>
                            <li>Book Websites</li>
                            <li>Book Websites</li>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}