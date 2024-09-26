import React, {useState} from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';

import NavBar from "./components/NavBar.js";
import Front from "./components/Front.js";
import Footer from "./components/Footer.js";


import "./style.css";

export default function Page(props) {
    let [mode, setMode] = useState("dark");

    function getMainContentMode(mode) {
        if(mode === "dark") {
            return "Page DarkMainContent";
        } else {
            return "Page LightMainContent";
        }
    }
    function getBackgroundColor(mode) {
        if(mode === "dark") {
            return "black";
        } else {
            return "white";
        }
    }
    function getTextColor(mode) {
        if(mode === "dark") {
            return "white";
        } else {
            return "black";
        }
    }

    return (
        <div className={getMainContentMode(mode)} style={{backgroundColor: getBackgroundColor(mode), color: getTextColor(mode) }}>
            <NavBar
                page = {props.page}
                mode = {mode}
                setMode = {setMode}
            />
            <Front
                page = {props.page}
                mode = {mode}
            />

            <Footer/>

        </div>
    )
}