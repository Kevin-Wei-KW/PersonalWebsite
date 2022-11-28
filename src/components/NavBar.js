import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import pfp from "../images/profile_pic.jpg"

import Resume from "./Resume.js";

export default function NavBar() {
    const navigate = useNavigate();

    const navigateToResume = () => {
        navigate('/resume');
    };

    return(
        <div className="NavBar">
            <img src={pfp} alt="pfp"/>

            <h3>Kevin Wei | kevin.wei20622@gmail.com</h3>

            <div className="blank"></div>

            <li><a onClick={navigateToResume}>Resume</a></li>
            <li><a>Project</a></li>
            <li><a>Education</a></li>
            <li><a>Skills</a></li>

            {/* <button>Switch</button> */}

            <Routes>
                <Route path='/resume' element={Resume}/>
            </Routes>

        </div>
    )

}