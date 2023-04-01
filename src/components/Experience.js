    import React from "react";

export default function Experience(props) {

    return(
        <div className="Page Experience">
            <div className="ExperienceContainer">
                <div className="ExperienceHeader">
                    <h1>
                        <a href="https://gochartd.com">
                            Chartd     
                        </a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                    </h1>
                    <h3>
                        Web Application Developer
                    </h3>
                </div>

                <h4 style={{margin: '0 0 0 5px'}}>
                    Skills: VueJS, NuxtJS, TypeScript, JSON, HTML, SCSS 
                </h4>

                <div className="ExperienceInfo">
                    <ul>
                        <li>Developed dynamic and interactive financial models with <b>Vue.js</b> to visualize Defence Contract fulfillment.</li>
                        <li>Abstracted financial data from <b>JSON</b> to <b>TypeScript</b> objects for organized display in Tables, Graphs, and Charts capable of extensive filtering.</li>
                        <li>Implemented <b>CRUD</b> operation modules, complete with thorough <b>Unit Testing</b>, to reliably accept inputs and relay information to the back-end database.</li>
                        <li>Designed flexible <b>Components</b>, used dozens of times throughout the application, with priority on customization through conditional rendering.</li>
                        <li>Assisted in constructing an intuitive and accessible navigation system with <b>Nuxt.js</b>.</li>
                        <li>Followed <b>Git</b> workflow and wrote informative and intuitive <b>Pull Requests</b> to detail component functions.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}