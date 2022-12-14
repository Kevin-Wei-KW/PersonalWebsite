import React, {useState} from "react";

import simpleShopGif from "../images/simple_shop.gif";
import mathConnectGif from "../images/math_connect.gif";
import webScraperGif from "../images/ecommerce_web_scraper.gif";

export default function Project() {

    const [troll, setTroll] = useState(false);
    function handleTrollClick() {
        setTroll(true);
    }

    return(
        <div className="Project">

            <div className="ProjectContainer">
                <h1>
                    <a href="https://github.com/kevin-wei-kw/SimpleShop">
                        Simple Shop <i className="fa fa-github"></i>
                    </a>
                </h1>

                <h4>Technologies: Java, JSP, H2 Database, Spring Boot, Spring MVC, Hibernate</h4>

                <div className="ProjectInfo">

                    <ul>
                        <li>An online e-commerce hub developed primarily with <b>Java</b> that allows items to be posted for sale.</li>
                        <li>Developed a Full Stack website with <b>JSP</b> and <b>Spring Boot</b>.</li>
                        <li>Applied the MVC architectural pattern with <b>Spring MVC</b> for ease of organization and development.</li>
                        <li>Configured login and posting system with <b>H2 Database Engine</b> to store encrypted user and posting information.</li>
                        <li>Utilised <b>HttpSession</b> to customize website display for logged-in users.</li>
                        <li>Designed filter to categorize and paginate items with <b>HQL queries</b>.</li>
                    </ul>

                    <img src={simpleShopGif} alt="Simple Shop Gif"/>
                </div>


            </div>

            <div className="ProjectContainer">

                <h1>
                    <a href="https://github.com/kevin-wei-kw/MathConnect">
                        Math Connect <i className="fa fa-github"></i>
                    </a>
                </h1>

                <h4>Technologies: JavaScript, Bootstrap, HTML/CSS, SCSS</h4>

                <div className="ProjectInfo">

                    <ul>
                        <li>Designed a responsive and intuitive UI with JavaScript and Bootstrap.</li>
                        <li>Incorporated Animate on scroll <b>AOS</b> library to enhance UX fluidity.</li>
                        <li>Embedded external programs into website <b>Google Drive, Google Form, Mail Client</b>.</li>
                        <li>Embedded particle simulations for visual and interactive enhancement.</li>
                        <li>Registered a custom domain <a href="https://mathconnect.ca/"><b>mathconnect.ca</b></a> through Replit.</li>
                    </ul>

                    <img src={mathConnectGif} alt="Math Connect Gif"/>
                </div>
            </div>

            <div className="ProjectContainer">

                <h1>
                    <a href="https://github.com/kevin-wei-kw/ECommerceWebScraper">
                        E-Commerce Web Scraper <i className="fa fa-github"></i>
                    </a>
                </h1>

                <h4>Technologies: Python, Flask, Selenium, HTML/CSS, Beautiful Soup</h4>

                <div className="ProjectInfo">
                    <ul>
                        <li>A web scraper for Costco developed with <b>Python</b> that dynamically displays scraped content.</li>
                        <li>Developed a web application with <b>Flask</b> that hosts the web scraper and runs Python scripts with user input.</li>
                        <li>Extracted and Parsed <b>HTML</b> from target website with <b>Beautiful Soup</b> to obtain useful information.</li>
                        <li>Designed program to use browser automation technology with <b>Selenium</b> to mimic the behaviour of a real user.</li>
                    </ul>

                    <img src={webScraperGif} alt="Web Scraper Gif"/>
                </div>
            </div>
            <div className="ProjectContainer">

                <h1>
                    <a href="https://github.com/kevin-wei-kw/PersonalWebsite">
                        Kevin's Personal Website <i className="fa fa-github"></i>
                    </a>
                </h1>

                <h4>Technologies: ReactJS, HTML/CSS, JavaScript, NodeJS</h4>

                <div className="ProjectInfo">
                    <ul>
                        <li>My personal website developed with <b>React</b> to show some interesting things about me and my progress as a software developer.</li>
                        <li>Developed a responsive NavBar to with <b>Custom Hooks</b> and <b>JavaScript</b> to respond to varying window sizes</li>
                        <li>Configured smooth navigation with <b>React States</b> and <b>Components</b></li>
                    </ul>

                    <div className="ThisOne" onClick={handleTrollClick} style={{cursor: troll===false? "pointer":"auto"}}>
                        {troll===false? <h1>Click to Reveal</h1>:<h1>You are looking at it :&#41;</h1>}
                    </div>
                </div>
            </div>

        </div>
    )
}