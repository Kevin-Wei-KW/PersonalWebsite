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
                </p>

                <ul>
                    <li><a href="https://github.com/kevin-wei-kw"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://linkedin.com/in/kevin-wei-kw"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>

            <div className="About">
                <p>
                    During my free time, I actively work on a plethora of different projects, 
                    experiencing the use of different tech stacks and programming languages. 
                </p>
                    
                <p>
                    While I'm not glued to my workstation, I enjoy reading fictions,
                    as long as it's accompanied by some soothing music and a hot cup of coffee.
                    Of course, I'm also fond of a good workout to keep a routine.
                </p>
            </div>

            {/* <div className="shadow"><img className="FormalPic" src={formalpic} alt="Formal Pic"/></div> */}

            <div className="blank"></div>

        </div>
    )
}