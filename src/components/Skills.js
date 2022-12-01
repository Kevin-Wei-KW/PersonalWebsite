import React from "react";

import SkillItem from "./SkillItem.js";

export default function Skills() {
    console.log("Skills Rendered");

    return(
        <div className="Skills">
            
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
                    level = {70}
                />
                <SkillItem 
                    name = "C++"
                    level = {70}
                />
                <SkillItem 
                    name = "HTML/CSS"
                    level = {85}
                />
                <SkillItem 
                    name = "JavaScript"
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
                <SkillItem
                    name = "Bootstrap"
                    level = {60}
                />
                <SkillItem
                    name = "Regular Expression"
                    level = {80}
                />


            </div>

        </div>
    )
}