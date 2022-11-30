import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import pfp from "../images/profile_pic.jpg"

import Resume from "./Resume.js";

export default function NavBar(props) {
    // const navigate = useNavigate();

    // const navigateToResume = () => {
    //     navigate('/resume');
    // };

    function checkActive(name) {
        if(props.page === name) {
            console.log("CHANGED");
            return true;
        } else {
            console.log("NOT CHANGED");
            return false;
        }
    }

    return(
        <div className="NavBar">
                <img src={pfp} alt="pfp"/>

            <h3><a onClick={()=>props.setPage("Profile")}>Kevin Wei</a></h3>
            <h3>kevin.wei20622@gmail.com</h3>

            <div className="blank"></div>

            <li><a onClick={()=>props.setPage("Resume")} style={{backgroundColor: checkActive("Resume")?"rgb(50, 50, 50)":"", borderRadius: "5px"}}>Resume</a></li>
            <li><a onClick={()=>props.setPage("Project")} style={{backgroundColor: checkActive("Project")?"rgb(50, 50, 50)":"", borderRadius: "5px"}}>Project</a></li>
            <li><a onClick={()=>props.setPage("Education")} style={{backgroundColor: checkActive("Education")?"rgb(50, 50, 50)":"", borderRadius: "5px"}}>Education</a></li>
            <li><a onClick={()=>props.setPage("Skills")} style={{backgroundColor: checkActive("Skills")?"rgb(50, 50, 50)":"", borderRadius: "5px"}}>Skills</a></li>

            {/* <button>Switch</button> */}

            {/* <Routes>
                <Route path='/resume' element={Resume}/>
            </Routes> */}

        </div>
    )

}