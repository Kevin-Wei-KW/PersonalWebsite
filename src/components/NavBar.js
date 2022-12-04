import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';

import pfp from "../images/profile_pic.jpg"

import Resume from "./Resume.js";

import getWindowSize from "./Hooks.js";

export default function NavBar(props) {
    // const navigate = useNavigate();

    // const navigateToResume = () => {
    //     navigate('/resume');
    // };

    function checkActive(name) {
        if(props.page === name) {
            return true;
        } else {
            return false;
        }
    }


    function handleNavType() {
        const[height, width] = getWindowSize();

        if(width >= 940) {
            return "NavNormal";
        } else {
            return "NavDropdown";
        }
    }

    return(
        <div className="NavBar">
                <img src={pfp} alt="pfp"/>

            <h3><a onClick={()=>props.setPage("Profile")}>Kevin Wei</a></h3>
            <a href="mailto: kevin.wei20622@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i> kevin.wei20622@gmail.com</a>

            <div className="blank"></div>
            
            <div className={handleNavType()} id="dropdown">
                <li><a onClick={()=>props.setPage("Resume")} style={{boxShadow: checkActive("Resume")?"0 0 10px 10px rgb(50, 50, 50)":"", borderRadius: "5px"}}>Resume</a></li>
                <li><a onClick={()=>props.setPage("Project")} style={{boxShadow: checkActive("Project")?"0 0 10px 10px rgb(50, 50, 50)":"", borderRadius: "5px"}}>Project</a></li>
                <li><a onClick={()=>props.setPage("Education")} style={{boxShadow: checkActive("Education")?"0 0 10px 10px rgb(50, 50, 50)":"", borderRadius: "5px"}}>Education</a></li>
                <li><a onClick={()=>props.setPage("Skills")} style={{boxShadow: checkActive("Skills")?"0 0 10px 10px rgb(50, 50, 50)":"", borderRadius: "5px"}}>Skills</a></li>
            </div>
            

        </div>
    )

}