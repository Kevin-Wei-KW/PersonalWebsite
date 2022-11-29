import React, {useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import NavBar from "./components/NavBar.js";
import Front from "./components/Front.js";
import Resume from "./components/Resume.js";


import "./style.css";

export default function Page() {
    let [pageSelector, setPageSelector] = useState();
    // const navigate = useNavigate();

    // const navigateToResume = () => {
    //     navigate('/resume');
    // };


    return (
        <div className="MainContent">
            <NavBar
                setPage={setPageSelector}
            />
            <Front
                page = {pageSelector}
            />


            {/* <Routes>
                <Route path='/resume' element={Resume}/>
            </Routes> */}
        </div>
    )
}