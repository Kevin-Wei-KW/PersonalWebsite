import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import pfp from "../images/profile_pic.jpg"

import Resume from "./Resume.js";

export default function NavBar(props) {
    // const navigate = useNavigate();

    // const navigateToResume = () => {
    //     navigate('/resume');
    // };

    return(
        <div className="NavBar">
            <a><img src={pfp} alt="pfp"/></a>

            <h3><a onClick={()=>props.setPage("Profile")}>Kevin Wei</a></h3>
            <h3><a>kevin.wei20622@gmail.com</a></h3>

            <div className="blank"></div>

            <li><a onClick={()=>props.setPage("Resume")}>Resume</a></li>
            <li><a onClick={()=>props.setPage("Project")}>Project</a></li>
            <li><a onClick={()=>props.setPage("Education")}>Education</a></li>
            <li><a onClick={()=>props.setPage("Skills")}>Skills</a></li>

            {/* <button>Switch</button> */}

            {/* <Routes>
                <Route path='/resume' element={Resume}/>
            </Routes> */}

        </div>
    )

}