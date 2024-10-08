import React, {useState} from "react";

import ProjectBox from "./containers/ProjectBox.js";

import expenseTrackerGif from "../images/expense_tracker.gif";
import simpleShopGif from "../images/simple_shop.gif";
import mathConnectGif from "../images/math_connect.gif";
import webScraperGif from "../images/ecommerce_web_scraper.gif";
import dartVolumeGif from "../images/dart_demo.gif";

export default function Project() {

    const [troll, setTroll] = useState(false);
    function handleTrollClick() {
        setTroll(true);
    }

    return(
        <div className="Project">

            <ProjectBox
                id="ExpenseTracker"
                link="https://github.com/Kevin-Wei-KW/expense-tracker"
                title="ExpenseLink"
                techs="Python, React.js, Flask, Javascript, Pandas, Google Cloud Platform"
                import={expenseTrackerGif}
                alt="Expense Tracker Gif">
                <ul>
                    <li>Developed a mobile-friendly expense tracking web app with <b>React.js</b> and <b>Python</b>, along with integration of <b>Google Cloud Platform</b> and Google Sheets.</li>
                    <li>Utilised <b>Pandas</b> to format and aggregate thousands of transaction data points, and employed <b>Axios</b> to transmit this data via POST/GET requests to the app's backend API service.</li>
                    <li>Designed a RESTful <b>Flask</b> API that performs stateless authentication by exchanging <b>JSON Web Tokens</b> (JWT) containing HS256 encrypted user access tokens.</li>
                    <li>Integrated Google Login with <b>OAuth 2.0</b> authentication to access Google Sheets API by verifying tokens and credentials with Google Authorization Servers.</li>
                </ul>
            </ProjectBox>

            <ProjectBox
                id="SimpleShop"
                link="https://github.com/kevin-wei-kw/SimpleShop"
                title="Simple Shop"
                techs="Java, JSP, H2 Database, Spring Boot, Spring MVC, Hibernate, Maven"
                import={simpleShopGif}
                alt="Simple Shop Gif">
                <ul>
                    <li>An e-commerce website developed with <b>Java</b>, <b>JSP</b>, and <b>Spring Boot</b> for buying and selling second-hand items.</li>
                    <li>Applied the MVC architectural pattern with <b>Spring MVC</b> for ease of organization and development.</li>
                    <li>Configured a database with <b>H2 Database Engine</b> to store user info and items, which are accessed with <b>HQL</b> queries.</li>
                    <li>Utilised <b>HttpSession</b> to customize website display for logged-in users.</li>
                </ul>
            </ProjectBox>

            <ProjectBox
                id="MathConnect"
                link="https://github.com/kevin-wei-kw/MathConnect"
                title="Math Connect"
                techs="JavaScript, Bootstrap, HTML/CSS, SCSS"
                import={mathConnectGif}
                alt="Math Connect Gif">
                <ul>
                    <li>Designed an interactive website with responsive and intuitive UI using <b>JavaScript</b> and <b>Bootstrap</b> for my non-profit.</li>
                    <li>• Registered a custom domain <a href="https://mathconnect.ca/"><b>mathconnect.ca</b></a> regularly used by 100+ users.</li>
                    <li>Incorporated Animate on scroll <b>AOS</b> library to enhance UX fluidity.</li>
                    <li>Embedded external programs into website, such as <b>Google Drive, Google Form, Mail Client</b>.</li>
                    <li>Added a particle simulations for visual and interactive enhancement.</li>
                </ul>
            </ProjectBox>

            <ProjectBox
                id="WebScraper"
                link="https://github.com/kevin-wei-kw/ECommerceWebScraper"
                title="E-Commerce Web Scraper"
                techs="Python, Flask, Selenium, HTML/CSS, Beautiful Soup"
                import={webScraperGif}
                alt="Web Scraper Gif">
                <ul>
                    <li>A web scraper for Costco developed with <b>Python</b> that dynamically displays scraped content.</li>
                    <li>Developed a web application with <b>Flask</b> that hosts the web scraper and runs Python scripts with user input.</li>
                    <li>Extracted and Parsed <b>HTML</b> from target website with <b>Beautiful Soup</b> to obtain useful information.</li>
                    <li>Designed program to use browser automation technology with <b>Selenium</b> to mimic the behaviour of a real user.</li>
                </ul>
            </ProjectBox>

            <ProjectBox
                id="PersonalWebsite"
                link="https://github.com/kevin-wei-kw/PersonalWebsite"
                title="Kevin's Personal Website"
                techs="ReactJS, HTML/CSS, JavaScript"
                import=""
                alt="">
                <ul>
                    <li>My personal website developed with <b>React</b> to show some interesting things about me and my progress as a software developer.</li>
                    <li>Developed a responsive NavBar to with <b>Custom Hooks</b> and <b>JavaScript</b> to respond to varying window sizes</li>
                    <li>Configured smooth navigation with <b>React States</b> and <b>Components</b></li>
                </ul>
            </ProjectBox>

            <ProjectBox
                id="Dart"
                link="https://github.com/kevin-wei-kw/DartVolumeController"
                title="Dart Volume Controller"
                techs="JavaScript, Canvas, jQuery, HTML, CSS"
                import={dartVolumeGif}
                alt="Dart Volume Controller Gif">
                <ul>
                    <li>Game of Darts that outputs a volume depending on score <span style={{whiteSpace: 'nowrap'}}>(0-100%)</span></li>
                    <li>Designed an unique dart board with <b>HTML Canvas</b></li>
                    <li>Developed a dart throwing simulation by using <b>jQuery</b> to manipulate <b>CSS</b> of the dart with calculated 3D kinematics</li>
                    <li>Implemented score calculation by tracking and calibrating dart coordinates, then applying trignometry</li>
                    <li>Optimized system to operate mouse and touch events</li>
                </ul>
            </ProjectBox>
        </div>
    )
}