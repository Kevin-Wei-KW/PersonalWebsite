import React from "react";

import formalpic from "../images/formal_pic.jpg"

export default function Profile() {
    console.log("Profile Rendered");
    return(
        <div className="Profile">
            <div className="NameInfo">
                <h1>Kevin</h1>
                <h1>Wei</h1>
                <p>
                    Hi there! I am a Software Developer 
                    currently studying Computer Engineering 
                    at University of Waterloo. 
                    <br/><br/>
                    During my free time, I enjoy exploring a variety 
                    of programming languages and tech stacks.
                </p>

                <ul>
                    <li><a href="GitHub"><i className="fa fa-github"></i></a></li>
                    <li><a href="LinkedIn"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>

            <div className="shadow"><img className="FormalPic" src={formalpic} alt="Formal Pic"/></div>

            <div className="blank"></div>

        </div>
    )
}