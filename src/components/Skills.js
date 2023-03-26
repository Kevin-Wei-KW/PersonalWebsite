import React from "react";

import SkillItem from "./SkillItem.js";

export default function Skills() {

    return(
        <div className="Page Skills">
            
            <h1>Human Languages</h1>
            <div className="SkillSection">
                
                <SkillItem 
                    name = "English"
                    level = {100}
                />
                <SkillItem 
                    name = "Mandarin"
                    level = {90}
                />
                <SkillItem 
                    name = "French"
                    level = {40}
                />
                <SkillItem 
                    name = "Japanese"
                    level = {10}
                />

            </div>

            <h1>Programming Languages</h1>
            <div className="SkillSection">
                <SkillItem 
                    name = "Java"
                    level = {90}
                />
                <SkillItem 
                    name = "Python"
                    level = {75}
                />
                <SkillItem 
                    name = "C++"
                    level = {75}
                />
                <SkillItem 
                    name = "HTML"
                    level = {90}
                />
                <SkillItem 
                    name = "JavaScript"
                    level = {85}
                />
                <SkillItem 
                    name = "Typescript"
                    level = {85}
                />
            </div>
            <div className="SkillSection">
                <SkillItem 
                    name = "CSS"
                    level = {80}
                />
                <SkillItem 
                    name = "SQL"
                    level = {65}
                />
                <SkillItem 
                    name = "Racket"
                    level = {50}
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