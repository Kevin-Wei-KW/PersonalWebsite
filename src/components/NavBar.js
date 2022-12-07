import React, {useState, useEffect, useLayoutEffect} from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';

import pfp from "../images/profile_pic.jpg"

import Resume from "./Resume.js";

import useWindowSize from "./Hooks.js";

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


    // const[navState, setNavState] = useState("NavNormal");

    // useEffect(() => {

    // }, navState)

    const [navState, setNavState] = useState("NavNormal");
    const [height, width] = useWindowSize();
    
    useEffect(() => {
        setNavState(width >= 975? "NavNormal":"NavDropdown");
    }, [width])
    

    const[dropdownState, setDropdownState] = useState("Collapsed");
    function handleHover() {
        setDropdownState("Expanded");

        // weird phenomenon, both expanded and collapsed are logged, but works perfectly
        // console.log("ACTIVE: MOUSEENTER")
        // console.log(dropdownState);
    }
    function handleHoverLeave() {
        setDropdownState("Collapse");

    }

    function getBackgroundColor(mode) {
        if(mode === "dark") {
            return "";
        } else {
            return "white";
        }
    }
    function getTextColor(mode) {
        if(mode === "dark") {
            return "beige";
        } else {
            return "black";
        }
    }
    function getNavButtonEffect(mode) {
        if(mode === "dark") {
            return "0 0 10px 10px rgb(50, 50, 50)";
        } else {
            return "0 0 10px 5px rgb(125,125,125)"
        }
    }

    return(
        <div className="NavBar" onMouseLeave={handleHoverLeave} style={{color:getTextColor(props.mode)}}>
            <div className="NavLeft">
                <img src={pfp} alt="pfp"/>

                <h3><a onClick={()=>props.setPage("Profile")}>Kevin Wei</a></h3>
                <a href="mailto: kevin.wei20622@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i> kevin.wei20622@gmail.com</a>

                <a onClick={()=>props.setMode(props.mode==="dark"? "light":"dark")}>{props.mode==="dark"?<i className="fa-solid fa-sun"></i>:<i className="fas fa-moon"></i>}</a>

            </div>
            
            {/* <div className="blank"></div> */}
            
            <div className="Dropdown">
                <button className="dropbtn" onMouseOver={handleHover} style={{display: navState=="NavNormal"? "none":"inline-block"}}><i className="fa fa-caret-down"></i></button>
                <div className={navState} id={dropdownState}>
                    <li><a onClick={()=>props.setPage("Resume")} style={{boxShadow: checkActive("Resume")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>Resume</a></li>
                    <li><a onClick={()=>props.setPage("Projects")} style={{boxShadow: checkActive("Projects")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>Projects</a></li>
                    <li><a onClick={()=>props.setPage("Education")} style={{boxShadow: checkActive("Education")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>Education</a></li>
                    <li><a onClick={()=>props.setPage("Skills")} style={{boxShadow: checkActive("Skills")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>Skills</a></li>
                </div>
            </div>
            
        </div>
    )

}