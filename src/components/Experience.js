import React from "react";
import ExperienceBox from './containers/ExperienceBox';

export default function Experience() {

    return(
        <div className="Page Experience">
            <ExperienceBox
                link="https://gochartd.com"
                company="Chartd"
                position="Web Application Developer"
                techs="VueJS, NuxtJS, TypeScript, JSON, HTML, SCSS"
                period="January 2023 - April 2023">
                <ul>
                    <li>Developed dynamic and interactive financial models with <b>Vue.js</b> to visualize Defence Contract fulfillment.</li>
                    <li>Abstracted financial data from <b>JSON</b> to <b>TypeScript</b> objects for organized display in Tables, Graphs, and Charts capable of extensive filtering.</li>
                    <li>Implemented <b>CRUD</b> operation modules, complete with thorough <b>Unit Testing</b>, to reliably accept inputs and relay information to the back-end database.</li>
                    <li>Designed flexible <b>Components</b>, used dozens of times throughout the application, with priority on customization through conditional rendering.</li>
                    <li>Assisted in constructing an intuitive and accessible navigation system with <b>Nuxt.js</b>.</li>
                    <li>Followed <b>Git</b> workflow to write informative and intuitive <b>Pull Requests</b> to detail component functions.</li>
                </ul>
            </ExperienceBox>
        </div>
    )
}