import React from "react";

import Profile from "./Profile.js";
import Resume from "./Resume.js";
import Experience from "./Experience.js"
import Project from "./Projects.js";
import Education from "./Education.js";
import Skills from "./Skills.js";

export default function Front(props) {

    function NewPage() {
        window.scrollTo(0, 0);
        if (props.page === "Resume") {
            return <Resume/>;
        } else if (props.page === "Projects"){
            return <Project/>;
        } else if (props.page === "Experience"){
            return <Experience/>;
        } else if(props.page === "Education") {
            return <Education/>;
        } else if(props.page === "Skills") {
            return <Skills/>;
        } else {
            return <Profile setPage={props.setPage}/>;
        }
    }


    return(
        <div className="Front">
            {NewPage()}
        </div>
    )
}