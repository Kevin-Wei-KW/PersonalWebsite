import React from "react";

import SkillItem from "./containers/SkillItem.js";

export default function Skills() {

    return(
        <div className="Page Skills">
            
            <h1>Human Languages</h1>
            <div className="SkillSection">
                
                <SkillItem 
                    name = "English"
                    level = {100}
                    info = "English is my native language. I am able to express myself articulately with it
                            in both professional and colloquial settings, whether that be through writing or speaking."
                />
                <SkillItem 
                    name = "Mandarin"
                    level = {90}
                    info = "Mandarin is also one of my native languages. I am almost fully fluent in it, easily capable of
                            conducting myself even in professional environments, but perhaps lacking some jargons."                
                />
                <SkillItem 
                    name = "French"
                    level = {40}
                    info = "I am capable of basic conversations and slightly more advanced reading comprehension. However, due to lacking
                            practice, I cannot freely express myself."               
                />
                <SkillItem 
                    name = "Japanese"
                    level = {10}
                    info = "I can carry out simple pleasantries and understand easy texts. Due to not having studied it for long,
                            I still lack a lot of vocabulary."
                />

            </div>

            <h1>Programming Languages</h1>
            <div className="SkillSection">
                <SkillItem 
                    name = "Java"
                    level = {90}
                    info = "4+ years of experience. Have used it for full-stack development. Competed in various programming
                            competitions testing algorithms and logic (CCC, USACO)."
                />
                <SkillItem 
                    name = "Python"
                    level = {75}
                    info = "2+ years of experience. Developed web scrapers, automations, and other programs."
                />
                <SkillItem 
                    name = "C++"
                    level = {75}
                    info = "1+ years of experience. Wrote many programs, including a mine sweeper game and transactions tracker.
                            Taken C++ courses at Waterloo, learning pointers and OOP among other concepts."
                />
                <SkillItem 
                    name = "HTML"
                    level = {90}
                    info = "3+ years of experience. Developed a plethora of websites of various functions, complete
                            with different back-ends and frameworks."
                />
                <SkillItem 
                    name = "JavaScript"
                    level = {85}
                    info = "3+ years of experience, including work experience developing a web application.
                            Also worked on various other personal projects, from dart game animation to full-stack."
                />
                <SkillItem 
                    name = "Typescript"
                    level = {85}
                    info = "1+ years of experience. Extensively used it in work environment, developing rigorous back-end functions (CRUD)."
                />
            </div>
            <div className="SkillSection">
                <SkillItem 
                    name = "CSS"
                    level = {80}
                    info = "3+ years of experience. Designed many website, both for organizational and personal use. Also create many
                            intuitive layouts in professional environments."
                />
                <SkillItem 
                    name = "SQL"
                    level = {60}
                    info = "1+ years of experience. Practiced SQL extensively for various types of user-based databases."
                />
                <SkillItem 
                    name = "Racket"
                    level = {40}
                    info = "1 year of experience. Studied through UBC's CPSC 110 course using racket to learn basic
                            programming skills."
                />
            </div>

            <h1>Technologies</h1>
            <div className="SkillSection">
                <SkillItem
                    name = "ReactJS"
                    level = {80}
                />
                <SkillItem
                    name = "VueJS"
                    level = {90}
                />
                <SkillItem
                    name = "Spring"
                    level = {70}
                />
                <SkillItem
                    name = "NodeJS"
                    level = {50}
                />
                <SkillItem
                    name = "Flask"
                    level = {70}
                />
                <SkillItem
                    name = "Selenium"
                    level = {50}
                />
            </div>
            <div className="SkillSection">

                <SkillItem
                    name = "NuxtJS"
                    level = {75}
                />
                <SkillItem
                    name = "Bootstrap"
                    level = {65}
                />
                <SkillItem
                    name = "jQuery"
                    level = {60}
                />
                <SkillItem
                    name = "Regular Expression"
                    level = {80}
                />
                <SkillItem
                    name = "Git"
                    level = {90}
                />

            </div>

            <h1>Miscellaneous Skills</h1>
            <div className="SkillSection">

                <SkillItem
                    name = "Typing"
                    level = {95}
                />
                <SkillItem
                    name = "Ping Pong"
                    level = {80}
                />
                <SkillItem
                    name = "Badminton"
                    level = {65}
                />
                <SkillItem
                    name = "Googling"
                    level = {100}
                />
                <SkillItem
                    name = "Drawing"
                    level = {10}
                />
                <SkillItem
                    name = "Cooking"
                    level = {40}
                />
                <SkillItem
                    name = "Gaming"
                    level = {60}
                />

            </div>

        </div>
    )
}