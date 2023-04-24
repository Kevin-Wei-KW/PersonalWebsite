import React, {useState, useEffect, useLayoutEffect} from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import $ from 'jquery';

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

    const [navState, setNavState] = useState("NavNormal");
    const [height, width] = useWindowSize();

    
    useEffect(() => {
        // setNavState(width >= 1100? "NavNormal":"NavDropdown");
        setNavState(width >= 1100? "nav nav-normal":"nav nav-dropdown");
    }, [width])
    

    const[dropdownState, setDropdownState] = useState("Collapsed");
    function handleNavHover() {
        setDropdownState("Expanded");

        // weird phenomenon, both expanded and collapsed are logged, but works perfectly
        // console.log("ACTIVE: MOUSEENTER")
        // console.log(dropdownState);
    }
    function handleNavHoverLeave() {
        setDropdownState("Collapse");
        projectHoverLeave();
    }


    const [projHover, setProjHover] = useState(false);
    const [projDropHover, setProjDropHover] = useState(false);
    /**
     * handles hover events for project dropdown
     * @param loc specifies location of hover 'button' or 'dropdown'
     */
    function projectHover() {
        console.log('here');
        // console.log("btn " + projBtnHover);
        // console.log("drop " + projDropHover);
        setProjHover(true);

        if(navState === "nav nav-normal") {
            $('.projects-dropdown').css('top', '50px');
            $('.projects-dropdown').css('right', '215px');
        } else {
            $('.projects-dropdown').css('top', '120px');
            $('.projects-dropdown').css('right', '235px');
        }


        // if(loc === 'button' && projBtnHover !== true) {
        //     setProjBtnHover(true);
        //     $('.projects-dropdown').css('opacity', 1);

        //     // hovering over dropdown box only works after hovering over button
        // } else if(loc === 'dropdown') {
        //     if(projBtnHover === true) {
        //         setProjDropHover(true);
        //         $('.projects-dropdown').css('opacity', 1);
        //     }
        // }
    }
    function projectHoverLeave() {
        setProjHover(false);
        // if(loc === 'button' && !projDropHover) {
        //     setProjBtnHover(false);
        //     $('.projects-dropdown').css('opacity', 0);
        // } else if (loc === 'dropdown') {
        //     setProjDropHover(false);
        //     $('.projects-dropdown').css('opacity', 0);
        // }
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
            return "0 0 25px 5px rgb(150,150,150)"
        }
    }

    return(
        <div className="NavBar" onMouseLeave={handleNavHoverLeave} style={{color:getTextColor(props.mode)}}>
            <div className="NavLeft" id="normNavBtn">
                <img src={pfp} alt="pfp"/>

                <h3><a onClick={()=>props.setPage("Profile")}>Kevin Wei</a></h3>
                <a href="mailto: kevin.wei1@uwaterloo.ca"><i className="fa fa-envelope" aria-hidden="true"></i> kevin.wei1@uwaterloo.ca</a>

            </div>

            {/* <a onClick={()=>props.setMode(props.mode==="dark"? "light":"dark")} className="ModeBtn">
                {props.mode==="dark"?<i className="fa-solid fa-sun"></i>:<i className="fas fa-moon"></i>}
            </a> */}
            
            {/* <div className="blank"></div> */}

            
            <div className={navState} id={dropdownState}>
                <li>
                    <a onClick={()=>props.setPage("Resume")} style={{boxShadow: checkActive("Resume")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>
                        Resume
                    </a>
                </li>
                <li>
                    <a onClick={()=>props.setPage("Experience")} style={{boxShadow: checkActive("Experience")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>
                        Experience
                    </a>
                </li>

                <li>
                    <a
                        className="nav-project"
                        onClick={()=>props.setPage("Projects")} style={{boxShadow: checkActive("Projects")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}
                        onMouseOver={() => projectHover()}
                        onMouseLeave={() => projectHoverLeave()}>
                        Projects
                        <i className="fa fa-caret-down" style={{'marginLeft':'7px'}}></i>
                    </a>
                </li>

                <li>
                    <a onClick={()=>props.setPage("Education")} style={{boxShadow: checkActive("Education")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>
                        Education
                    </a>
                </li>
                <li>
                    <a onClick={()=>props.setPage("Skills")} style={{boxShadow: checkActive("Skills")?getNavButtonEffect(props.mode):"", borderRadius: "5px"}}>
                        Skills
                    </a>
                </li>

            </div>

            <div
                className="projects-dropdown"
                style={{display: projHover || projDropHover? 'flex':'none'}}
                onMouseOver={() => setProjDropHover(true)}
                onMouseLeave={() => setProjDropHover(false)}>
                <a className="projects-option">Simple Shop</a>
                <a className="projects-option">Math Connect</a>
                <a className="projects-option">Web Scraper</a>
                <a className="projects-option">Personal Website</a>
                <a className="projects-option">Dart Board</a>
            </div>

            {navState ==="nav nav-dropdown"? 
                <button className="dropbtn" onMouseOver={handleNavHover} style={{display: navState=="NavNormal"? "none":"inline-block", marginLeft: 'auto'}}><i className="fa fa-caret-down"></i></button>
                :
                ''
            }

            
        </div>
    )

}