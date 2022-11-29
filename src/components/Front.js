import React from "react";

import Profile from "./Profile.js";
import Resume from "./Resume.js";
import Project from "./Project.js";
import Education from "./Education.js";
import Skills from "./Skills.js";

export default function Front(props) {

    function NewPage() {
        if (props.page === "Resume") {
            return <Resume/>;
        } else if (props.page === "Project"){
            return <Project/>;
        } else if(props.page === "Education") {
            return <Education/>;
        } else if(props.page === "Skills") {
            return <Skills/>;
        } else {
            return <Profile/>;
        }
    }

    console.log("Updated");

    return(
        <div className="Front">
            {NewPage()}
        </div>
    )
}