import React from "react";

export default function ExperienceBox(props) {
    return(

        <div className="ExperienceContainer">
            <div className="ExperienceHeader">
                <h1>
                    <a href={props.link}>
                        {props.company}     
                    </a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                </h1>
                <h3>
                    {props.position}
                </h3>
            </div>

            <h4 style={{margin: '0 0 0 5px'}}>
                Skills: {props.techs} 
            </h4>

            <div className="ExperienceInfo">
                {props.children}
            </div>
        </div>

    )
}