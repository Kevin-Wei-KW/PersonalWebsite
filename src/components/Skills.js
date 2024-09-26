import React from "react";
import  MediaQuery from 'react-responsive'

import SkillItem from "./containers/SkillItem.js";

export default function Skills() {

    return(
        <div className="Skills">

            <MediaQuery query="(min-width: 768px)">
                <div style={{backgroundColor:"rgb(25, 25, 25)",
                            boxShadow:"0px 0px 5px 10px rgb(25,25,25)",
                            borderRadius:"10px",
                            padding:"10px",
                            width:"50%",
                            margin:"auto"}}>
                    
                    Hover skill bars for more info!             
                </div>
            </MediaQuery>
            
            <h1>Human Languages</h1>
            <div className="SkillSection">
                
                <SkillItem 
                    name = "English"
                    level = {100}>
                    Experience: <u>Native</u> <br/>
                    I am able to express myself articulately with it
                    in both professional and colloquial settings, whether that be through writing or speaking.
                </SkillItem>
                <SkillItem 
                    name = "Mandarin"
                    level = {90}>
                    Experience: <u>Native</u> <br/>
                    I am near fully fluent, easily capable of
                    conducting myself even in professional environments.
                </SkillItem>
                <SkillItem 
                    name = "French"
                    level = {40}>
                    Experience: <u>Beginner</u> <br/>
                    I am capable of basic conversations and slightly more advanced reading.
                    Can follow and carry out simple tasks and instructions.
                </SkillItem>
                <SkillItem 
                    name = "Japanese"
                    level = {10}>
                    Experience: <u>Beginner</u> <br/>
                    I can carry out simple pleasantries and understand easy texts.
                </SkillItem>

            </div>

            <h1>Programming Languages</h1>
            <div className="SkillSection">
                <SkillItem 
                    name = "Java"
                    level = {90}>
                    Experience: <u>3+ years</u> <br/>
                    Have used it for full-stack development. Competed in various programming
                    competitions testing algorithms and logic (CCC, USACO).
                </SkillItem>
                <SkillItem 
                    name = "Python"
                    level = {95}>
                    Experience: <u>3+ years</u> <br/>
                    Had work experience using it for full stack development. Also used it to develop various personal projects.
                </SkillItem>
                <SkillItem 
                    name = "C/C++"
                    level = {75}>
                    Experience: <u>1+ years</u> <br/>
                    Wrote many programs, including a mine sweeper game and transactions tracker.
                    Taken C++ courses at Waterloo, learning pointers and OOP among other concepts.
                </SkillItem>
                <SkillItem 
                    name = "JS/TS"
                    level = {90}>
                    Experience: <u>3+ years</u> <br/>
                    Had work experience developing a web application.
                    Also worked on various other personal projects, from dart game animation to full-stack.
                </SkillItem>
                {/* <SkillItem 
                    name = "Typescript"
                    level = {85}>
                    Experience: <u>1+ years</u> <br/>
                    Extensively used it in work environment, developing rigorous back-end functions (CRUD).
                </SkillItem> */}
            </div>

            <div className="SkillSection">
                <SkillItem 
                    name = "HTML"
                    level = {90}>
                    Experience: <u>3+ years</u> <br/>
                    Developed a plethora of websites of various functions, complete
                    with different back-ends and frameworks.
                </SkillItem>
                <SkillItem 
                    name = "CSS"
                    level = {80}>
                    Experience: <u>3+ years</u> <br/>
                    Designed many website, both for organizational and personal use. Also create many
                    intuitive layouts in professional environments.
                </SkillItem>
                <SkillItem 
                    name = "SQL"
                    level = {60}>
                    Experience: <u>1 year</u> <br/>
                    Practiced SQL extensively for various types of user-based databases.
                </SkillItem>
                <SkillItem 
                    name = "Racket"
                    level = {40}>
                    Experience: <u>1 year</u> <br/>
                    Studied through UBC's CPSC 110 course using racket to learn basic
                    programming skills.
                </SkillItem>
            </div>

            <h1>Technologies</h1>
            <div className="SkillSection">
                <SkillItem
                    name = "Flask"
                    level = {80}>
                    Experience: <u>2+ years</u> <br/>
                    Developed an API with endpoints for my Expense Tracker project that gets/posts transactional data with React frontend.
                </SkillItem>
                <SkillItem
                    name = "PyTorch"
                    level = {75}>
                    Experience: <u>1 year</u> <br/>
                    Develop and fine-tuned various LLMs during past Co-ops.
                </SkillItem>
                <SkillItem
                    name = "FastAPI"
                    level = {70}>
                    Experience: <u>2 years</u> <br/>
                    Had work experience developing API endpoints in past Co-ops.
                </SkillItem>
                <SkillItem
                    name = "Pandas"
                    level = {80}>
                    Experience: <u>1 year</u> <br/>
                    Preprocessed various forms of datasets for tuning LLMs during Co-op. Also developed an ETL pipeline.
                </SkillItem>
            </div>

            <div className="SkillSection">
                <SkillItem
                    name = "AWS"
                    level = {65}>
                    Experience: <u>1 year </u> <br/>
                    Used AWS SageMaker, S3, and ECR for model training and data control during Co-op.
                </SkillItem>
                <SkillItem
                    name = "GCP"
                    level = {70}>
                    Experience: <u>1+ years </u> <br/>
                    Developed Expense Tracker project with Google Authentication and Google API with GCP.
                </SkillItem>
                <SkillItem
                    name = "Docker"
                    level = {75}>
                    Experience: <u>1+ years </u> <br/>
                    During past work experience, pulled images from AWS through Docker to work in a unified environment.
                </SkillItem>
                <SkillItem
                    name = "MongoDB"
                    level = {85}>
                    Experience: <u>1+ years </u> <br/>
                    Developed many data flows with MongoDB in past Co-ops.
                </SkillItem>
            </div>

            <div className="SkillSection">
                <SkillItem
                    name = "ReactJS"
                    level = {85}>
                    Experience: <u>1 year</u> <br/>
                    Created numerous websites, including this personal website and a full stack Expense Tracker app.
                </SkillItem>
                <SkillItem
                    name = "VueJS"
                    level = {90}
                >
                    Experience: <u>1 year</u> <br/>
                    Had work experience developing a financial modelling application. Developed
                    highly flexible and interactive components, used dozens of times across the app.
                </SkillItem>
                <SkillItem
                    name = "NodeJS"
                    level = {50}>
                    Experience: <u>1 year</u> <br/>
                    Used alongside ReactJS. Implemented file manipulation programs.
                </SkillItem>
                <SkillItem
                    name = "NuxtJS"
                    level = {75}>
                    Experience: <u>1 year</u> <br/>
                    Had work experience developing an intuitive and convenient navigation system for a financial modelling application.
                </SkillItem>
            </div>
        
            <div className="SkillSection">
                <SkillItem
                    name = "JupyterLab"
                    level = {60}>
                    Experience: <u>1 year </u> <br/>
                    Used JupyterLab to facilitate LLM development in past work experience.
                </SkillItem>
                <SkillItem
                    name = "Spring"
                    level = {70}>
                    Experience: <u>1+ years </u> <br/>
                    Developed a e-commerce website with Spring and JSP using the MVC design, complete with
                    a database and a user login system.
                </SkillItem>
            </div>


            {/* <div className="SkillSection">
                <SkillItem
                    name = "Selenium"
                    level = {50}>
                    Experience: <u>1 year</u> <br/>
                    Included in webscraper for browser automation to mimic human inquiry.  
                </SkillItem>
                <SkillItem
                    name = "Bootstrap"
                    level = {65}>
                    Experience: <u>&lt;1 year </u> <br/>
                    Developed a simplistic and functional website for my co-founded volunteer organization, Math Connect.
                </SkillItem>
                <SkillItem
                    name = "jQuery"
                    level = {60}>
                    Experience: <u>1 year</u> <br/>
                    Implemented physics mechanics for my dart game by manipulating HTML elements for animation.
                </SkillItem>
            </div>

            <div className="SkillSection">
                <SkillItem
                    name = "Regular Expression"
                    level = {80}>
                    Experience: <u>1+ years</u> <br/>
                    Designed a plethora of different expressions in webscraper to extract targetted information
                    from HTML. 
                </SkillItem>
                <SkillItem
                    name = "Git"
                    level = {90}>
                    Experience: <u>2+ years</u> <br/>
                    Followed git workflow in both professional and personal projects. Worked with
                    teams on complex projects with git.
                </SkillItem>
                <SkillItem
                    name = "Cypress"
                    level = {65}>
                    Experience: <u>&lt;1 year</u> <br/>
                    Conducted End-To-End Testing and Unit Testing on professional web applications. 
                    Particularly designed extensive tests on CRUDs.
                </SkillItem>
                <SkillItem
                    name = "Kivy"
                    level = {70}>
                    Experience: <u>1 year</u> <br/>
                    Developed an expense tracker with functions to read and write transactions to spreadsheets.
                </SkillItem>
            </div> */}

            <h1>Miscellaneous Skills</h1>
            <div className="SkillSection">
                <SkillItem
                    name = "Typing"
                    level = {95}>
                    Fastest Typing Speed: <u>155 wpm</u> <br/>
                    Average Typing Speed: <u>118 wpm</u> <br/>
                    <br/>
                    Source: <a href="https://monkeytype.com/">monkeytype</a>
                </SkillItem>
                <SkillItem
                    name = "Ping Pong"
                    level = {80}>
                    Experience: <u>2+ years</u> <br/>
                    Practiced daily throughout lockdown. Picked up the sport due to Covid restrictions.
                </SkillItem>
                <SkillItem
                    name = "Badminton"
                    level = {65}>
                    Experience: <u>2+ years</u> <br/>
                    My favourite leisure sport to play with family and friends. Played on and off since elementary.
                </SkillItem>
                <SkillItem
                    name = "Volleyball"
                    level = {55}>
                    Experience: <u>1 year</u> <br/>
                    A fun team sport I enjoy playing with friends at university intramurals.
                </SkillItem>
                <SkillItem
                    name = "Cooking"
                    level = {45}>
                    Experience: <u>Beginner</u> <br/>
                    One of my methods of relieving stress. Nothing that will turn heads, but enough to cook a fulfilling meal.
                </SkillItem>

            </div>

        </div>
    )
}