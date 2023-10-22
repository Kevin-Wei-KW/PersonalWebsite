import React from "react";

export default function ExperienceBox(props) {
    return(

        <div className="ExperienceContainer">
            <div className="ExperienceHeader">
                <h1>
                    <a href={props.link}>
                        {props.company}     
                    </a>
                    <i style={{fontSize: '25px', marginLeft:'5px'}} className="fa">&#xf08e;</i>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                </h1>
                <h3>
                    {props.position}
                </h3>
            </div>

            <h4 style={{margin: '0 0 0 5px'}}>
                Skills: {props.skills} 
            </h4>
            <p style={{margin: '5px 0 0 5px', fontSize: '14px'}}>
                {props.period}
            </p>


            <div className="ExperienceInfo">
                {props.children}
            </div>
        </div>

    )
}