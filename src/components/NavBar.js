import React from "react";

import pfp from "../images/profile_pic.jpg"

export default function NavBar() {
    return(
        <div className="NavBar">
            <img src={pfp} alt="pfp"/>

            <h2>Kevin Wei | kevin.wei20622@gmail.com</h2>

            <div className="blank"></div>

            <ul>
                <li><p>Resume</p></li>
                <li><p>Projects</p></li>
                <li><p>Education</p></li>
            </ul>


        </div>
    )
}