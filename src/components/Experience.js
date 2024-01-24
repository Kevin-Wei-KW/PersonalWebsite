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
                    <li>Worked on a <b>Business-Intelligence</b> platform built atop Machine Learning language models, which evaluates
                    financial data to provide statistics and insights.</li>
                    <li>Implemented data <b>ETL</b> pipeline with <b>Python</b> through async <b>FastAPI</b>FastAPI endpoints, processing <b>10,000+</b> data points
                    from user imported files to <b>MongoDB</b> with <b>less than 3 seconds</b> of latency.</li>
                    <li>Designed a Data Management page with <b>TypeScript</b> and <b>Vue.js</b>, letting users customize ETL processes and enforce
                    data governance settings.</li>
                    <li>Developed both frontend and backend in a fully <b>Dockerized</b> environment with multiple containers.</li>
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