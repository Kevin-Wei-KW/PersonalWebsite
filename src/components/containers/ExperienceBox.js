import React from "react";

export default function ExperienceBox(props) {
    return(

        <div className="ExperienceContainer">
            <div className="ExperienceHeader">
                <h1>
                    {props.position}
                    {/* <i style={{fontSize: '25px', marginLeft:'5px'}} className="fa">&#xf08e;</i> */}
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                </h1>
                <h1>
                    <a href={props.link}>
                        {props.company}<i style={{fontSize: "24px", marginLeft: "8px"}} className="fa">&#xf08e;</i> 
                    </a>
                </h1>
            </div>

            <h4 style={{margin: '10px 0 20px 3px'}}>
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