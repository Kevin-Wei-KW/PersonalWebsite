import React, {useEffect} from "react";
import ExperienceBox from './containers/ExperienceBox';

export default function Experience() {
    return(
        <div className="Experience">
            <ExperienceBox
                link="https://gochartd.com"
                company="Chartd"
                position="Software Developer, ML"
                skills="Python, FastAPI, PyTorch, Pandas, AWS, Azure, NLP, JupyterLab, Hugging Face"
                period="May 2024 - August 2024 | 4 months">
                <ul>
                    <li>Architected and deployed a <b>low-latency API pipeline</b> for real-time text processing, integrating sentiment analysis and RAG, achieving <b>sub-2 second</b> response times.</li>
                    <li>Developed a scalable infrastructure built on <b>AWS</b> for end-to-end model training and deployment, leveraging <b>SageMaker, S3, and ECR</b> to streamline data processing pipelines and reduce deployment time by <b>40%</b>.</li>
                    <li>Delivered a custom data generation platform capable of producing datasets of up to <b>10 million</b> entries with dynamically adjustable input parameters, accelerating data preparation by up to <b>60%</b>.</li>
                    <li>Enhanced product reporting systems with automatic data analysis and insights, dramatically reducing report generation time with NLP models deployed through <b>Azure</b> API Management.</li>
                </ul>
            </ExperienceBox>

            <ExperienceBox
                link="https://gochartd.com"
                company="Chartd"
                position="Full Stack Developer"
                skills="Python, MongoDB, Pandas, VueJS, Typescript, Docker, ETL"
                period="September 2023 - December 2023 | 4 months">
                <ul>
                    <li> Worked on a Business-Intelligence platform built atop Machine Learning language models, which evaluates financial data to provide statistics and insights on business performance.</li>
                    <li> Implemented a data <b>ETL</b> pipeline with <b>Python</b> through async <b>FastAPI</b> endpoints, processing <b>10,000+</b> data points from user uploaded files to <b>MongoDB</b> with <b>less than 3</b> seconds of latency.</li>
                    <li> Designed a Data Management page with <b>TypeScript</b> and <b>Vue.js</b>, letting users customize data transformation.</li>
                    <li> Enforced data governance by creating robust <b>Pydantic</b> models that the language models infer to generate response.</li>
                    <li> Developed both frontend and backend in a fully <b>Dockerized</b> environment with multiple containers.</li>
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