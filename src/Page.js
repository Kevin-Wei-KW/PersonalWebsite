import React, {useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import NavBar from "./components/NavBar.js";
import Front from "./components/Front.js";
import Footer from "./components/Footer.js";


import "./style.css";

export default function Page() {
    let [pageSelector, setPageSelector] = useState();

    return (
        <div className="MainContent">
            <NavBar
                setPage={setPageSelector}
            />
            <Front
                page = {pageSelector}
            />

            <Footer/>

        </div>
    )
}