import React from "react";

import formalpic from "../images/formal_pic.jpg"

export default function Profile() {
    return(
        <div className="Profile">
            <div className="NameInfo">
                <h1>Kevin</h1>
                <h1>Wei</h1>
                <p>
                    Hi there! I am a Software Developer 
                    currently studying Computer Engineering 
                    at the University of Waterloo. 
                    <br/><br/>
                    During my free time, I enjoy exploring a variety 
                    of programming languages and tech stacks.
                </p>

                <ul>
                    <li><a href="https://github.com/kevin-wei-kw"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://linkedin.com/in/kevin-wei-kw"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>

            <div className="shadow"><img className="FormalPic" src={formalpic} alt="Formal Pic"/></div>

            <div className="blank"></div>

        </div>
    )
}