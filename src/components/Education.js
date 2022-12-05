import React from "react";

import uwLogo from "../images/uofw_logo.png";
import rhsLogo from "../images/rhs_logo.png";

export default function Education() {

    return(
        <div className="Education">
            <div className="EducationContainer">
                <h1>
                    <a href="https://uwaterloo.ca/future-students/programs/computer-engineering">
                        University of Waterloo
                    </a>
                </h1>

                <h4>Bachelor's Degree in Computer Engineering</h4>
                <h5>September 2022 - May 2027</h5>

                <div className="EducationInfo">

                    <ul>
                        <li>ECE 150: Fundamentals of Programming</li>
                        <li className="sub">
                            Became proficient at C++. Further developed 
                            skills in algorithms and data structures.
                        </li>
                        <li>ECE 198: Project Studio</li>
                        <li className="sub">
                            Developed an automated human detector with Nucleo and IR sensor 
                            with logic written in Arduino code.
                        </li>
                    </ul>

                    <img src={uwLogo} alt="UW Logo" className="UwLogo"/>

                </div>


            </div>

            <div className="EducationContainer">

                <h1>
                    <a href="https://rhs.sd38.bc.ca/">
                        Richmond Secondary School
                    </a>
                </h1>

                <h4>Graduated with 98% Average</h4>
                <h5>September 2017 - June 2022</h5>

                <div className="EducationInfo">

                    <ul>
                        <li>Created various designs with Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere, Dimensions).</li>
                        <li>Practiced standard Financial Accounting practices.</li>
                        <li>Implemented websites for the school with HTML/CSS.</li>
                        <li>Competed in coding competitions, Waterloo's CCC and USACO</li>
                        <li>Developed collaboration and leadership skills, namely when leading group projects in building Mechanical Engineering Projects.</li>
                        <li>Completed AP Courses: Computer Science A, Calculus BC, Physics 1, Physics 2, Micro- Macroeconomics, </li>
                    </ul>

                    <img src={rhsLogo} alt="Rhs Logo" className="RhsLogo"/>
                </div>
            </div>
        </div>
    )
}