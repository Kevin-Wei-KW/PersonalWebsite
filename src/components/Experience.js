import React from "react";
import ExperienceBox from './containers/ExperienceBox';

export default function Experience() {

    return(
        <div className="Page Experience">
            <ExperienceBox
                link="https://gochartd.com"
                company="Chartd"
                position="Web Application Developer"
                techs="VueJS, NuxtJS, TypeScript, JSON, HTML, SCSS, Cypress"
                period="January 2023 - April 2023">
                <ul>
                    <li>Developed a financial data management tool using <b>Vue.js</b> for Canadian Defence Industry contracts</li>
                    <li>Abstracted financial data from <b>JSON</b> to <b>TypeScript</b> objects for organized display in Tables, Graphs, and Charts.</li>
                    <li>Implemented <b>CRUD</b> operation components used in 30+ instances throughout the app, complete with <b>Unit Testing</b> and <b>End-to-End Testing</b> with <b>Cypress</b> to ensure back-end database integrity.</li>
                    <li>Assisted in using <b>Nuxt.js</b> to construct an intuitive and accessible navigation system with 20+ distinct pages.</li>
                    <li>Followed <b>Git</b> workflow to collaborate cohesively with team members, writing informative <b>Pull Requests</b> and documentations.</li>
                </ul>
            </ExperienceBox>
        </div>
    )
}