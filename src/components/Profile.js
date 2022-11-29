import React from "react";

import formalpic from "../images/formal_pic.jpg"

export default function Profile() {
    console.log("Profile Rendered");
    return(
        <div className="Profile">
            <div className="BigName">
                <h1>Kevin</h1>
                <h1>Wei</h1>
            </div>

            <div className="shadow"><img className="FormalPic" src={formalpic} alt="Formal Pic"/></div>

        </div>
    )
}