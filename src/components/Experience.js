import React from "react";
import ExperienceBox from './containers/ExperienceBox';

export default function Experience() {

    return(
        <div className="Page Experience">
            <ExperienceBox
                link="https://gochartd.com"
                company="Chartd"
                position="Full Stack Developer"
                skills="Python, MongoDB, Pandas, VueJS, Typescript, Docker, ETL"
                period="September 2023 - December 2023 | 4 months">
                <ul>
                    <li>Worked on an <b>Business-Intelligence</b> platform used in handling and evaluating proprietary data built upon <b>Machine Learning</b>.</li>
                    <li>Implemented ETL data process connecting user imported files to <b>MongoDB</b>, through async endpoints in <b>FastAPI</b>.</li>
                    <li>Developed efficient computing techniques in <b>Python</b> to process <b>10000+</b> data points in <b>&lt; 3</b> seconds on average.</li>
                    <li>Designed a Data Manager page with <b>Vue.js</b> and <b>TypeScript</b>  to help users process ETL in <b>4</b> clicks.</li>
                    <li>Built and tested frontend with backend script and database with <b>Docker</b> containers.</li>
                    <li>Designed an intuitive Product Tour with <b>TypeScript</b> and <b>VueJS</b> to facilitate an effortless onboarding process.</li>
                </ul>
            </ExperienceBox>

            <ExperienceBox
                link="https://gochartd.com"
                company="Chartd"
                position="Web Application Developer"
                skills="VueJS, NuxtJS, TypeScript, JSON, HTML, SCSS, Cypress"
                period="January 2023 - April 2023 | 4 months">
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