import React, {useState, useEffect, useLayoutEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import $ from 'jquery';

import pfp from "../images/profile_pic.jpg"

import Resume from "./Resume.js";

import useWindowSize from "./Hooks.js";

export default function NavBar(props) {
    const navigate = useNavigate();


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
            return "0px 15px 8px -6px rgb(40, 40, 40)";
        } else {
            return "0 0 25px 5px rgb(150,150,150)"
        }
    }

    const [navSelected, setNavSelected] = useState()
    function getNavButtonClass(selectedPage) {
        if(props.page === selectedPage) {
            return "nav-selected";
        } else {
            return "";
        }
    }

    function setPageHelper(page) {
        document.body.scrollTo(0, 0); 
        // props.setPage(page)
    }

    function handleNavigation(project) {
        navigate("/projects");
        setTimeout(() => {
            const element = document.getElementById(project);
            if(element) {
                element.scrollIntoView({behavior: "smooth"});
            }
        })
    }

    return(
        <div className="NavBar" onMouseLeave={handleNavHoverLeave} style={{color:getTextColor(props.mode)}}>
            <div className="NavLeft" id="normNavBtn">
                {/* <img className="pfp" src={pfp} alt="pfp"/> */}

                <h3><Link to="/" onClick={()=>setPageHelper("Profile")}>Kevin Wei</Link></h3>
                <a href="mailto: kevin.wei1@uwaterloo.ca"><i className="fa fa-envelope" aria-hidden="true"></i> kevin.wei1@uwaterloo.ca</a>

            </div>

            {/* <a onClick={()=>props.setMode(props.mode==="dark"? "light":"dark")} className="ModeBtn">
                {props.mode==="dark"?<i className="fa-solid fa-sun"></i>:<i className="fas fa-moon"></i>}
            </a> */}
            
            {/* <div className="blank"></div> */}

            
            <div className={navState} id={dropdownState}>
                <li>
                    <Link to="/resume" className={`${getNavButtonClass("Resume")}`} onClick={()=>setPageHelper("Resume")}>
                        {/* <Link to="/resume">Resume</Link> */}
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="/experience" className={`${getNavButtonClass("Experience")}`} onClick={()=>setPageHelper("Experience")}>
                        Experience
                    </Link>
                </li>

                <li>
                    <Link
                        to="/projects"
                        className={`nav-project ${getNavButtonClass("Projects")}`}
                        onClick={()=>setPageHelper("Projects")}
                        onMouseOver={() => projectHover()}
                        onMouseLeave={() => projectHoverLeave()}>
                        Projects
                        <i className="fa fa-caret-down" style={{'marginLeft':'7px'}}></i>
                    </Link>
                </li>

                <li>
                    <Link to="/education"className={`${getNavButtonClass("Education")}`} onClick={()=>setPageHelper("Education")}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="/skills" className={`${getNavButtonClass("Skills")}`} onClick={()=>setPageHelper("Skills")}>
                        Skills
                    </Link>
                </li>

            </div>

            <div
                className="projects-dropdown"
                style={{display: projHover || projDropHover? 'flex':'none'}}
                onMouseOver={() => setProjDropHover(true)}
                onMouseLeave={() => setProjDropHover(false)}>
                <a className="projects-option" onClick={()=>handleNavigation("ExpenseTracker")}>Expense Tracker</a>
                <a className="projects-option" onClick={()=>handleNavigation("SimpleShop")}>Simple Shop</a>
                <a className="projects-option" onClick={()=>handleNavigation("MathConnect")}>Math Connect</a>
                <a className="projects-option" onClick={()=>handleNavigation("WebScraper")}>Web Scraper</a>
                <a className="projects-option" onClick={()=>handleNavigation("PersonalWebsite")}>Personal Website</a>
                <a className="projects-option" onClick={()=>handleNavigation("Dart")}>Dart Board</a>
            </div>

            {navState ==="nav nav-dropdown"? 
                <button className="dropbtn" onMouseOver={handleNavHover} style={{display: navState=="NavNormal"? "none":"inline-block", marginLeft: 'auto'}}><i className="fa-solid fa-bars"></i></button>
                :
                ''
            }

            
        </div>
    )

}